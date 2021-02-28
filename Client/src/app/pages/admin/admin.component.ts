import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Admin } from 'src/app/Models/admin.model';
import { Service } from 'src/app/Models/services.model';
import { Portfolio } from 'src/app/Models/portfolio.model';
import { Newsletter } from 'src/app/Models/newsletter.model';
import { Contact } from 'src/app/Models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public obj: Admin = new Admin();
  public loggedAdminToken;

  public admin: Admin[];
  public adminObs;

  public servicesArray: Service[];
  public servicesObs;

  public projectsArray: Portfolio[];
  public projectsObs;

  public contactInfoArray: Newsletter[];
  public contactInfoObs;

  public contactMessageArray: Contact[];
  public contactMessageObs;

  errMsg = "";
  public pathName;



  constructor(public api: ApiService, private router: Router, private route: ActivatedRoute) {
    this.api.scrollTop();
    let path = window.location.pathname;
    // console.log(path);
    this.pathName = path;

    // this.adminObs = this.api.admin.subscribe(adminService => { //admin OBS
    //   // console.log("adminService:", adminService);
    //   this.admin = [...adminService];
    // });

    this.servicesObs = this.api.services.subscribe(servicesService => { //services OBS
      // console.log("services Observable:", servicesService);
      this.servicesArray = [...servicesService];
    });

    this.projectsObs = this.api.projects.subscribe(projectsService => { //projects OBS
      // console.log("projects Observable:", projectsService);
      this.projectsArray = [...projectsService];
    });

    this.contactInfoObs = this.api.ContactInfo.subscribe(contactInfoService => { //contact Info OBS
      // console.log("contact Info Observable:", contactInfoService);
      this.contactInfoArray = [...contactInfoService];
    });

    this.contactMessageObs = this.api.ContactMessage.subscribe(contactMsgService => {
      // console.log("contact Msg Observable:", contactMsgService);
      this.contactMessageArray = [...contactMsgService];
    });

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    let admin = await this.api.login(this.obj);
    admin = admin['data'];
    // console.log(admin);
    // console.log(admin.email)
    if (this.obj.email == admin.email && this.obj.password == admin.password) {
      this.loggedAdminToken = admin['token'];
      localStorage.setItem('admin-token', JSON.stringify(this.loggedAdminToken));
      // console.log("admin logged in:", this.adminLoggedIn);
      this.router.navigate(['main'], { relativeTo: this.route });
    }
    else {
      this.errMsg = "Something went wrong, check the details again..."
    }
  }

  public ngOnDestroy() {
    this.adminObs.unsubscribe();
    this.servicesObs.unsubscribe();
    this.projectsObs.unsubscribe();
    this.contactInfoObs.unsubscribe();
    this.contactMessageObs.unsubscribe();
  }

  goToHomePage() {
    window.location.href = "/";
  }

  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  closeNav() {
    if (this.getWidth() <= 768)
      document.getElementById('nav-btn').click();
  }

}
