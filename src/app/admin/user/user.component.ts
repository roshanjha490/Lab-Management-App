import { Component, OnInit, DoCheck } from '@angular/core';
import { SoftwareContentService } from '../../All-Services/software-content.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, DoCheck {

  condition1: boolean = true;

  users: {}[];

  public activeUser: any;

  // activeJob: string;

  constructor(private _SoftwareContentService: SoftwareContentService) { }

  ngOnInit() {

    this.users = this._SoftwareContentService.goadminAccount();

    // console.log(this.users);

    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i]['active'] == true) {

        this.activeUser = this.users[i];

        // this.activeJob = this.users[i]['ID'];

        // console.log(this.activeJob);

        // console.log(this.activeUser);

      }

    }


  }

  searchTerm: string = '';

  ngDoCheck() {

    // this.searchTerm = this._SoftwareContentService.searchterm;

  }


  // onKey(param1) {

  //   this._SoftwareContentService.searchterm = param1.target.value;

  //   // console.log(this._SoftwareContentService.searchterm);


  // };

  // onBlue(param2) {

  //   this._SoftwareContentService.searchterm = '';

  //   // console.log(this._SoftwareContentService.searchterm);


  // };

  openDialog(param1) {
    if (this.activeUser['id'] == 'AD/RH/WM/01' || this.activeUser['id'] == param1) {
      this.condition1 = false;
    } else {
      alert('Sorry You cannot View This Profile');
    }
  }

  closeDialog() {
    this.condition1 = true;
  }



  userId: '';

  userName: '';

  user_password: '';

  user_confirmpassword: '';

  userProfile: '';

  userJob: '';

  user_contact: '';

  userEmail: '';

  date: Date = new Date();

  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  addUser() {
    this._SoftwareContentService.goadminAccount().push({
      ID: this._SoftwareContentService.adminAccount.length,
      id: this.userId,
      Name: this.userName,
      active: false,
      profileImg: 'assets/06.jpg',
      password: this.user_password,
      job: this.userJob,
      joinedIn: this.date.getDate() + ' ' + this.months[this.date.getMonth()] + ' ' + this.date.getFullYear(),
      contact: this.user_contact,
      email: this.userEmail,
    });


    console.log(this.date.getDate() + '' + this.date.getMonth() + '' + this.date.getFullYear());


  }

}
