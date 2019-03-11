import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { AllUserDetailsComponent } from './components/all-user-details/all-user-details.component';

const routes: Routes = [
// {path:' ', component:UserProfileComponent},
// {path:'1', component:UserProfileEditComponent},
// {path:'2', component:AllUserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class UserRoutingModule { }
