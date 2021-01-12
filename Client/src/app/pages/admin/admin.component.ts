import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Admin } from 'src/app/Models/admin.model';
import { Service } from 'src/app/Models/services.model';
import { Portfolio } from 'src/app/Models/portfolio.model';
import * as $ from "jquery";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public obj: Admin = new Admin();
  public adminLoggedIn: Admin;

  public admin: Admin[];
  public adminObs;

  public servicesArray: Service[];
  public servicesObs;

  public projectsArray: Portfolio[];
  public projectsObs;

  errMsg = "";

  constructor(public api: ApiService) {

    this.adminObs = this.api.admin.subscribe(adminService => { //admin OBS
      console.log("adminService:", adminService);
      this.admin = [...adminService];

    });

    this.servicesObs = this.api.services.subscribe(servicesService => { //services OBS
      // console.log("servicesService:", servicesService);
      this.servicesArray = [...servicesService];
    });

    this.projectsObs = this.api.projects.subscribe(projectsService => {
      console.log("Observable:", projectsService);
      this.projectsArray = [...projectsService];
    });

  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log("Admin obj:", this.obj)
    console.log(this.admin[0].email)
    if (this.obj.email == this.admin[0].email && this.obj.password == this.admin[0].password) {
      this.adminLoggedIn = this.obj;
    }
    else {
      this.errMsg = "Something went wrong, check the details again..."
    }
  }

  public ngOnDestroy() {
    this.adminObs.unsubscribe();
    this.servicesObs.unsubscribe();
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
