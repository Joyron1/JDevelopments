import { Component, OnInit } from '@angular/core';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, Thumbs } from 'swiper/core';

// install Swiper components
SwiperCore.use([A11y, Autoplay, Thumbs, Navigation]);

@Component({
  selector: 'app-frameworks-slider',
  templateUrl: './frameworks-slider.component.html',
  styleUrls: ['./frameworks-slider.component.css']
})

export class FrameworksSliderComponent implements OnInit {

  public slides = [
    { id: 0, title: "Html5", img: "../../../assets/images/ourServicesImages/html5.png" },
    { id: 1, title: "Css3", img: "../../../assets/images/ourServicesImages/css3.png" },
    { id: 2, title: "Bootstrap", img: "../../../assets/images/ourServicesImages/bootstrap.png" },
    { id: 3, title: "JavaScript", img: "../../../assets/images/ourServicesImages/javascript.png" },
    { id: 4, title: "TypeScript", img: "../../../assets/images/ourServicesImages/typescript.png" },
    { id: 5, title: "React.js", img: "../../../assets/images/ourServicesImages/react.png" },
    { id: 6, title: "Angular", img: "../../../assets/images/ourServicesImages/angular.png" },
    { id: 7, title: "Node.js", img: "../../../assets/images/ourServicesImages/node-js.png" },
    { id: 8, title: "MySQL", img: "../../../assets/images/ourServicesImages/mysql.png" },
    { id: 9, title: "Sequelize", img: "../../../assets/images/ourServicesImages/sequelize.png" },
    { id: 10, title: "socket.io", img: "../../../assets/images/ourServicesImages/socket.io.png" },
    { id: 11, title: "PHP", img: "../../../assets/images/ourServicesImages/php.png" },
    { id: 12, title: "WORDPRESS", img: "../../../assets/images/ourServicesImages/wordpress.png" },
  ]

  public slidesNum: number;

  constructor() {
    this.setSlidesNumber();
  }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper)
  }
  onSlideChange() {
    console.log('slide change')
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

  setSlidesNumber() {
    if (this.getWidth() > 1000 || this.getWidth() === 1000)
      this.slidesNum = 5;
    else if (this.getWidth() < 1000 && this.getWidth() > 767)
      this.slidesNum = 4;
    else if (this.getWidth() < 768)
      this.slidesNum = 3;
  }
}
