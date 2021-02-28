import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Contact } from 'src/app/Models/contact.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public fieldsMsg: string = "";
  public thanksMsg: string = "";
  public obj: Contact = new Contact();

  facebookURL = this.api.facebookURL;
  instagramURL = this.api.instagramURL;
  whatsappURL = this.api.whatsappURL;

  constructor(public api: ApiService, private title: Title, private meta: Meta) {

    this.api.scrollTop();

  }

  ngOnInit(): void {
    this.title.setTitle('דברו איתנו - JDevelopments');
    this.meta.updateTag({ name: 'description', content: 'צרו איתנו קשר כבר עכשיו לתחילת אפיון מהיר וקבלת הצעת מחיר משתלמת לכל כיס !' });
  }

  async onSubmit() {
    console.log("obj:", this.obj);
    if (this.obj.fullName && this.obj.email && this.obj.phone && this.obj.service && this.obj.message) {
      console.log("IF");
      await this.api.insertContact(this.obj);
      Swal.fire({
        icon: 'success',
        text: 'תודה שהשארת פרטים, ניצור איתך קשר בקרוב!',
        showCloseButton: true,
        confirmButtonText: 'אוקי'
      }), console.log("msg added");
    }
    else {
      console.log("else");
      Swal.fire({
        icon: 'warning',
        title: 'אופס...',
        text: 'חובה למלא את כל השדות!',
        confirmButtonText: 'הבנתי'
      })
    }
  }

}
