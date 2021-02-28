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
import { AdminMainComponent } from './pages/admin/components/admin-main/admin-main.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'our-projects', component: PortfolioComponent },
  { path: 'contact-us', component: ContactComponent },
  {
    path: 'jd-admin', component: AdminComponent,
    children: [
      { path: 'main', component: AdminMainComponent },
      { path: 'services-page', component: AdminServicesComponent },
      { path: 'projects-page', component: AdminPortfolioComponent },
      { path: 'newsletter-page', component: AdminContactInfoComponent },
      { path: 'contact-page', component: AdminContactMessageComponent },
    ]
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
