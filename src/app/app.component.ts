import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Modules/feature/home/home.component';
import { NavbarComponent } from './Modules/shared/navbar/navbar.component';
import { FooterComponent } from './Modules/shared/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './Modules/feature/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet , 
    HomeComponent , 
    NavbarComponent , 
    FooterComponent , 
    MatIconModule ,
    ProductsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EcommerceApp';
}
