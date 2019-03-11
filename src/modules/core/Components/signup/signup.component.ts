import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { CommonService } from '../../Services/common.service';
import { AuthenticationService } from '../../Services/authentication.service';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public countryList: any;
  public searchfilter: string = "";
  public countryCode: any;
  public phoneCode = "Country Code";
  public inputType = 'password';
  public visible = false;
  public signupForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmpass: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    contact: ['', Validators.required]
  });

  get aliases() {
    return this.signupForm.get('aliases') as FormArray;
  }
  constructor(public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private commonService: CommonService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.getCountry();
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
  getCountry() {
    this.commonService.getCountry().subscribe(responseCountryList => {
      this.countryList = responseCountryList;
    })
  }
  onSelect(countryName) {
    for (var i = 0; i < this.countryList.length; i++) {
      this.countryCode = this.countryList[i].name;
      if (this.countryList[i].name === countryName) {
        this.phoneCode = "+" + this.countryList[i].phonecode;
        console.log(' this.phoneCode==', this.phoneCode);
      }

    }
  }
  openLoginModel() {
    this.modalService.open(LoginComponent);
  }


  registerUser() {
    console.log(this.signupForm.value);
    this.authenticationService.registerUser(this.signupForm.value).subscribe(resp => {
      console.log('registerUser====>>', resp);
      if (resp.status == true) {
        this.modalService.dismissAll(SignupComponent);
        this.notificationsService.success('Success!', resp.message, {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          maxLength: 30
        });
      }else{
        this.modalService.dismissAll(SignupComponent);
        this.notificationsService.error('Error!', resp.message, {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          maxLength: 30
        });
      }
    });
  }

}
