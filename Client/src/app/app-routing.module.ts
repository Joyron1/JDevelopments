import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminServicesComponent } from './pages/admin/components/admin-services/admin-services.component';
import { AdminContactInfoComponent } from './pages/admin/components/admin-contact-info/admin-contact-info.component';
import { AdminContactMessageComponent } from './pages/admin/components/admin-contact-message/admin-contact-message.component';
import { AdminPortfolioComponent } from './pages/admin/components/admin-portfolio/admin-portfolio.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'our-projects',
    component: PortfolioComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      },
      {
        path: 'adminOurServices',
        component: AdminServicesComponent
      },
      {
        path: 'adminPortfolio',
        component: AdminPortfolioComponent
      },
      {
        path: 'adminContactInfo',
        component: AdminContactInfoComponent
      },
      {
        path: 'adminContactMessage',
        component: AdminContactMessageComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
