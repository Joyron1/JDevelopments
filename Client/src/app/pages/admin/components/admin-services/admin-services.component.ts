import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Models/services.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {


  public adminServicesArray: Service[];
  public adminServicesObs;

  constructor(public api: ApiService) {

    this.adminServicesObs = this.api.services.subscribe(adminServicesService => {
      console.log("Observable:", adminServicesService)
      this.adminServicesArray = [...adminServicesService];
    });

  }

  public ngOnDestroy() {
    this.adminServicesObs.unsubscribe();
  }

  ngOnInit() {

  }



}
