import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTypes } from '../shared/userTypes';
import { User } from '../shared/user';
import { DataService } from '../shared/dataService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit, OnDestroy {
  signstatus: string = 'signin'
  toVerifyEmail: boolean = false;

  email: string;
  authInfo : Map<string, string>;
  authCodes : Array<string>;

  organisationId: string;

  user: User = new User();
  
  subscription: Subscription;

  private userTypes: UserTypes = new UserTypes();
  accountTypes: any = this.userTypes.getAccountTypes();
  accountType: string = this.userTypes.admin;

  constructor(private route: Router, private httpClient: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.currentStore.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSignUp() {
    this.signstatus = 'signup';
  }

  onSignIn() {
    this.signstatus = 'signin';
  }

  accountTypeChangeHandler (event: any) {
    //update the ui
    this.accountType = event.target.value;
  }

  //Sign user up
  signUpToAWS(email: HTMLInputElement,name: HTMLInputElement,password: HTMLInputElement,authCode: HTMLInputElement) {
    
    this.email = email.value;

    this.CheckAuth().then( response => {
      //If the auth code provided by the user exists, let them create their account.
      if (this.authCodes.indexOf(authCode.value) > -1) {

        this.organisationId = Array.from(this.authInfo.keys())[this.authCodes.indexOf(authCode.value)];

        const user = {
          username: email.value,
          password: password.value,
          attributes: {
              email: email.value,
              name: name.value
          }
        }          
        Auth.signUp(user)
          .then(data => {
            console.log(data);

            //Put User information in User table

            const tableEntry = {
              email: email.value,
              name: name.value,
              organisationId: this.organisationId,
              accountType: this.accountType
            }
            var newUser = JSON.stringify(tableEntry);

            this.PutUser(newUser)
            .then( response => {
              this.toVerifyEmail = true;
              this.signstatus = "";
            })
            .catch(err => console.log(err));
            
          })
          .catch(err => console.log(err));
      }
      else {
        //TODO: error handling
      }
    }
      
    );

  }

  onVerify(verifycode: HTMLInputElement) {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.email, verifycode.value, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true    
      }).then(data => {
        console.log(data)
        this.toVerifyEmail = false;
        this.signstatus = 'signin'
      })
        .catch(err => console.log(err));
  }

  signInToAWS(email: HTMLInputElement, password: HTMLInputElement ) {

    const authInfo = {
      username: email.value,
      password: password.value
    }

    Auth.signIn(authInfo).then(user => {
      console.log(user);
      
      this.GetUser(email.value).then(
        response => { 
          var currentStore = new Map<string, object>();
          currentStore.set("user", this.user);
          this.dataService.changeStore(currentStore);
          this.route.navigate(['/home']) 
        },
        error => {
          console.log(error);
        } 
      );  
    })
      .catch(err => console.log(err));

  }

  async GetUser(email: string) {   
    var url = 'https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/user/' + email;
    await this.httpClient.get(url)
      .toPromise()
        .then(
          response => {         
            this.user = this.user.deserialiseAsUser(response);
          },
          error => {
            console.log(error);
          }
        )
  }

  async CheckAuth() {   
    await this.httpClient.get('https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/organisation/auth')
      .toPromise()
        .then(
          response => {   
            this.authInfo = new Map<string, string>();
            this.authCodes = new Array<string>();
            var responseObj = JSON.parse(response.toString()); 
            for (var value in responseObj) {
              this.authInfo.set(value, responseObj[value]);
              this.authCodes.push(responseObj[value])
            }
          },
          error => {
            console.log(error);
          }
        )
  }

  async PutUser(user: string) {
  var headers = new HttpHeaders().set("content-type", "application/json");
    await this.httpClient.post('https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/user', 
    user,
    { headers })
    .toPromise()
    .then(
      response => {          
        var resp = JSON.parse(response.toString()); 
        console.log(resp);         
        this.user = this.user.deserialiseAsUser(resp);
      },
      error => {
        console.log(error);
      }
    )
  }

  
}

