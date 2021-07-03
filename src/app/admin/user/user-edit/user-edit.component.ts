import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TotalSystemService } from '../../../All-Services/total-system.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SoftwareContentService } from '../../../All-Services/software-content.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  paramsSubscription: Subscription;

  Activeuser: any = {};

  id: number;

  regPassowrd: any = /^\b[A-Z0-9._%()-]+@[A-Z]+\.[A-Z]{2,3}\b$/i;

  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private _SoftwareContentService: SoftwareContentService, private _TotalSystemService: TotalSystemService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.Activeuser = this._SoftwareContentService.goadminAccount()[params['id']];

      this.id = params['id'];

      // console.log(this.Activeuser);

    });
  }

  resetPasswrd(param1, param2) {
    param1.style.display = 'none';

    param2.style.display = 'inline-block';
  }

  reg3: any = /[A-B0-9]/g;

  setPassword(param1, param2, CurrentPassword, NewPassword, ConfirmPassword, errorPassword) {

    if (CurrentPassword.value == this.Activeuser['password']) {

      // reg3.test(d.value))

      if (this.reg3.test(NewPassword.value)) {

        errorPassword.style.display = 'none';

        if (NewPassword.value == ConfirmPassword.value) {

          this._SoftwareContentService.goadminAccount()[this.id]['password'] = NewPassword.value;

          // console.log(this._SoftwareContentService.goadminAccount());

          param1.style.display = 'inline-block';

          param2.style.display = 'none';

          CurrentPassword.value = '';

          NewPassword.value = '';

          ConfirmPassword.value = '';

          ConfirmPassword.classList.remove('your-class');

          ConfirmPassword.placeholder = 'Confirm Password';

          NewPassword.classList.remove('your-class');

          NewPassword.placeholder = 'New Password';

          errorPassword.style.display = 'none';

          CurrentPassword.classList.remove('your-class');

          CurrentPassword.placeholder = 'Current Password';

          this._snackBar.open('Password for ' + this.Activeuser['Name'] + ' has been Updated', 'Successfully !', {
            duration: 2000,
          });

        } else {
          ConfirmPassword.classList.add('your-class');
          ConfirmPassword.placeholder = '* Password Does not Match';
          ConfirmPassword.value = '';
        }

      } else {
        NewPassword.classList.add('your-class');
        NewPassword.value = '';
        errorPassword.style.display = 'inline-block';
      }

    } else {

      CurrentPassword.classList.add('your-class');
      CurrentPassword.placeholder = '* Password is Incorrect';
      CurrentPassword.value = '';
    }
  }

  shwpasswrd_1(shwPsswrd, hdePsswrd, CurrentPassword) {

    shwPsswrd.style.display = "none";

    hdePsswrd.style.display = "inline";

    CurrentPassword.type = "text";
  }

  hdepasswrd_1(shwPsswrd, hdePsswrd, CurrentPassword) {
    shwPsswrd.style.display = "inline";

    hdePsswrd.style.display = "none";

    CurrentPassword.type = "password";
  }


  shwpasswrd_2(shwPsswrd, hdePsswrd, NewPassword) {

    shwPsswrd.style.display = "none";

    hdePsswrd.style.display = "inline";

    NewPassword.type = "text";
  }

  hdepasswrd_2(shwPsswrd, hdePsswrd, NewPassword) {
    shwPsswrd.style.display = "inline";

    hdePsswrd.style.display = "none";

    NewPassword.type = "password";
  }

  shwpasswrd_3(shwPsswrd, hdePsswrd, ConfirmPassword) {

    shwPsswrd.style.display = "none";

    hdePsswrd.style.display = "inline";

    ConfirmPassword.type = "text";
  }

  hdepasswrd_3(shwPsswrd, hdePsswrd, ConfirmPassword) {
    shwPsswrd.style.display = "inline";

    hdePsswrd.style.display = "none";

    ConfirmPassword.type = "password";
  }


  idChange: Boolean = true;

  adminArr: {}[] = this._SoftwareContentService.goadminAccount();

  editSystemInfrm(name, userId, userImg, userContact, userEmail, userJob) {


    for (let i = 0; i < this.adminArr.length; i++) {
      if (this.adminArr[i]["active"] == false) {
        console.log(this.adminArr[i]);

        if (userId.value == this.adminArr[i]['id']) {

          this.idChange = false;

          console.log(this.adminArr[i]['id']);
        }

        if (userId.value == this.adminArr[this.id]['id']) {

          this.idChange = true;

        }
      }
    }

    if (this.idChange == true) {

      this._SoftwareContentService.goadminAccount()[this.id]['Name'] = name.value;

      this._SoftwareContentService.goadminAccount()[this.id]['id'] = userId.value;

      this._SoftwareContentService.goadminAccount()[this.id]['profileImg'] = userImg.value;

      this._SoftwareContentService.goadminAccount()[this.id]['contact'] = userContact.value;

      this._SoftwareContentService.goadminAccount()[this.id]['email'] = userEmail.value;

      this._SoftwareContentService.goadminAccount()[this.id]['job'] = userJob.value;

      this.router.navigate(['../'], { relativeTo: this.route });

      // console.log(this._TotalSystemService.allSystem); 

      this._snackBar.open(name.value + ' profile has been Updated', 'Successfully !', {
        duration: 2000,
      });
    } else {
      alert('Sorry! You cannot change your id to this');

      this.idChange = true;
    }

  }

}
