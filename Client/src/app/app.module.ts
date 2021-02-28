import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { LeaveInfoComponent } from './components/leave-info/leave-info.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminServicesComponent } from './pages/admin/components/admin-services/admin-services.component';
import { AdminPortfolioComponent } from './pages/admin/components/admin-portfolio/admin-portfolio.component';
import { AdminContactInfoComponent } from './pages/admin/components/admin-contact-info/admin-contact-info.component';
import { AdminContactMessageComponent } from './pages/admin/components/admin-contact-message/admin-contact-message.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { FrameworksSliderComponent } from './components/frameworks-slider/frameworks-slider.component';
import { AdminMainComponent } from './pages/admin/components/admin-main/admin-main.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { MsgPipe } from './msg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    OurServicesComponent,
    LeaveInfoComponent,
    AdminComponent,
    AdminServicesComponent,
    AdminPortfolioComponent,
    AdminContactInfoComponent,
    AdminContactMessageComponent,
    AdminNavbarComponent,
    FrameworksSliderComponent,
    AdminMainComponent,
    PrivacyPolicyComponent,
    MsgPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
