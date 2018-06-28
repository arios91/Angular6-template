import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    private contact: ContactService,
  ) { }

  ngOnInit() {
    this.seoService.generateTags({
    })
  }

  testClick(){
    this.contact.sendContactEmail('someGuy@gmail.com', 'plain text version', '<b>bold html version</b>');
  }

}
