import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Service } from 'src/app/Models/services.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  globalUrl = this.api.globalUrl + '/uploads/';
  // globalUrl = 'http://localhost:5000/';

  public servicesArray: Service[];
  public servicesObs;

  public frameworks = [
    { id: 0, title: "HTML5", img: "../../../assets/images/ourServicesImages/html5.png" },
    { id: 1, title: "Css3", img: "../../../assets/images/ourServicesImages/css3.png" },
    { id: 2, title: "Bootstrap", img: "../../../assets/images/ourServicesImages/bootstrap.png" },
    { id: 3, title: "JavaScript", img: "../../../assets/images/ourServicesImages/javascript.png" },
    { id: 4, title: "React.js", img: "../../../assets/images/ourServicesImages/react.png" },
    { id: 5, title: "Angular", img: "../../../assets/images/ourServicesImages/angular.png" },
    { id: 6, title: "Node.js", img: "../../../assets/images/ourServicesImages/node-js.png" },
    { id: 7, title: "MySQL", img: "../../../assets/images/ourServicesImages/mysql.png" },
    { id: 8, title: "Sequelize", img: "../../../assets/images/ourServicesImages/sequelize.png" },
    { id: 9, title: "PHP", img: "../../../assets/images/ourServicesImages/php.png" },
  ];

  constructor(public api: ApiService, private title: Title, private meta: Meta) {
    this.api.scrollTop();

    this.servicesObs = this.api.services.subscribe(servicesService => {
      // console.log("Observable:", servicesService);
      this.servicesArray = [...servicesService];
    });


  }

  public ngOnDestroy() {
    this.servicesObs.unsubscribe();
  }

  ngOnInit() {
    this.title.setTitle('שירותינו - JDevelopments');
    this.meta.updateTag({ name: 'description', content: 'סטודיו JDevelopments מתמקצע בבניית אתרים ועמודי נחיתה לקידום עסקים בתחילת דרכם. בניית אתרים איכותיים. השאירו פרטים ונחזור אליכם עוד היום!!' });
  }



}
