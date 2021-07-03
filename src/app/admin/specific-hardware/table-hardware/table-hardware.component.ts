import { Component, OnInit, DoCheck} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SoftwareContentService} from '../../../All-Services/software-content.service';
import {TotalSystemService} from '../../../All-Services/total-system.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-hardware',
  templateUrl: './table-hardware.component.html',
  styleUrls: ['./table-hardware.component.css']
})
export class TableHardwareComponent implements OnInit {
 
  condition1: boolean = true;
  
  hardwareName: string;
  
  paramsSubscription: Subscription;
    
  computers: {}[] = this._TotalSystemService.getAllSystem();
  
  constructor(private route: ActivatedRoute, private router: Router, private _SoftwareContentService: SoftwareContentService, private _TotalSystemService : TotalSystemService) { }
  
  

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.hardwareName = params['hardware'];

    //   console.log(this.hardwareName);
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
