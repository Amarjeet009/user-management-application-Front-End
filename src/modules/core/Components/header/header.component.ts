import { Component, OnInit, ViewChild, AfterViewInit, Output, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../../Services/authentication.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit{
   fullName: any;
   isVisible: boolean = false;
  constructor(private modalService: NgbModal,
              private authenticationService: AuthenticationService,
              private notificationsService: NotificationsService,
              private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('fullName') !=null){
      this.fullName = localStorage.getItem('fullName');
       this.isVisible = true;
    }else{
      this.isVisible = false;
    }
  }

  ngAfterViewInit() {
  } 
  openLoginModel() {
    console.log("clickckck");
     this.modalService.open(LoginComponent);
  }

  logout(){
   localStorage.clear();
   this.notificationsService.success('Success!', 'Logout Success Fully', {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    maxLength: 30
  });
  this.router.navigate(["/"]);
  }
}
