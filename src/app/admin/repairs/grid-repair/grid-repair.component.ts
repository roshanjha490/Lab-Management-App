import { Component, OnInit, DoCheck} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SoftwareContentService} from '../../../All-Services/software-content.service';
import {TotalSystemService} from '../../../All-Services/total-system.service';

@Component({
  selector: 'app-grid-repair',
  templateUrl: './grid-repair.component.html',
  styleUrls: ['./grid-repair.component.css']
})
export class GridRepairComponent implements OnInit {

  condition1: boolean = true;

  computers: {}[] = this._TotalSystemService.getAllSystem();

  constructor(public _TotalSystemService: TotalSystemService, private _SoftwareContentService: SoftwareContentService,) {}


  ngOnInit() {
  }

  searchTerm: string;

      ngDoCheck(){

        this.searchTerm = this._SoftwareContentService.searchterm;
        
      }


openDialog(){       
    this.condition1 = false;
}

closeDialog(){
    this.condition1 = true;
}

}
