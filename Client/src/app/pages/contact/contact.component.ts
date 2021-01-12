import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Contact } from 'src/app/Models/contact.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public fieldsMsg: string = "";
  public thanksMsg: string = "";
  public obj: Contact = new Contact();


  constructor(public api: ApiService, private title: Title, private meta: Meta) {


    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.title.setTitle('דברו איתנו - JDevelopments');
    this.meta.updateTag({ name: 'description', content: 'צרו איתנו קשר כבר עכשיו לתחילת אפיון מהיר וקבלת הצעת מחיר משתלמת לכל כיס !' });
  }

  onSubmit() {
    console.log("obj:", this.obj);
    if (this.obj.fullName && this.obj.email && this.obj.phone && this.obj.service && this.obj.message) {
      console.log("IF")
      this.api.insertContact(this.obj)
      this.newMethod();
    }
    else {
      console.log("ELSE")
      const str = "*חובה למלא את כל השדות, אנא מלא/י את השדות הריקים בבקשה.";
      this.fieldsMsg = str;
    }
  }

  private newMethod() {
    this.fieldsMsg = "";
    this.thanksMsg = "תודה שהשארת פרטים, הצוות שלנו יחזור אליך בקרוב!";
    setInterval(function () {
      window.location.reload();
    }, 3000);
  }

}
