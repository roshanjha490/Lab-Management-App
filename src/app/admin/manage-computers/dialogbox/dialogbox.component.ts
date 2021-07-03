import { TotalSystemService } from '../../../All-Services/total-system.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  public systemInformation: any;

  paramsSubscription: Subscription;

  softwareName: [];

  hardwareName: [];

  constructor(private route: ActivatedRoute, private router: Router, private _TotalSystemService: TotalSystemService) { }

  ngOnInit() {


    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.systemInformation = this._TotalSystemService.getAllSystem()[params['id']];

      this.softwareName = this._TotalSystemService.getAllSystem()[params['id']]['Software'];

      this.hardwareName = this._TotalSystemService.getAllSystem()[params['id']]['hardWare'];
    });

  }

  //  ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }

  open() {
    alert(this.systemInformation);
  }




}
