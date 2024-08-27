import { Component, Input , ViewEncapsulation} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-product-card.component.html',
  styleUrl: './home-product-card.component.css',
  encapsulation: ViewEncapsulation.Emulated

})
export class HomeProductCardComponent {
  @Input() product:any ;
}
