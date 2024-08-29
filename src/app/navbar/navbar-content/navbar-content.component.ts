import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { navigation } from './nav-content';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css'] // Corrected to styleUrls
})
export class NavbarContentComponent implements OnInit {
  @Input() selectedContent: string | null = null; // Input to select content category
  category: any = null;
  selectedCategory: any = null;

  ngOnInit() {
    this.category = navigation; // Assign the navigation data to 'category'

    // Find the selected category based on the passed input (like 'women' or 'men')
    this.selectedCategory = this.category.categories.find(
      (cat: any) => cat.id === this.selectedContent
    );

    // Log for debugging
    console.log("Selected Content: ", this.selectedContent);
    console.log("Selected Category: ", this.selectedCategory);
  }
}
