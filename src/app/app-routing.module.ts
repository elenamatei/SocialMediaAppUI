import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {FeedComponent} from "./pages/feed/feed.component";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";
import {PetProfileComponent} from "./pages/pet-profile/pet-profile.component";

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'feed', component:FeedComponent},
  {path:'editProfile', component:EditProfileComponent},
  {path:'petProfile', component:PetProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
