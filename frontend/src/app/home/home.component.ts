import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Swiper from 'swiper';
import { Slides } from '../interfaces/slides';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  API_PHOTOS_URL: string = 'https://jsonplaceholder.typicode.com/photos';

  swiper: Swiper;
  slides: Slides[] = [];

  constructor(private http: HttpClient) { }

  getPhotosSlides() {
    this.http.get(this.API_PHOTOS_URL)
      .subscribe(photos => {
        this.slides = photos as Slides[];
      });

    this.slides.splice(0, 20);
  }

  ngOnInit() {
    this.getPhotosSlides();
    
    this.swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      observer: true, 
      observeParents: true,
      grabCursor: true,
      loop: true
    });
  }
}
