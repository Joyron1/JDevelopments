import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Service } from '../Models/services.model';
import { Portfolio } from '../Models/portfolio.model';
import { Newsletter } from '../Models/newsletter.model';
import { Contact } from '../Models/contact.model';
import { Admin } from '../Models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  globalUrl = 'https://jdevelopments.co.il/jd_server/';
  // globalUrl = 'http://localhost:5000/jd_server/';

  public facebookURL = 'https://www.facebook.com/JDevelopmentsStudio';
  public instagramURL = 'https://www.instagram.com/joy_developments/';
  public githubURL = 'https://github.com/Joyron1';
  public whatsappURL = 'https://api.whatsapp.com/send?phone=972505796203';
  public linkedinURL = 'https://www.linkedin.com/in/joy-ron-61a5051a7/';

  public services = new BehaviorSubject<Service[]>([]);
  public projects = new BehaviorSubject<Portfolio[]>([]);
  public admin = new BehaviorSubject<Admin[]>([]);
  public ContactInfo = new BehaviorSubject<Newsletter[]>([]);
  public ContactMessage = new BehaviorSubject<Contact[]>([]);
  adminPathname: boolean;

  constructor(public http: HttpClient) {
    this.getAllServices();
    this.getAllProjects();
    this.checkAdminPathname();
    this.getAllNewsletter();
    this.getAllContactMessage();
  }

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  checkAdminPathname() {
    let path = window.location.pathname;
    this.adminPathname = path.startsWith("/jd-admin");
    // console.log(this.adminPathname);
  }

  // GET ADMIN DETAILS //

  login(obj): Promise<Admin> {
    // console.log("service obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Admin>(`${this.globalUrl}` + `admin/login`, obj).subscribe(data => {
          if (data['status'] == 3)
            // this.services.next(data['data']);
            resolve(data);
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
    // console.log("service obj:", obj);
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

  updateService(obj): Promise<Service> {
    // console.log("service obj:", obj);
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Service>(`${this.globalUrl}` + `services/updateService`, obj).subscribe(data => {
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


  deleteService(s_id) {
    // console.log("delete service:", s_id);
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get(`${this.globalUrl}services/deleteService?id=${s_id}`).subscribe(data => {

          if (data['status'] == 1) {
            console.log("data status check:", data['status']);
            // this.user.next(data['data']);
            resolve(data);
            // console.log("product deleted");
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  getServiceById(id): Promise<Service[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Service[]>(`${this.globalUrl}services/getServiceById?id=${id}`).subscribe(data => {
          if (data['status'] == 1)
            // this.selectedProduct.next(data['data']);
            resolve(data);
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
    // console.log("service obj:", obj);
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
    // console.log("service obj:", obj);
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


  deleteProject(p_id, token) {
    // console.log("delete project:", p_id);
    let obj = {
      id: p_id,
      token: token
    };
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post(`${this.globalUrl}` + `portfolio/deleteProject`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.user.next(data['data']);
            resolve(data);
            // console.log("PROJECT DELETED");
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }


  //***  START OF CONTACT MESSAGES ***/
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

  insertContact(obj): Promise<Contact> {
    console.log("service obj:", obj);
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Contact>(`${this.globalUrl}` + `contact/insertContact`, obj).subscribe(data => {
          if (data['status'] == 1) {
            this.ContactMessage.next(data['data']);
            // resolve(data);
            console.log("went our from server side");
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  deleteContact(m_id, token): Promise<Contact> {
    // console.log("delete project:", m_id);
    let obj = {
      id: m_id,
      token: token
    };
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Contact>(`${this.globalUrl}` + `contact/deleteContact`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.user.next(data['data']);
            resolve(data);
            // console.log("msg DELETED");
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  updateRead(obj): Promise<Contact> {
    // console.log("service obj:", obj);
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Contact>(`${this.globalUrl}` + `contact/updateRead`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.projects.next(data['data']);
            resolve(data);
            console.log(data)
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
  //***  END OF CONTACT MESSAGES ***/


  //***  START OF NEWSLETTER INFO ***/
  getAllNewsletter(): Promise<Newsletter[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get<Newsletter[]>(`${this.globalUrl}newsletter/getAllNewsletter`).subscribe(data => {
          if (data['status'] == 1)
            this.ContactInfo.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  insertInfo(obj): Promise<Newsletter> {
    // console.log("service obj:", obj);
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Newsletter>(`${this.globalUrl}` + `newsletter/insertNewsletter`, obj).subscribe(data => {
          if (data['status'] == 1)
            this.ContactInfo.next(data['data']);
          // resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  deleteNewsletter(n_id, token): Promise<Newsletter> {
    // console.log("delete newsletter:", n_id, token);
    let obj = {
      id: n_id,
      token: token
    };
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Newsletter>(`${this.globalUrl}` + `newsletter/deleteNewsletter`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.user.next(data['data']);
            resolve(data);
            // console.log("newsletter DELETED");
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  editNewsletter(obj): Promise<Newsletter> {
    // console.log(obj);
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Newsletter>(`${this.globalUrl}` + `newsletter/editNewsletter`, obj).subscribe(data => {
          if (data['status'] == 1) {
            // this.projects.next(data['data']);
            resolve(data);
            console.log(data)
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
  //***  END OF NEWSLETTER INFO ***/















}
