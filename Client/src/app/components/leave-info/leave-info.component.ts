import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Newsletter } from 'src/app/Models/newsletter.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
declare var particlesJS: any;

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.scss']
})
export class LeaveInfoComponent implements OnInit {

  public fieldsMsg: string = "";
  public thanksMsg: string = "";
  public obj: Newsletter = new Newsletter();
  formIsFilled: boolean = false;
  faCoffee = faCoffee;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/data/particles.json', function () { console.log('callback - particles.js config loaded'); });
  }

  onSubmit() {
    console.log("obj:", this.obj);
    if (this.obj.fullName && this.obj.email && this.obj.phone) {
      console.log("if");
      this.api.insertInfo(this.obj);
      Swal.fire({
        icon: 'success',
        text: 'תודה שהשארת פרטים, ניצור איתך קשר בקרוב!',
        showCloseButton: true,
        confirmButtonText: 'אוקי'
      })
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
