import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Newsletter } from 'src/app/Models/newsletter.model';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-contact-info',
  templateUrl: './admin-contact-info.component.html',
  styleUrls: ['./admin-contact-info.component.scss']
})
export class AdminContactInfoComponent implements OnInit {

  public contactInfoArray: Newsletter[];
  public contactInfoObs;

  formData: any = new FormData();

  newUser: Newsletter = {
    id: null,
    fullName: "",
    email: "",
    phone: ""
  }

  token: string = JSON.parse(localStorage.getItem('admin-token'));

  faEdit = faUserEdit;
  constructor(public api: ApiService) {
    this.api.scrollTop();
    // this.api.getAllContactInfo();

    this.contactInfoObs = this.api.ContactInfo.subscribe(contactInfoService => {
      // console.log("contactMsgService:", contactInfoService);
      this.contactInfoArray = [...contactInfoService];
    });

  }
  ngOnInit(): void {

  }

  public ngOnDestroy() {
    this.contactInfoObs.unsubscribe();
  }

  getUserID(id) {
    this.newUser.id = id;
  }

  async editInfo() {
    // console.log(this.newUser);
    this.newUser['token'] = this.token;
    // console.log(this.newUser);
    try {
      let result = await this.api.editNewsletter(this.newUser);
      // console.log("The Updated newsletter Is :", result);
      result['status'] == 1 && Swal.fire({
        icon: 'success',
        text: 'הפרטים עודכנו בהצלחה',
        showCloseButton: true,
        confirmButtonText: 'אוקי',
        timer: 3000,
        timerProgressBar: true,
      }), this.api.getAllNewsletter();

    }
    catch (err) {
      Swal.fire({
        icon: 'error',
        text: err,
        showCloseButton: true,
        confirmButtonText: 'אוקי',
        timer: 3000,
        timerProgressBar: true,
      });
    }


  }

  async deleteNewsletter(n_id) {
    // console.log("n_id to delete:", n_id)
    let removed = this.api.deleteNewsletter(n_id, this.token);
    await this.api.getAllNewsletter();
  }
}
