import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SoftwareContentService } from "../All-Services/software-content.service";
import { AuthService } from "../Authentication/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private _SoftwareContentService: SoftwareContentService,
    private authService: AuthService
  ) { }

  adminArr: {}[] = this._SoftwareContentService.goadminAccount();

  ngOnInit() {
    let self = this;

    function logout() {
      // alert('Logout Run');

      for (let i = 0; i < self.adminArr.length; i++) {
        if (self.adminArr[i]["active"] == true) {
          self._SoftwareContentService.goadminAccount()[i]["active"] = false;
        }
      }

      self.authService.logout();
    }

    logout();
  }

  logout() {
    alert(true);
  }

  idNo: {}[] = this._SoftwareContentService.goadminAccount();

  errorIn_id: boolean = false;

  errorIn_psswrd: boolean = false;

  goToAdmin(param1, param2) {

    if (param1.value == "") {

      param1.placeholder = "* Please enter your ID";

      param1.classList.add('your-class');

      if (param2.value == "") {

        param2.placeholder = '* Please enter your Password';

        param2.classList.add('your-class');

      }

      if (param2.value !== "") {

        param2.placeholder = '* Please enter your ID first';

        param2.classList.add('your-class');

        param2.value = "";

      }
    } else {

      for (let i = 0; i < this.idNo.length; i++) {

        if (param1.value == this.idNo[i]['id']) {

          if (param2.value == this.idNo[i]['password']) {

            this._SoftwareContentService.adminAccount[i]['active'] = true;

            this.authService.login();

            this.router.navigate(['/admin/dashboard']);

            this.errorIn_psswrd = false;

          } else {
            this.errorIn_psswrd = true;
          }

          this.errorIn_id = false;

          break;

        } else {

          this.errorIn_id = true;
        }

      }

      if (this.errorIn_id == true) {

        param1.placeholder = "* Please enter correct ID";

        param1.classList.add('your-class');

        param1.value = "";

      }

      if (this.errorIn_psswrd == true) {

        param2.placeholder = '* Please enter correct password';

        param2.classList.add('your-class');

        param2.value = "";
      }

    }


  }

  extr(shwPsswrd, hdePsswrd, inp2) {

    shwPsswrd.style.display = "inline";

    hdePsswrd.style.display = "none";

    inp2.type = "password";

    if (inp2.value == "") {
      shwPsswrd.style.display = "none";

      hdePsswrd.style.display = "inline";

      inp2.type = "text";
    }

    // alert('r4eue');
  }

  shwpasswrd(shwPsswrd, hdePsswrd, inp2) {

    shwPsswrd.style.display = "none";

    hdePsswrd.style.display = "inline";

    inp2.type = "text";
  }

  hdepasswrd(shwPsswrd, hdePsswrd, inp2) {
    shwPsswrd.style.display = "inline";

    hdePsswrd.style.display = "none";

    inp2.type = "password";
  }
}
