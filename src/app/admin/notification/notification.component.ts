import {SoftwareContentService} from '../../All-Services/software-content.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private _SoftwareContentService: SoftwareContentService) { }

  ngOnInit() {
  }

  messages: {}[] = this._SoftwareContentService.getNotification();

  readedMessages: {}[] = this._SoftwareContentService.readedMessages;

  deleteMsg(param1){
      this._SoftwareContentService.getNotification().splice(param1,1);

      this._SoftwareContentService.readedMessages.splice(0,1);
  }


textMessage: '';

senderName: '';
  
  condition1: boolean = true;
  
  openDialog(param2, param3, index){       
       this.condition1 = false;
       this.textMessage = param2.textContent;
       this.senderName = param3.textContent;

       this._SoftwareContentService.getNotification()[index]['seen'] = true;

       this._SoftwareContentService.readedMessages.push(this._SoftwareContentService.getNotification()[index]);              
  }

  closeDialog(){
       this.condition1 = true;
  }


}
