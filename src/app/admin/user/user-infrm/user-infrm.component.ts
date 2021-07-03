import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SoftwareContentService } from 'src/app/All-Services/software-content.service';

@Component({
  selector: 'app-user-infrm',
  templateUrl: './user-infrm.component.html',
  styleUrls: ['./user-infrm.component.css']
})
export class UserInfrmComponent implements OnInit {

  paramsSubscription: Subscription;

  public userInformation: any;

  constructor(private route: ActivatedRoute, private router: Router, private _SoftwareContentService: SoftwareContentService) { }

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.userInformation = this._SoftwareContentService.goadminAccount()[params['id']];

    });

  }

}
