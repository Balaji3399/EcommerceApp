import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { homeCarousal } from '../../data/homeCarousal';
import { RouterModule } from '@angular/router';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [RouterModule , CommonModule ],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.carouselData = homeCarousal;
    if (isPlatformBrowser(this.platformId)) {
      this.autoplay();
    }
  }

  autoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
