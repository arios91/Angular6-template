import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { SeoService } from './services/seo.service';
import { ContactService } from './services/contact.service';
import { HomeComponent } from '../../e2e/app/components/home/home.component';
import { NavbarComponent } from '../../e2e/app/components/navbar/navbar.component';
import { FooterComponent } from '../../e2e/app/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    SeoService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }