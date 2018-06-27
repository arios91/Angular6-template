import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta : Meta) { }

  generateTags(config){
    config = {
      title: '',
      description: '',
      url: '',
      author: 'AR Web Designs',
      language: 'EN',
      region: 'US-TX',
      placename: '',
      position: '',
      ICBM: '',
      type: 'website',
      imagePath: '',
      keywords: ', '
        + ', '
        + ', '
        ,
      ...config
    }

    this.meta.updateTag({ name:'title', content: config.title });
    this.meta.updateTag({ name:'description', content: config.description });
    this.meta.updateTag({ name:'url', content: config.url });
    this.meta.updateTag({ name:'author', content: config.author });
    this.meta.updateTag({ name:'keywords', content: config.keywords  });
    this.meta.updateTag({ name:'language', content: config.language });
    this.meta.updateTag({ name:'geo.region', content: config.region });
    this.meta.updateTag({ name:'geo.placename', content: config.placename });
    this.meta.updateTag({ name:'geo.position', content: config.position });
    this.meta.updateTag({ name:'ICBM', content: config.ICBM });
    this.meta.updateTag({ name:'og:title', content: config.title });
    this.meta.updateTag({ name:'og:site_name', content: config.title });
    this.meta.updateTag({ name:'og:description', content: config.description });
    this.meta.updateTag({ name:'og:type', content: config.type });
    this.meta.updateTag({ name:'og:image', content: config.imagePath });
    this.meta.updateTag({ name:'og:url', content: config.url });
  }
}
