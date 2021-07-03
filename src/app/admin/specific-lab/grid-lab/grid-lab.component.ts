import { Component, OnInit, DoCheck} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SoftwareContentService} from '../../../All-Services/software-content.service';
import {TotalSystemService} from '../../../All-Services/total-system.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grid-lab',
  templateUrl: './grid-lab.component.html',
  styleUrls: ['./grid-lab.component.css']
})
export class GridLabComponent implements OnInit, DoCheck {
  condition1: boolean = true;

  computers: {}[] = this._TotalSystemService.getAllSystem();
  
  labName: any;
  
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private _SoftwareContentService: SoftwareContentService, private _TotalSystemService : TotalSystemService) { }


  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.labName = params['lab'];
      
    });
  
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
