import { Component, OnInit, EventEmitter } from '@angular/core';
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
  modalDisplay:string = 'none';
  redirectPageName: string = '';
  redirectPageURL: string = '';

  constructor(
    private seoService: SeoService,
    private contact: ContactService,
  ) { }

  ngOnInit() {
    this.seoService.generateTags({
    })
    this.images = [];
    this.images.push({source:'assets/images/petalosArteScreenshot.png',
      alt:'Locally owned flower shop in Palmview, TX which provides local fresh flower delivery.'
      + ' Their conversion centered eCommerce site has drastically increased revenue and helped locals discover the location. '
      + 'click on the image above to visit Petalos y Arte Flower Shops site.',


      title:'Petalos y Arte Flower Shop'});
    // this.images.push({source:'assets/images/galleria4.jpg',
    //   alt:'Description for Image 2',
    //   title:'Title 2'});
    // this.images.push({source:'assets/images/galleria5.jpg',
    //   alt:'Are you ready to have your business found on the internet! Click the contact button and get in touch so we can get started!',
    //   title:'Your website could be here!'});
  }

  testClick(){
    this.contact.sendContactEmail('someGuy@gmail.com', 'plain text version', '<b>bold html version</b>');
  }

  testFunction(index:any){
    if(index == 0){
      this.modalDisplay = 'block';
      this.redirectPageName = 'Petalos y Arte Flower Shop';
      this.redirectPageURL = 'https://www.petalosarte.com';
    }
  }
  
  redirect(){
    this.modalDisplay = 'none';
    window.open(this.redirectPageURL, '_blank');
  }

  closeModal(){
    this.modalDisplay = 'none';
  }

}
