import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/Models/contact.model';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-contact-message',
  templateUrl: './admin-contact-message.component.html',
  styleUrls: ['./admin-contact-message.component.scss']
})
export class AdminContactMessageComponent implements OnInit {

  public contactMessageArray: Contact[];
  public contactMessageObs;

  token: string = JSON.parse(localStorage.getItem('admin-token'));

  msgSearch;
  searchOption = "2";

  faEdit = faUserEdit;

  constructor(public api: ApiService) {
    this.api.scrollTop();

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

  async markAsRead(user) {
    user.read == 0 ? user['read'] = 1 : user['read'] = 0;
    user.token = this.token;
    console.log(user);
    let update = await this.api.updateRead(user);
  }

  async deleteContact(m_id) {
    console.log("m_id to delete:", m_id)
    let removed = this.api.deleteContact(m_id, this.token);
    await this.api.getAllContactMessage();
  }

  async editContact(user) {

  }

}
