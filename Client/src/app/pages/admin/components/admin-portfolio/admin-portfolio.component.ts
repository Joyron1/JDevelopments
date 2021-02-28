import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/Models/portfolio.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.scss']
})
export class AdminPortfolioComponent implements OnInit {

  globalUrl = this.api.globalUrl + '/uploads/';
  // globalUrl = 'http://localhost:5000/';

  public adminProjectsArray: any = [];
  public adminProjectsObs;

  projectObj: any = {
    title: "",
    description: "",
    pc_img: "",
    mobile_img: "",
    url: ""
  }

  selectedProject: Array<Portfolio>;

  id: number;
  title: string;
  description: string;
  url: string;
  token: string = JSON.parse(localStorage.getItem('admin-token'));

  formData: any = new FormData();
  pcImage: Array<File>;
  editedFilesToUpload: Array<File>;
  addMsg: string;
  updateMsg: string;


  constructor(public api: ApiService) {
    this.api.scrollTop();

    this.adminProjectsObs = this.api.projects.subscribe(adminProjectsService => {
      console.log("admin projects Observable:", adminProjectsService)
      this.adminProjectsArray = [...adminProjectsService];
    });
  }

  ngOnInit(): void {
  }

  addPCImage(fileInput: any) {
    this.pcImage = <Array<File>>fileInput.target.files;
  }
  updateImage(fileInput: any) {
    this.editedFilesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.editedFilesToUpload);
  }

  async insertProject() {
    if (!this.title || !this.description || !this.url || !this.pcImage) {
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
      console.log("else")
      this.formData = new FormData();
      this.formData.append('title', this.title);
      this.formData.append('description', this.description);
      this.formData.append('url', this.url);
      this.formData.append('token', this.token);

      for (let i = 0; i < this.pcImage.length; i++) {
        this.formData.append(
          'uploads[]',
          this.pcImage[i],
          this.pcImage[i]['name']
        );
      }
      // console.log("formdata:" + this.formData);
      let result = await this.api.insertProject(this.formData);
      // console.log("The New Project Is :", result);
      result['status'] == 1 && Swal.fire({
        icon: 'success',
        text: 'הפרויקט התווסף בהצלחה!',
        showCloseButton: true,
        confirmButtonText: 'אוקי',
        timer: 3000,
        timerProgressBar: true,
      }), this.title = ""; this.description = ""; this.url = ""; this.addMsg = ""; this.pcImage = [];
      this.api.getAllProjects();

    }
  }

  async getProjectById(id) {
    if (id) {
      let test = await this.api.getProjectById(id);
      this.selectedProject = test['data'];
      // console.log("selected product:", this.selectedProject[0]);
      this.title = this.selectedProject[0]['title']; this.description = this.selectedProject[0]['description'];
      this.url = this.selectedProject[0]['url']; this.id = this.selectedProject[0]['id'];
    }
  }

  async updateProject() {

    this.formData = new FormData();
    this.formData.append('id', this.id)
    this.formData.append('title', this.title);
    this.formData.append('description', this.description);
    this.formData.append('url', this.url);
    this.formData.append('token', this.token);

    // console.log("edited picture:", this.editedFilesToUpload);
    if (this.editedFilesToUpload) {
      for (let i = 0; i < this.editedFilesToUpload.length; i++) {
        this.formData.append(
          'uploads[]',
          this.editedFilesToUpload[i],
          this.editedFilesToUpload[i]['name']
        );
      }
    }

    console.log("formdata:", this.formData)
    let result = await this.api.updateProject(this.formData);
    // console.log("The Updated Project Is :", result);
    result['status'] == 1 && Swal.fire({
      icon: 'success',
      text: 'הפרטים עודכנו בהצלחה',
      showCloseButton: true,
      confirmButtonText: 'אוקי',
      timer: 3000,
      timerProgressBar: true,
    }), this.editedFilesToUpload = []; this.title = ""; this.description = ""; this.url = ""; this.updateMsg = "";
    this.api.getAllProjects();

  }


  resetUpdatedData() {
    this.title = ""; this.description = ""; this.url = "";
    this.updateMsg = "";
  }

  async deleteProject(p_id) {
    console.log("p_id to delete:", p_id)
    let removed = this.api.deleteProject(p_id, this.token);
    await this.api.getAllProjects();
  }

  public ngOnDestroy() {
    this.adminProjectsObs.unsubscribe();
  }



}
