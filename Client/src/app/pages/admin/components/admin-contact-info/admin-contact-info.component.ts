import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Info } from 'src/app/Models/info.model';

@Component({
  selector: 'app-admin-contact-info',
  templateUrl: './admin-contact-info.component.html',
  styleUrls: ['./admin-contact-info.component.css']
})
export class AdminContactInfoComponent implements OnInit {

  public contactInfoArray: Info[];
  public contactInfoObs;

  constructor(public api: ApiService) {
    this.api.scrollTop();
    // this.api.getAllContactInfo();

    this.contactInfoObs = this.api.ContactInfo.subscribe(contactInfoService => {
      console.log("contactMsgService:", contactInfoService)
      this.contactInfoArray = [...contactInfoService];
    });

  }
  ngOnInit(): void {

  }

  public ngOnDestroy() {
    this.contactInfoObs.unsubscribe();
  }

}
