import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ContactService } from '../../services/contact.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[];

  constructor(
    private seoService: SeoService,
    private contact: ContactService,
  ) { }

  ngOnInit() {
    this.seoService.generateTags({
    })
    this.images = [];
    this.images.push({source:'assets/images/petalosArteScreenshot.png', alt:'Petalos y Arte Flower Shop Screenshot', title:'Petalos y Arte Flower Shop'});
    // this.images.push({source:'assets/images/galleria4.jpg', alt:'Description for Image 2', title:'Title 2'});
    // this.images.push({source:'assets/images/galleria5.jpg', alt:'Description for Image 3', title:'Title 3'});
  }

  testClick(){
    this.contact.sendContactEmail('someGuy@gmail.com', 'plain text version', '<b>bold html version</b>');
  }

}
