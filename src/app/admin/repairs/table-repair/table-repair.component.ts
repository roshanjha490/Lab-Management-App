import { Component, OnInit, DoCheck} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SoftwareContentService} from '../../../All-Services/software-content.service';
import {TotalSystemService} from '../../../All-Services/total-system.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-repair',
  templateUrl: './table-repair.component.html',
  styleUrls: ['./table-repair.component.css']
})
export class TableRepairComponent implements OnInit {
  
  condition1: boolean = true;
  
  softwareName: string;
  
  paramsSubscription: Subscription;
    
  computers: {}[] = this._TotalSystemService.getAllSystem();
  
  constructor(private route: ActivatedRoute, private router: Router, private _SoftwareContentService: SoftwareContentService, private _TotalSystemService : TotalSystemService) { }
  
  

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.softwareName = params['software'];

      console.log(this.softwareName);

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
