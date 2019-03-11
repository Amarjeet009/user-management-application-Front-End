import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { MainComponent } from './Components/main/main.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { UserProfileComponent } from '../user/components/user-profile/user-profile.component';
import { UserProfileEditComponent } from '../user/components/user-profile-edit/user-profile-edit.component';
import { AllUserDetailsComponent } from '../user/components/all-user-details/all-user-details.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path:'user', component: UserComponent, 
  children:[
    {path:'profile', component: UserProfileComponent},
    {path:'edit-profile', component: UserProfileEditComponent},
    {path:'all', component: AllUserDetailsComponent}
    // {path:'profile', loadChildren:'../user/user.module#UserModule'},
    // {path:'edit-profile',loadChildren:'../user/user.module#UserModule'},
    // {path:'all', loadChildren:'../user/user.module#UserModule'},
  ]},
  
  {path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
