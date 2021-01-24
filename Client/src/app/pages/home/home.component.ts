import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  width = window.innerWidth;

  constructor(private title: Title, private meta: Meta, public api: ApiService) {

    this.api.scrollTop();

  }

  ngOnInit(): void {
    this.title.setTitle('בניית אתרים | פיתוח מערכות אינטרנט | JDevelopments');
    this.meta.addTags([
      { name: 'keywords', content: 'בניית אתרים, בניית אתר, אתר, אתרים, עמודי נחיתה, עמוד נחיתה, בניית עמוד נחיתה, בניית עמודי נחיתה, ווקומרס, איקומרס, woocommerce, wordpress, angular, react, node.js, אתר תדמית, אתר עסקי, עיצוב אתרים, קידום אתרים' },
      { name: 'description', content: 'סטודיו מקצועי לבניית אתרים איכותיים! אצלנו מתמחים בבניית אתרים ודפי נחיתה מבוססי צד שרת. את האתר הבא שלכם בונים אצלנו! בניית אתרים איכותיים לקידום העסק הפרטי שלך.' },
      { name: 'robots', content: 'index, follow' },
    ]);

    console.log(this.width)
  }

  scrollToAboutUs = () => {
    document.getElementById('about-us-scroll').scrollIntoView({
      behavior: 'smooth'
    });
  }

}


