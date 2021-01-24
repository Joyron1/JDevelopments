import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Portfolio } from 'src/app/Models/portfolio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  // globalUrl = this.api.globalUrl + '/uploads/';
  globalUrl = 'http://localhost:5000/';

  public projectsArray: Portfolio[];
  public projectsObs;

  constructor(public api: ApiService, private title: Title, private meta: Meta) {
    this.api.scrollTop();

    this.projectsObs = this.api.projects.subscribe(projectsService => {
      console.log("Observable:", projectsService)
      this.projectsArray = [...projectsService];
    });
  }

  public ngOnDestroy() {
    this.projectsObs.unsubscribe();
  }

  ngOnInit(): void {
    this.title.setTitle('הפרויקטים שלנו - JDevelopments');
    this.meta.updateTag({ name: 'description', content: 'צפו בפרויקטים שלנו ותשאבו השראה! רוצים אתר דומה לאחד מהפרויקטים הקיימים שלנו? צרו איתנו קשר עוד היום לשיחת אפיון וקבלת הצעת מחיר לבניית אתר.' });
  }



}
