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
  constructor(public api: ApiService) {
    this.pathname = window.location.pathname;
  }

  ngOnInit(): void {
  }

}
