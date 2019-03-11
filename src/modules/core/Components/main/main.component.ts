import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../signup/signup.component';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  homeArr: any;
  homeSubArr: any;
  UserResponse: any;
  postResponse: any;
  trendreResponse: any;
  userMap = {};
  constructor(private commonService: CommonService,
               private modalService: NgbModal) { }
 
  ngOnInit() {
    this.homeArrData();
    this.userFeedbackAndPost();
  }

  homeArrData(){
    this.homeArr = [];
    this.homeSubArr = [];
     this.commonService.homeArrData().subscribe(responseList => {
      this.homeArr = responseList[0];
      this.homeSubArr = responseList[1];
      this.trendreResponse = responseList[2];
     });
  }
  userFeedbackAndPost(){
    this.commonService.userFeedbackAndPost().subscribe(responseList => {
      this.UserResponse = responseList[0];
      this.postResponse = responseList[1];
      this.userMap = {};
        for (let i = 0; i < this.UserResponse.length; i++) {
            this.userMap[this.UserResponse[i].id] = this.UserResponse[i].name;
        }
        
      });
  }
openSignUpModel(){
  this.modalService.open(SignupComponent);
}
}
