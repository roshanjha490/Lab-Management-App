import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {TotalSystemService} from '../../All-Services/total-system.service';
import {SoftwareContentService} from '../../All-Services/software-content.service';

@Component({
  selector: 'app-specific-hardware',
  templateUrl: './specific-hardware.component.html',
  styleUrls: ['./specific-hardware.component.css']
})
export class SpecificHardwareComponent implements OnInit {

 condition1: boolean = true;
  
  openDialog(){       
       this.condition1 = false;
  }

  closeDialog(){
       this.condition1 = true;
  }
  
  hardwareName: string;
  
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private _TotalSystemService : TotalSystemService, private _SoftwareContentService: SoftwareContentService) { }

  computers: {}[] = this._TotalSystemService.getAllSystem();

  hardwarePc: number = 0;

  wrkngPc: number = 0;

  notWrkngPc: number = 0;
  
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.hardwareName = params['hardware'];

    //   console.log(this.hardwareName);
    });

    
    for (let i = 0; i < this.computers.length; i++) {
    
            if ( this.computers[i]['hardWare'].indexOf(this.hardwareName) > -1){

                this.hardwarePc++;
                
                if( this.computers[i]['Condition'] == 'Working'){
                    
                  this.wrkngPc++;
                }

                if( this.computers[i]['Condition'] == 'Not Working'){
                    
                  this.notWrkngPc++;                  
                }

            }

       } 

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
