import { TotalSystemService } from '../../All-Services/total-system.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SoftwareContentService } from '../../All-Services/software-content.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Labsintrfc {
  Name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-manage-computers',
  templateUrl: './manage-computers.component.html',
  styleUrls: ['./manage-computers.component.css']
})


export class ManageComputersComponent implements OnInit, DoCheck {

  condition1: boolean = true;

  computers: {}[] = this._TotalSystemService.getAllSystem();

  totalPc: number = this.computers.length;

  workingPc: number = 0;

  NotWorkingPc: number = 0;

  NotingUsePc: number = 0;

  constructor(private _snackBar: MatSnackBar, public _TotalSystemService: TotalSystemService, private _SoftwareContentService: SoftwareContentService, ) { }

  ngOnInit() {

    for (let i = 0; i < this.computers.length; i++) {

      if (this.computers[i]['Condition'] === 'Working') {

        this.workingPc++;

      }
    }


    for (let i = 0; i < this.computers.length; i++) {

      if (this.computers[i]['Condition'] === 'Not Working') {

        this.NotWorkingPc++;

      }

    }

    for (let i = 0; i < this.computers.length; i++) {

      if (this.computers[i]['Condition'] === 'Not In Use') {

        this.NotingUsePc++;

      }

    }

  }


  ngDoCheck() {

  }

  openDialog() {
    this.condition1 = false;
  }


  closeDialog() {
    this.condition1 = true;
  }


  searchTerm: string;

  onKey(param1) {

    this._SoftwareContentService.searchterm = param1.target.value;

    // console.log(this._SoftwareContentService.searchterm);


  };

  onBlue(param2) {

    this._SoftwareContentService.searchterm = '';

    console.log(this._SoftwareContentService.searchterm);


  };


  // tslint:disable-next-line: member-ordering
  newName: '';

  newStatus: any = '';

  newLab: string = '';

  newCompany: '';

  newOs: any = '';

  // tslint:disable-next-line: member-ordering
  condition: Food[] = [
    { value: 'Working', viewValue: 'Steak' },
    { value: 'Not Working', viewValue: 'Pizza' },
    { value: 'Not In Use', viewValue: 'Tacos' }
  ];

  conditiontwo: Food[] = [
    { value: 'Windows 10', viewValue: 'Steak' },
    { value: 'Windows 8', viewValue: 'Pizza' },
    { value: 'Mac OS', viewValue: 'Tacos' },
    { value: 'Linux', viewValue: 'Tacos' }
  ];

  Labs: {}[] = this._SoftwareContentService.Labs;


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



  toppings = new FormControl();

  toppingList: {}[] = this._SoftwareContentService.getsoftwareNameNcolor();

  toppingListTwo: {}[] = this._SoftwareContentService.gethardWare();


  softwareNames: [];

  hardwareNames: [];

  addSystem() {

    this._TotalSystemService.getAllSystem().push({
      id: this._TotalSystemService.allSystem.length,
      Name: this.newName,
      Lab: this.newLab,
      Software: this.softwareNames,
      Condition: this.newStatus,
      Company: this.newCompany,
      hardWare: this.hardwareNames,
      os: this.newOs,
    });

    this._snackBar.open(this.newName + ' has been added to Systems', 'Successfully !', {
      duration: 2000,
    });

    // this.newName = '';

    // this.newStatus = '';

    // this.newLab = '';

    // this.newCompany = '';

    // this.newOs = '';

  }



}