import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoLogin() {

    this.router.navigate(['/login-admin']);

  }


}
