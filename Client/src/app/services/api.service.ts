import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Service } from '../Models/services.model';
import { Portfolio } from '../Models/portfolio.model';
import { Info } from '../Models/info.model';
import { Contact } from '../Models/contact.model';
import { Admin } from '../Models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // globalUrl = 'https://jdevelopments.co.il/jd_server/';
  globalUrl = 'http://localhost:5000/jd_server/';

  public services = new BehaviorSubject<Service[]>([]);
  public projects = new BehaviorSubject<Portfolio[]>([]);
  public admin = new BehaviorSubject<Admin[]>([]);
  public ContactInfo = new BehaviorSubject<Info[]>([]);
  public ContactMessage = new BehaviorSubject<Contact[]>([]);
  adminPathname: boolean;

  constructor(public http: HttpClient) {
    this.getAllServices();
    this.getAllProjects();
    this.getAdmin();
    this.checkAdminPathname();
  }

  checkAdminPathname() {
    let path = window.location.pathname;
    this.adminPathname = path.startsWith("/admin");
    console.log(this.adminPathname)
  }

  // GET ADMIN DETAILS //
  getAdmin(): Promise<Admin[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Admin[]>(`${this.globalUrl}admin/getAdmin`).subscribe(data => {
          if (data['status'] == 1)
            this.admin.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  //*** SERVICES ***//
  getAllServices(): Promise<Service[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Service[]>(`${this.globalUrl}services/getAllServices`).subscribe(data => {
          if (data['status'] == 1)
            this.services.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  insertService(obj): Promise<Service> {
    console.log("service obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Service>(`${this.globalUrl}` + `services/insertService`, obj).subscribe(data => {
          if (data['status'] == 1)
            this.services.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }


  //*** PROJECTS ***//
  getAllProjects(): Promise<Portfolio[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Portfolio[]>(`${this.globalUrl}portfolio/getAllProjects`).subscribe(data => {
          if (data['status'] == 1)
            this.projects.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  getProjectById(id): Promise<Portfolio[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Portfolio[]>(`${this.globalUrl}portfolio/getProjectById?id=${id}`).subscribe(data => {
          if (data['status'] == 1)
            // this.selectedProduct.next(data['data']);
            resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  insertProject(obj): Promise<Portfolio> {
    console.log("service obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Portfolio>(`${this.globalUrl}` + `portfolio/insertProject`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.projects.next(data['data']);
            resolve(data);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  updateProject(obj): Promise<Portfolio> {
    console.log("service obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Portfolio>(`${this.globalUrl}` + `portfolio/updateProject`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.projects.next(data['data']);
            resolve(data);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }


  deleteProject(p_id) {
    console.log("delete project:", p_id)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get(`${this.globalUrl}portfolio/deleteProject?id=${p_id}`).subscribe(data => {
          if (data['status'] == 1) {
            // this.user.next(data['data']);
            resolve(data);
            console.log("product deleted")
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }


  //***  CONTACT  ***//
  getAllContactInfo(): Promise<Info[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Info[]>(`${this.globalUrl}info/getAllOptCustomers`).subscribe(data => {
          if (data['status'] == 1)
            this.ContactInfo.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  getAllContactMessage(): Promise<Contact[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Contact[]>(`${this.globalUrl}contact/getAllContact`).subscribe(data => {
          if (data['status'] == 1)
            this.ContactMessage.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  insertInfo(obj): Promise<Info> {
    console.log("service obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Info>(`${this.globalUrl}` + `info/insertInfo`, obj).subscribe(data => {
          if (data['status'] == 1)
            this.ContactInfo.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  insertContact(obj): Promise<Contact> {
    console.log("service obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Contact>(`${this.globalUrl}` + `contact/insertContact`, obj).subscribe(data => {
          if (data['status'] == 1)
            this.ContactMessage.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }













}
