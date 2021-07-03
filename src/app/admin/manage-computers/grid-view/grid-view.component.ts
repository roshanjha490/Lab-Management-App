import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SoftwareContentService } from '../../../All-Services/software-content.service';
import { TotalSystemService } from '../../../All-Services/total-system.service';

export interface Labsintrfc {
  Name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit, DoCheck {

  condition1: boolean = true;

  computers: {}[] = this._TotalSystemService.getAllSystem();

  constructor(public _TotalSystemService: TotalSystemService, private _SoftwareContentService: SoftwareContentService, ) { }


  ngOnInit() {
  }

  searchTerm: string;

  ngDoCheck() {

    this.searchTerm = this._SoftwareContentService.searchterm;

  }

  openDialog() {
    this.condition1 = false;
  }

  closeDialog() {
    this.condition1 = true;
  }


}
