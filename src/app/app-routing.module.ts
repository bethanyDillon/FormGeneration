import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

const routes: Routes = [
  { path: 'login', component: UserAuthenticationComponent},
  { path: 'home', component: HomeComponent},
  { path: ':address', component: PropertyComponent},
  { path: '**', redirectTo: 'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
