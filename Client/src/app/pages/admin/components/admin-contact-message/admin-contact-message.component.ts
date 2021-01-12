import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/Models/contact.model';

@Component({
  selector: 'app-admin-contact-message',
  templateUrl: './admin-contact-message.component.html',
  styleUrls: ['./admin-contact-message.component.css']
})
export class AdminContactMessageComponent implements OnInit {

  public contactMessageArray: Contact[];
  public contactMessageObs;

  constructor(public api: ApiService) {
    this.api.getAllContactMessage();
    this.contactMessageObs = this.api.ContactMessage.subscribe(contactMsgService => {
      console.log("contactMsgService:", contactMsgService)
      this.contactMessageArray = [...contactMsgService];
    });

  }
  ngOnInit(): void {

  }

  public ngOnDestroy() {
    this.contactMessageObs.unsubscribe();
  }

}
