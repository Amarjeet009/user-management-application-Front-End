import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal ) { }

  ngOnInit() {
  }

  openLoginModel(){
    this.modalService.open(LoginComponent)
  }
}
