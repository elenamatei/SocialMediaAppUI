import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {FeedComponent} from "./pages/feed/feed.component";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";
import {PetProfileComponent} from "./pages/pet-profile/pet-profile.component";
import {RegisterPetComponent} from "./pages/register-pet/register-pet.component";
import {MyPetsPageComponent} from "./pages/my-pets-page/my-pets-page.component";
import {MyPetsListCardComponent} from "./components/my-pets-list-card/my-pets-list-card.component";
import {AllUsersComponent} from "./pages/all-users/all-users.component";
import {ProfileCardComponent} from "./components/profile-card/profile-card.component";
import {ProfileDetailsComponent} from "./pages/profile-details/profile-details.component";
import {EditPetProfileComponent} from "./pages/edit-pet-profile/edit-pet-profile.component";
import {AdoptionsComponent} from "./pages/adoptions/adoptions.component";
import {BirthdaysPageComponent} from "./pages/birthdays-page/birthdays-page.component";


const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profile/:id', component:ProfileComponent},
  {path:'feed', component:FeedComponent},
  {path:'editProfile', component:EditProfileComponent},
  {path:'petProfile', component:PetProfileComponent},
  {path:'registerPet', component:RegisterPetComponent},
  {path:'myPets', component:MyPetsPageComponent},
  {path:'myPetsCard', component:MyPetsListCardComponent},
  {path:'allUsers', component:AllUsersComponent},
  {path:'profileCard', component:ProfileCardComponent},
  {path:'addDetails', component:ProfileDetailsComponent},
  {path:'addDetails/:id', component:ProfileDetailsComponent},
  {path:'editPetProfile', component:EditPetProfileComponent},
  {path:'adoptions', component:AdoptionsComponent},
  {path:'birthdays', component:BirthdaysPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
