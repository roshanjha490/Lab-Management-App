import { Component, OnInit, DoCheck } from '@angular/core';
import { TotalSystemService } from '../../All-Services/total-system.service';
import { SoftwareContentService } from '../../All-Services/software-content.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-labs',
  templateUrl: './manage-labs.component.html',
  styleUrls: ['./manage-labs.component.css']
})
export class ManageLabsComponent implements OnInit, DoCheck {

  searchTerm: string;

  Labs: {}[];

  labLength;

  pcInLabs: number = 0;

  computers: {}[] = this._TotalSystemService.getAllSystem();

  allsystems: {}[];

  constructor(private _snackBar: MatSnackBar, private router: Router, private _SoftwareContentService: SoftwareContentService, private _TotalSystemService: TotalSystemService) { }

  ngOnInit() {

    this.Labs = this._SoftwareContentService.getLabs();

    this.allsystems = this._TotalSystemService.getAllSystem();

    this.labLength = this.Labs.length;

    for (let i = 0; i < this.Labs.length; i++) {

      for (let j = 0; j < this.computers.length; j++) {

        if (this.computers[j]['Lab'] == this.Labs[i]['Name']) {

          this.pcInLabs++;
        }

        this.Labs[i]['totalSystem'] = this.pcInLabs;
      }

      this.pcInLabs = 0;

    }

  }


  ngDoCheck() {

    this.Labs = this._SoftwareContentService.getLabs();

    this.labLength = this.Labs.length;

    this.allsystems = this._TotalSystemService.getAllSystem();
  }


  addNewLab(param1) {


    if (param1.value == '') {

      param1.classList.add('your-class');

      param1.placeholder = '* Enter a valid Lab Name';

      param1.value = '';

    }

    else {

      this._SoftwareContentService.getLabs().push({

        Name: param1.value, totalSystem: 0,

      });

      this._snackBar.open(param1.value + ' has been added', 'Successfully !', {
        duration: 2000,
      });

      param1.value = '';

    }

  }


  goToLab() {

    // this.router.navigate(['/']);
  }


}
