import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { AllUserDetailsComponent } from './components/all-user-details/all-user-details.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UserProfileComponent, 
    UserProfileEditComponent, 
    AllUserDetailsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    ],
  exports: [
    UserProfileComponent, 
    UserProfileEditComponent, 
    AllUserDetailsComponent,
    UserComponent
  ],
  providers:[UserService],
  entryComponents:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class UserModule { }
