import {TotalSystemService} from '../../All-Services/total-system.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {SoftwareContentService} from '../../All-Services/software-content.service';

@Component({
  selector: 'app-specific-software',
  templateUrl: './specific-software.component.html',
  styleUrls: ['./specific-software.component.css']
})
export class SpecificSoftwareComponent implements OnInit {

 condition1: boolean = true;
  
  openDialog(){       
       this.condition1 = false;
  }

  closeDialog(){
       this.condition1 = true;
  }
  
  softwareName: string;
  
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private _TotalSystemService : TotalSystemService,  private _SoftwareContentService: SoftwareContentService) { }

  computers: {}[] = this._TotalSystemService.getAllSystem();

  softwarePc: number = 0;

  extrRepairLength;

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.softwareName = params['software'];

      console.log(this.softwareName);

    });


     for (let i = 0; i < this.computers.length; i++) {
    
            if ( this.computers[i]['Software'].indexOf(this.softwareName) > -1){

                this.softwarePc++;                
            }

       } 

    //    this.extrRepairLength = this.softwarePc;
  }

  layout: string = 'grid'; 

  isSpecial: boolean = true;


  gridOn(){
     this.layout = 'grid';

     this.isSpecial = true;
  }

  tableOn(){
    this.layout = 'table';

    this.isSpecial = false;
 }

 searchTerm: string;

 onKey(param1){

  this._SoftwareContentService.searchterm = param1.target.value;

  // console.log(this._SoftwareContentService.searchterm);
  
  
};

onBlue(param2){
      
  this._SoftwareContentService.searchterm = '';

  console.log(this._SoftwareContentService.searchterm);


}
  


}
