import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SoftwareContentService } from '../All-Services/software-content.service';
import { AuthService } from '../Authentication/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, DoCheck {

  messages: number;

  readMessages: number;

  messageNumber: number;

  public innerWidth: any;

  constructor(private router: Router, private _SoftwareContentService: SoftwareContentService, private authService: AuthService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    // console.log(this.innerWidth);

    if (this.innerWidth <= 1199.98) {

      this.modeIn = 'over';

      this.openIn = false;
    }

    if (this.innerWidth > 1199.98) {

      this.modeIn = 'side';

      this.openIn = true;
    }

  }

  ngDoCheck() {

    this.messages = this._SoftwareContentService.notification.length;

    this.readMessages = this._SoftwareContentService.readedMessages.length;

    this.messageNumber = this.messages - this.readMessages;

  }

  modeIn: string = 'side';

  openIn: Boolean = true;

  navrct() {

    this.openIn = !this.openIn;
  }



  @HostListener('window:resize', ['$event']) onResize(event) {

    if (window.innerWidth <= 1199.98) {

      this.modeIn = 'over';

      this.openIn = false;
    }

    if (window.innerWidth > 1199.98) {

      this.modeIn = 'side';

      this.openIn = true;
    }


  }

  // openNav: boolean = false;


  // navrct() {
  //   this.openNav = !this.openNav;
  // }

  // clsNav() {
  //   this.openNav = !this.openNav;
  // }


  adminArr: {}[] = this._SoftwareContentService.goadminAccount();

  logOut() {

    for (let i = 0; i < this.adminArr.length; i++) {

      if (this.adminArr[i]['active'] == true) {

        this._SoftwareContentService.goadminAccount()[i]['active'] = false;

      }

    }

    this.authService.logout();

    this.router.navigate(['/login-admin']);

  }


}
