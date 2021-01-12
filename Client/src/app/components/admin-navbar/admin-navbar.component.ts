import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor() {
    $(window).scroll(function () {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

    $(window).scroll(function () {
      $('.nav-link').toggleClass('white-letters', $(this).scrollTop() > 50);
    });
  }

  ngOnInit(): void {
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
