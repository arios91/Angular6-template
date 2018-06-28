import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta : Meta) { }

  generateTags(config){
    config = {
      title: 'Best McAllen Web Design | Professional Web Design and SEO',
      description: 'Best McAllen Web Designer - Professional and affordable web designer with a goal to help your local business get noticed. '
      + 'We offer attractive mobile-friendly websites and search engine optimization packages. '
      + 'Give us a change to make you money!',
      url: 'https://www.ar-webdesigns.com',
      author: 'AR Web Designs',
      language: 'EN',
      region: 'US-TX',
      placename: 'McAllen',
      position: '26.203407; -98.230012',
      ICBM: '26.203407, -98.230012',
      type: 'website',
      imagePath: '',
      keywords:
          'Web Development, '
        + 'Web Developer, '
        + 'Website Development, '
        + 'Website Developer, '
        + 'Web Design, '
        + 'Web Designer, '
        + 'Web Development in McAllen, '
        + 'Web Development in Mission, '
        + 'Web Development in Edinburg, '
        + 'Web Developmer in McAllen, '
        + 'Web Developmer in Mission, '
        + 'Web Developmer in Edinburg, '
        + 'Web Design in McAllen, '
        + 'Web Design in Mission, '
        + 'Web Design in Edinburg, '
        + 'Web Designer in McAllen, '
        + 'Web Designer in Mission, '
        + 'Web Designer in Edinburg, '
        + 'Freelance Web Developer, '
        + 'Professional Web Development, '
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
