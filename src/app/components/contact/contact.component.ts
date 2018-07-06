import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerCompany: string;
  customerQuestion: string;
  phoneMask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  @ViewChild('contactForm') form: any;
  constructor(
    private flashMessage: FlashMessagesService,
    private contact : ContactService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if(!valid){
      this.flashMessage.show('Invalid form input, please correct and try again', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else if(!this.validEmail(this.customerEmail)){
      this.flashMessage.show('Invalid email input, please input a valid email address', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else{
      this.contact.sendContactEmail(this.customerEmail, this.buildPlainTextEmail(), this.buildContactEmail());
    }
  }

  validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  buildPlainTextEmail(){
    var plainText = this.customerName
      + ', name: ' + this.customerEmail
      + ', phone: ' + this.customerPhone
      + ', company: ' + this.customerCompany
      + ', inquiry: ' + this.customerQuestion;
    return plainText;
  }

  buildContactEmail(){
    var contactEmail = `
    <table style="width: 90%;" align="center">
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Name:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerName}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Phone:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerPhone}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Email:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerEmail}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Company:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerCompany}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Inquiry:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerQuestion}</td>
      </tr>
    </table>`

    return contactEmail;
  }

}
