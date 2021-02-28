import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/contact.model';
import { Newsletter } from 'src/app/Models/newsletter.model';
import { Portfolio } from 'src/app/Models/portfolio.model';
import { ApiService } from 'src/app/services/api.service';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import * as $ from "jquery";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  public projectsArray: Portfolio[];
  public projectsObs;

  public contactInfoArray: Newsletter[];
  public contactInfoObs;

  public contactMessageArray: Contact[];
  public contactMessageObs;
  lastMsg;

  faCode = faCode;
  faEnvelopeSquare = faEnvelopeSquare;
  faMobileAlt = faMobileAlt;
  faArrowLeft = faArrowLeft;

  constructor(public api: ApiService) {

    this.projectsObs = this.api.projects.subscribe(projectsService => { //projects OBS
      // console.log("projects Observable:", projectsService);
      this.projectsArray = [...projectsService];
    });

    this.contactInfoObs = this.api.ContactInfo.subscribe(contactInfoService => { //contact Info OBS
      // console.log("newsletter Info Observable:", contactInfoService);
      this.contactInfoArray = [...contactInfoService];
    });

    this.contactMessageObs = this.api.ContactMessage.subscribe(contactMsgService => {
      // console.log("contact Msg Observable:", contactMsgService);
      this.contactMessageArray = [...contactMsgService];
      if (this.contactMessageArray)
        this.getLastMsg(this.contactMessageArray);
    });


  }

  ngOnInit(): void {

  }

  public ngOnDestroy() {
    this.projectsObs.unsubscribe();
    this.contactInfoObs.unsubscribe();
    this.contactMessageObs.unsubscribe();
  }

  getLastMsg(msgArray) {
    // console.log(msgArray)
    try {
      if (this.contactMessageArray) {
        this.lastMsg = msgArray[msgArray.length - 1];
        // console.log(this.lastMsg);
      }
    }
    catch (err) {
      console.log(err)
    }


  }

}
