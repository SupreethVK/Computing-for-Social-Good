import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public hoveredElement:any;
  public id: any;

  public categories: any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoriesService.getCategories().subscribe(res => {
      this.categories = res;
      this.categories = this.categories.data;
    });
  }

  toggleHover(id: any) {
    this.hoveredElement = id
  }
  
  removeHover() {
    this.hoveredElement = null;
  }

}
