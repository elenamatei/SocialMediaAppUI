import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import { HomeComponent } from './pages/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from "@angular/material/core";
import { ProfileComponent } from './pages/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { FeedComponent } from './pages/feed/feed.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PetProfileComponent } from './pages/pet-profile/pet-profile.component';
import { RegisterPetComponent } from './pages/register-pet/register-pet.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatStepperModule} from '@angular/material/stepper';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostComponent } from './components/post/post.component';
import { MyPetsListCardComponent } from './components/my-pets-list-card/my-pets-list-card.component';
import { MyPetsPageComponent } from './pages/my-pets-page/my-pets-page.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { EditPetProfileComponent } from './pages/edit-pet-profile/edit-pet-profile.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AdoptionsComponent } from './pages/adoptions/adoptions.component';
import { AdoptionCardComponent } from './components/adoption-card/adoption-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    FeedComponent,
    EditProfileComponent,
    PetProfileComponent,
    RegisterPetComponent,
    NavBarComponent,
    PostComponent,
    MyPetsListCardComponent,
    MyPetsPageComponent,
    AllUsersComponent,
    ProfileCardComponent,
    ProfileDetailsComponent,
    EditPetProfileComponent,
    CreatePostComponent,
    AdoptionsComponent,
    AdoptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    MatBadgeModule,
    MatRadioModule,
    MatStepperModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
