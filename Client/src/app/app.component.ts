import { Component } from '@angular/core';
import * as $ from "jquery";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'jdevelopments-app';

  isFadeIn = false;

  constructor() {

  }

  ngOnInit(): void {

    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;

      if (this.isFadeIn === false) {
        while (scrollY > 300) {
          this.isFadeIn = !this.isFadeIn;
          return this.isFadeIn;
        }
      }
      else if (this.isFadeIn === true) {
        while (scrollY < 300) {
          this.isFadeIn = !this.isFadeIn;
          return this.isFadeIn;
        }
      }
    })

  }

  backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
