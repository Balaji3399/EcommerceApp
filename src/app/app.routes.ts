import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/feature/home/home.component';
import { ProductsComponent } from './Modules/feature/products/products.component';
import { CartComponent } from './Modules/feature/cart/cart.component';

export const routes: Routes = [
    {path : "" , component : HomeComponent} ,
    {path : ':levelOne/:levelTwo/:levelThree' , component : ProductsComponent} ,
    {path : 'cart' , component : CartComponent} 
];
