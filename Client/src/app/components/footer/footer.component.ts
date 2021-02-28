import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pathname;
  boolPath = this.api.adminPathname;

  facebookURL = this.api.facebookURL;
  instagramURL = this.api.instagramURL;
  whatsappURL = this.api.whatsappURL;
  githubURL = this.api.githubURL;
  linkedinURL = this.api.linkedinURL;

  googleSearchURL = 'https://www.google.com/search?q=jdevelopments&oq=jdeve&aqs=chrome.1.69i60j69i59j69i57j0j69i60l2j69i61j69i65.2478j0j7&sourceid=chrome&ie=UTF-8';

  constructor(public api: ApiService) {
    this.pathname = window.location.pathname;
  }

  ngOnInit(): void {
  }

}
