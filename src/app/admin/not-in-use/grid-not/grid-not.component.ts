import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SoftwareContentService } from '../../../All-Services/software-content.service';
import { TotalSystemService } from '../../../All-Services/total-system.service';


@Component({
  selector: 'app-grid-not',
  templateUrl: './grid-not.component.html',
  styleUrls: ['./grid-not.component.css']
})
export class GridNotComponent implements OnInit {

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
