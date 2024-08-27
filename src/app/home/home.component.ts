import { Component , ViewEncapsulation } from '@angular/core';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { jeans } from '../data/Men/men_jeans';
import { gouns } from '../data/Gouns/gouns';
import { kurtas } from '../data/Men/men_kurta';
import { shoes } from '../data/shoes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent , ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
  menJeans:any ;
  womenGouns:any ;
  menkurtas:any ;
  shoes:any ;

  ngOnInit(){
    this.menJeans = jeans.slice(0 ,5) ;
    this.womenGouns = gouns.slice(0 , 5) ;
    this.menkurtas = kurtas.slice(0 , 5) 
    this.shoes = shoes.slice(0 , 5) 
  }
}
