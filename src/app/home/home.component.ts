import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";
import { Subscription } from 'rxjs';
import { DataService } from '../shared/dataService'
import { Property } from '../shared/property';
import { User } from '../shared/user';
import { UserTypes } from '../shared/userTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  user: User = new User();
  property: Property = new Property();
  properties: Property[] = new Array<Property>();
  installManagers: string[] = new Array<string>();
  installers: string[] = new Array<string>();

  userTypes: UserTypes = new UserTypes();
  
  constructor(private router: Router, private httpClient: HttpClient, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentStore.subscribe(store => {
      this.user = this.user.deserialiseAsUser(store.get("user"));
    });

    //Get properties
    this.GetProperties()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async PutProperty(property: Property) {
    var headers = new HttpHeaders().set("content-type", "application/json");
        await this.httpClient.post('https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/property', 
        property,
        { headers })
        .toPromise()
        .then(
          response => {          
            var resp = JSON.parse(response.toString()); 
            console.log(resp);         
            this.properties.push(this.property.deserialiseAsProperty(resp));
          },
          error => {
            console.log(error);
          }
        )
  }

  async GetInstallers() {
    var url = 'https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/installer/' + this.user.organisationId;
    await this.httpClient.get(url)
      .toPromise()
        .then(
          response => {         
            console.log(response.toString()); 
            //??
            let resp = response as string[]; 
            resp.forEach(obj => {
              this.installers.push(obj);
            })   
          },
          error => {
            console.log(error);
          }
        )
  }

  async GetInstallManagers() {
    var url = 'https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/installmanager/' + this.user.organisationId;
    await this.httpClient.get(url)
      .toPromise()
        .then(
          response => {         
            console.log(response.toString()); 
            //??
            let resp = response as string[]; 
            resp.forEach(obj => {
              this.installManagers.push(obj);
            })   
          },
          error => {
            console.log(error);
          }
        )
  }

  async GetProperties() {   
    var url = 'https://9qm95ixxq3.execute-api.eu-west-2.amazonaws.com/prod/property/';
    if (this.user.accountType == this.userTypes.admin) {
      // get all properties for organisation
      url += this.userTypes.admin + "_" + this.user.organisationId;
    }
    else if (this.user.accountType == this.userTypes.installManager) {
      // get all properties for userId
      url += this.userTypes.installManager + "_" + this.user.name;
    }
    else if (this.user.accountType == this.userTypes.installer) {
      // get all properties for userId where survey or install date is today
      url += this.userTypes.installer + "_" + this.user.name;
    }
    
    await this.httpClient.get(url)
      .toPromise()
        .then(
          response => {         
            console.log(response.toString()); 
            let resp = response as object[]; 
            resp.forEach(obj => {
              var tempProperty = this.property.deserialiseAsProperty(obj);
              this.properties.push(tempProperty);
            })   
          },
          error => {
            console.log(error);
          }
        )
  }

  goToProperty(property: Property) {
    this.dataService.appendStore(new Map<string, object>().set("property", property))
    this.router.navigate(["/", property.address.replace(/ /g, '_')]);
  }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        console.log("You are successfully logged out");
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(err));
  }

  
}
