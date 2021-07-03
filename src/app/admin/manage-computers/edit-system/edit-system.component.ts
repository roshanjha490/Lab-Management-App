import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TotalSystemService } from '../../../All-Services/total-system.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SoftwareContentService } from '../../../All-Services/software-content.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface Labsintrfc {
  Name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-system',
  templateUrl: './edit-system.component.html',
  styleUrls: ['./edit-system.component.css']
})
export class EditSystemComponent implements OnInit {

  system: { Name: string, Lab: string, Software: string[], Condition: string, Company: string, hardWare: string[], os: string, } = { Name: '', Lab: '', Software: [], Condition: '', Company: '', hardWare: [], os: '' };

  id: number;

  softwareNames: string[];

  hardWareNames: string[];

  paramsSubscription: Subscription;

  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private _SoftwareContentService: SoftwareContentService, private _TotalSystemService: TotalSystemService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.id = params['id'];

      this.system = {
        Name: this._TotalSystemService.getAllSystem()[params['id']]['Name'],
        Lab: this._TotalSystemService.getAllSystem()[params['id']]['Lab'],
        Software: this._TotalSystemService.getAllSystem()[params['id']]['Software'],
        Condition: this._TotalSystemService.getAllSystem()[params['id']]['Condition'],
        Company: this._TotalSystemService.getAllSystem()[params['id']]['Company'],
        hardWare: this._TotalSystemService.getAllSystem()[params['id']]['hardWare'],
        os: this._TotalSystemService.getAllSystem()[params['id']]['os'],
      };

      this.softwareNames = this._TotalSystemService.getAllSystem()[params['id']]['Software'];

      this.hardWareNames = this._TotalSystemService.getAllSystem()[params['id']]['hardWare'];
    });
  }

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



  toppings = new FormControl();

  toppingsTwo = new FormControl();

  toppingList: {}[] = this._SoftwareContentService.getsoftwareNameNcolor();

  toppingListTwo: {}[] = this._SoftwareContentService.gethardWare();



  editSystemInfrm(param1, param2, param3, param4, param5) {

    this._TotalSystemService.allSystem[this.id]['Name'] = param1;

    this._TotalSystemService.allSystem[this.id]['Lab'] = param3;

    this._TotalSystemService.allSystem[this.id]['Software'] = this.softwareNames;

    this._TotalSystemService.allSystem[this.id]['Condition'] = param2;

    this._TotalSystemService.allSystem[this.id]['Company'] = param4;

    this._TotalSystemService.allSystem[this.id]['hardWare'] = this.hardWareNames;

    this._TotalSystemService.allSystem[this.id]['os'] = param5;

    this.router.navigate(['../'], { relativeTo: this.route });

    // console.log(this._TotalSystemService.allSystem); 

    this._snackBar.open(param1 + ' has been Updated', 'Successfully !', {
      duration: 2000,
    });

  }


}
