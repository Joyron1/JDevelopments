import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Models/services.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss']
})
export class AdminServicesComponent implements OnInit {

  globalUrl = this.api.globalUrl + '/uploads/';
  // globalUrl = 'http://localhost:5000/';

  serviceObj: Service = {
    title: "",
    description: "",
    img: "",
  }

  id: number;
  title: string;
  description: string;

  selectedServcie: Array<Service>;
  formData: any = new FormData();
  addImageFile: Array<File>;
  updateImageFile: Array<File>;
  addMsg: string;
  updateMsg: string;

  public adminServicesArray: Service[];
  public adminServicesObs;
  pathName: string;

  constructor(public api: ApiService) {
    this.api.scrollTop();

    this.adminServicesObs = this.api.services.subscribe(adminServicesService => {
      console.log("admin services Observable:", adminServicesService)
      this.adminServicesArray = [...adminServicesService];
    });

  }

  ngOnInit() {
    let path = window.location.pathname;
    console.log(path);
    this.pathName = path;
  }

  addImage(fileInput: any) {
    this.addImageFile = <Array<File>>fileInput.target.files;
  }
  updateImage(fileInput: any) {
    this.updateImageFile = <Array<File>>fileInput.target.files;
    console.log(this.updateImageFile);
  }

  async insertService() {

    if (!this.title || !this.description || !this.addImageFile) {
      Swal.fire({
        icon: 'error',
        text: 'עליך למלא את כל השדות בטופס!',
        showCloseButton: true,
        confirmButtonText: 'אוקי',
        timer: 3000,
        timerProgressBar: true,
      });
    }

    else {
      // console.log("else");
      this.formData = new FormData();
      this.formData.append('title', this.title);
      this.formData.append('description', this.description);

      for (let i = 0; i < this.addImageFile.length; i++) {
        this.formData.append(
          'uploads[]',
          this.addImageFile[i],
          this.addImageFile[i]['name']
        );
      }
      // console.log("formdata:" + this.formData);
      let result = await this.api.insertService(this.formData);
      // console.log("The New Project Is :", result);
      result['status'] == 1 && Swal.fire({
        icon: 'success',
        text: 'השירות התווסף בהצלחה!',
        showCloseButton: true,
        confirmButtonText: 'אוקי',
        timer: 3000,
        timerProgressBar: true,
      }), this.title = ""; this.description = ""; this.addMsg = ""; this.addImageFile = [];
      this.api.getAllServices();
    }
  }

  async getServiceById(id) {
    if (id) {
      let test = await this.api.getServiceById(id);
      this.selectedServcie = test['data'];
      // console.log("selected product:", this.selectedServcie[0]);
      this.id = this.selectedServcie[0]['id']; this.title = this.selectedServcie[0]['title'];
      this.description = this.selectedServcie[0]['description'];
    }
  }

  async updateService() {

    this.formData = new FormData();
    this.formData.append('id', this.id)
    this.formData.append('title', this.title);
    this.formData.append('description', this.description);

    // console.log("edited picture:", this.updateImageFile);
    if (this.updateImageFile) {
      for (let i = 0; i < this.updateImageFile.length; i++) {
        this.formData.append(
          'uploads[]',
          this.updateImageFile[i],
          this.updateImageFile[i]['name']
        );
      }
    }

    // console.log("formdata:", this.formData);
    let result = await this.api.updateService(this.formData);
    // console.log("The Updated Service Is :", result);
    result['status'] == 1 && Swal.fire({
      icon: 'success',
      text: 'השירות עודכן בהצלחה!',
      showCloseButton: true,
      confirmButtonText: 'אוקי',
      timer: 3000,
      timerProgressBar: true,
    }), this.updateImageFile = []; this.title = ""; this.description = ""; this.updateMsg = "";
    this.api.getAllServices();
  }


  resetUpdatedData() {
    this.title = ""; this.description = ""; this.updateMsg = "";
    this.updateImageFile = [];
  }

  async deleteService(s_id) {
    // console.log("here 1");
    // console.log("s_id to delete:", s_id);
    let removed = this.api.deleteService(s_id);
    // console.log("here 2");
    await this.api.getAllServices();
  }

  public ngOnDestroy() {
    this.adminServicesObs.unsubscribe();
  }





}
