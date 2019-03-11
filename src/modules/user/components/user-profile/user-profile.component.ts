import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../Interfaces/user-interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 firstName : string;
 lastName : string;
 username : string;
 createdDate: any;
 contact: number;
@Output() userInterface = new EventEmitter<UserInterface>();
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.getCurrentUserData();
  }

  getCurrentUserData(){
    this.userService.getCurrentUserData().subscribe(userResponse => {
      this.userInterface  = userResponse.data;
      console.log('this.userInterface==='+JSON.stringify(this.userInterface));
      this.firstName = userResponse.data.firstName;
      this.lastName = userResponse.data.lastName;
      localStorage.setItem('fullName', this.firstName+' '+this.lastName)
      this.username = userResponse.data.username;
      this.createdDate = userResponse.data.createdDate;
      this.contact = userResponse.data.contact;

    })
  }
  
}
