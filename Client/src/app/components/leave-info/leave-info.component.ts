import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Info } from 'src/app/Models/info.model';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.css']
})
export class LeaveInfoComponent implements OnInit {

  public fieldsMsg: string = "";
  public thanksMsg: string = "";
  public obj: Info = new Info();
  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("obj:", this.obj);
    if (this.obj.fullName && this.obj.email && this.obj.phone) {
      console.log("if")
      this.api.insertInfo(this.obj)
      this.newMethod();
    }
    else {
      console.log("else")
      const str = "חובה למלא את כל השדות!";
      this.fieldsMsg = str;
    }
  }

  private newMethod() {
    this.fieldsMsg = "";
    this.thanksMsg = "תודה שהשארת לנו פרטים, הצוות שלנו ייצור איתך קשר בקרוב! "
    setInterval(function () {
      window.location.reload();
    }, 2000);
  }
}
