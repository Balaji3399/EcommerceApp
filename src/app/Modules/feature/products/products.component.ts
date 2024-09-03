import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { filters, singleFilter } from './filterData';
import { mensPants } from '../../../../data/pants/men_page1';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatButtonModule , 
    MatMenuModule , 
    MatDividerModule ,
    MatCheckboxModule ,
    MatIconModule ,
    MatRadioModule ,
    CommonModule , 
    RouterModule ,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    filterdata : any ;
    singleFilterData : any ;
    menPants : any ;

    constructor(private router: Router , private activatedRoute : ActivatedRoute ){}

    ngOnInit(){
      this.filterdata = filters ;
      this.singleFilterData = singleFilter ;
      this.menPants = mensPants ;
    }

    handleMultipeSelection(value : string , sectionId : string){
      const queryParams = {...this.activatedRoute.snapshot.queryParams} ;
      console.log("queryParams" , queryParams) ;

      const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [] ;
      const indexValue = filterValues.indexOf(value) ;

      if(indexValue != -1){
        filterValues.splice(indexValue , 1) ;
      }
      else{
        filterValues.push(value) ; 
      }

      if(filterValues.length > 0){
        queryParams[sectionId] = filterValues.join(',') ;
      }else{
        delete queryParams[sectionId] ;
      }

      this.router.navigate([] , {queryParams}) ;
    }

    handleSingleSelection(value : string , sectionId : string){
      const queryParams = {...this.activatedRoute.snapshot.queryParams} ;
      queryParams[sectionId] = value ;

      this.router.navigate([] , {queryParams}) ;
      console.log("queryParams : " , queryParams)
    }
}
