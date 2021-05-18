import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/dataService';
import { Property } from '../shared/property';
import { User } from '../shared/user';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  user: User = new User();
  property: Property = new Property();

  constructor(private router: Router, private httpClient: HttpClient, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentStore.subscribe(store => {
      this.user = this.user.deserialiseAsUser(store.get("user"));
      this.property = this.property.deserialiseAsProperty(store.get("property"));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
