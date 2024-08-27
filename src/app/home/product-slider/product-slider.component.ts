import { CommonModule  } from '@angular/common';
import { Component, Input , ViewEncapsulation} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule , RouterModule , HomeProductCardComponent],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css' ,
  encapsulation: ViewEncapsulation.Emulated

})
export class ProductSliderComponent {
  @Input() title:any ;
  @Input() products:any ;
}
