import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreRoutingModule } from './core-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
import { UserModule } from '../user/user.module';
import { RootComponent } from './Components/root/root.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MainComponent } from './Components/main/main.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CommonService } from './Services/common.service';
import { TextFilterPipe } from './pipes/text-filter.pipe';
import { AuthenticationService } from './Services/authentication.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoggingHttpInterceptor } from '../_helpers/logging-httpInterceptor';
@NgModule({
  declarations: [
    RootComponent, 
    HeaderComponent, 
    FooterComponent, 
    LoginComponent, 
    SignupComponent, 
    MainComponent, 
    SideNavComponent, 
    ForgotPasswordComponent, 
    PageNotFoundComponent, 
    TextFilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    UserModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    CommonService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingHttpInterceptor, multi: true }
  ],
  entryComponents: [
    LoginComponent, 
    SignupComponent, 
    SideNavComponent,
    ForgotPasswordComponent,
  ],
  bootstrap: [RootComponent]
})
export class CoreModule { }
