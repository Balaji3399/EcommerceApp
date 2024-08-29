import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button' ;
import { MatMenuModule } from '@angular/material/menu' ;
import { NavbarContentComponent } from './navbar-content/navbar-content.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule , 
    CommonModule , 
    MatIconModule , 
    MatButtonModule ,
    MatMenuModule ,
    NavbarContentComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentSection: any ;
  isnavOpen:any ;

  openNavbarContent(menu:any){
    this.isnavOpen = true ;
    this.currentSection = menu ;
  }

  closeNavbarContent(){
    this.isnavOpen = false ;
  }

  navigateTo(){

  }

  @HostListener ('document:click' , [`$event`])
  onDocumentClick(event:MouseEvent){
    const openButton = document.querySelectorAll('.open-button') ;
    const modalContainer = document.querySelector('.modal-container') ;
    let clickInside = false ;
    openButton.forEach((button:Element) => {
      if(button.contains(event.target as Node)){
        clickInside = true ;
      }
    });

    if(modalContainer && !clickInside && this.isnavOpen ){
      this.closeNavbarContent() ;
    }
  }
}