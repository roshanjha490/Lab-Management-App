import {TotalSystemService} from '../../All-Services/total-system.service';
import {SoftwareContentService} from '../../All-Services/software-content.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck {

  searchTerm: string;

  softNo: number = 0;

  constructor(private _snackBar: MatSnackBar, private _SoftwareContentService: SoftwareContentService, public _TotalSystemService: TotalSystemService, private router: Router) { }

  repairsLength = 0;

  repairs: {}[] = this._TotalSystemService.getAllSystem();

  extrRepairLength: number;  

  items: {}[] = this._SoftwareContentService.getsoftwareNameNcolor();

  allSystems: {}[] = this._TotalSystemService.getAllSystem();

  softwareLength = 1;

  bgColors: string[] = ['#46a34a','#e63b38','#fb8d02','#922aac', '#00c1ed','#46a34a','#e63b38','#fb8d02','#922aac', '#00c1ed'];

  randomNo: number;

  ngOnInit() {

    for (let i = 0; i < this.repairs.length; i++) {
    
       if ( this.repairs[i]['Condition'] === 'Not Working') {
           this.repairsLength++;
       }    
  }

   this.extrRepairLength = this.repairsLength;

//    computer.Software.indexOf(softwareName) > -1
   
    for (let i = 0; i < this.items.length; i++) {
        
      for (let j = 0; j < this.allSystems.length; j++) {
        
        if ( this.allSystems[j]['Software'].indexOf(this.items[i]['Name']) > -1) {           

            this.items[i]['totalSystem'] =  this.softwareLength++;            
        }    
    } 

       this.softwareLength = 1;

    }

  }

  addSoftware(param1){

    this.randomNo = Math.floor(Math.random() * 10);

      if (param1.value == ''){

           param1.classList.add('your-class');

             param1.placeholder = '* Enter a valid Software Name';

                param1.value = ''; 
          
      }

      else{
          
            this._SoftwareContentService.softwareNameNcolor.push(
            {
                Name: param1.value, backgroundColor: this.bgColors[this.randomNo], totalSystem: 0,
            }
            );

            this._snackBar.open(param1.value+' has been added to Softwares', 'Successfully !', {
              duration: 2000,
            });

            param1.value = ''; 

      }


  }



labNumber = this._SoftwareContentService.getLabs().length;

systemNo: number = this._TotalSystemService.allSystem.length;

 messages: number;

  readMessages: number;

  messageNumber: number;

ngDoCheck(){

      this.messages = this._SoftwareContentService.notification.length;

      this.readMessages = this._SoftwareContentService.readedMessages.length;
      
      this.messageNumber = this.messages - this.readMessages;

}




gotoRepair(){
  this.router.navigate(['admin/repairs']);
}

gotoMngLab(){
  this.router.navigate(['admin/manage-labs']);
}

gotoMngSystm(){
  this.router.navigate(['admin/manage-computers']);
}

gotoNotification(){
  this.router.navigate(['admin/notification']);
}

}
