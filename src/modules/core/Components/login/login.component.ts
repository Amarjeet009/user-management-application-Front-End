import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthenticationService } from '../../Services/authentication.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public inputType = 'password';
  public visible = false;
  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get aliases() {
    return this.loginForm.get('aliases') as FormArray;
  }
  constructor(public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private notiService: NotificationsService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
  }

  openSignUpModel() {
    this.modalService.open(SignupComponent);
  }

  openForgotPasswordModel() {
    this.modalService.open(ForgotPasswordComponent)
  }

  userLogin() {
    this.authenticationService.userLogin(this.loginForm.value).subscribe(resp => {
      if (resp.status == true) {
        this.modalService.dismissAll(LoginComponent);
        this.router.navigate(['/user/profile']);
        this.notiService.success('Success!', resp.message, {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      }else{
        this.modalService.dismissAll(LoginComponent);
        this.notiService.error('Error!', resp.message, {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      }
      return resp;
    });
  }




  show() {
    this.inputType = 'text';
    this.visible = true;
    this.changeDetectorRef.markForCheck();
  }

  hide() {
    this.inputType = 'password';
    this.visible = false;
    this.changeDetectorRef.markForCheck();
  }

}
