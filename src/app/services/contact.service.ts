import { FlashMessagesService } from 'angular2-flash-messages';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient,
    private flashMessage: FlashMessagesService
  ) { }


  sendContactEmail(customerEmail:string, plainText:string, emailBody:string){
    // this.http.post('http://localhost:8080/sendContactEmail',
    this.http.post('/sendContactEmail',
    {
      customerEmail,
      plainText,
      emailBody
    },)
    .subscribe(resp => {
        this.flashMessage.show("Thank you for your inquiry! We'll get back to you shortly.", {
            cssClass: 'alert-success', timeout: 10000
        });
    }, err => {
        this.flashMessage.show('Error occured while processing your order, please try again...if the problem persists please contact us at contact@ar-webdesigns.com', {
            cssClass: 'alert-danger', timeout: 10000
        });
    })
  }
}
