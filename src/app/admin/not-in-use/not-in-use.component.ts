import { TotalSystemService } from '../../All-Services/total-system.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SoftwareContentService } from '../../All-Services/software-content.service';


@Component({
  selector: 'app-not-in-use',
  templateUrl: './not-in-use.component.html',
  styleUrls: ['./not-in-use.component.css']
})
export class NotInUseComponent implements OnInit {


  condition1: boolean = true;

  openDialog() {
    this.condition1 = false;
  }

  closeDialog() {
    this.condition1 = true;
  }

  NotWorkingPc: number = 0;


  constructor(public _TotalSystemService: TotalSystemService, private _SoftwareContentService: SoftwareContentService, ) { }

  ngOnInit() {
    for (let i = 0; i < this.computers.length; i++) {

      if (this.computers[i]['Condition'] === 'Not In Use') {

        this.NotWorkingPc++;

      }

    }
  }

  computers: {}[] = this._TotalSystemService.getAllSystem();

  searchTerm: string;

  onKey(param1) {

    this._SoftwareContentService.searchterm = param1.target.value;

    // console.log(this._SoftwareContentService.searchterm);


  };

  onBlue(param2) {

    this._SoftwareContentService.searchterm = '';

    console.log(this._SoftwareContentService.searchterm);


  }

  layout: string = 'grid';

  isSpecial: boolean = true;


  gridOn() {
    this.layout = 'grid';

    this.isSpecial = true;
  }

  tableOn() {
    this.layout = 'table';

    this.isSpecial = false;
  }


}
