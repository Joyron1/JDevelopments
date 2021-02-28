import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pathname;
  boolPath = this.api.adminPathname;

  constructor(public api: ApiService) {
    this.pathname = window.location.pathname;

    $(window).scroll(function () {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

    $(window).scroll(function () {
      $('.nav-link').toggleClass('white-letters', $(this).scrollTop() > 50);
    });

  }

  ngOnInit(): void {

    // console.log("width", this.getWidth());
    // const menuIcon = document.querySelector('.hamburger-menu');
    // const navbar = document.querySelector('.navbar');
    // menuIcon.addEventListener('click', () => {
    //   navbar.classList.toggle('change');
    // });
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
