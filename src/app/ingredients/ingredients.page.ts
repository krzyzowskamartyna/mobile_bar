import { Component, OnInit } from '@angular/core';
import { ApiService, Category } from '../services/api.service';
import { ListAdapter } from '../elements/list-element/list-element.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
  providers: [ApiService]
})
export class IngredientsPage implements OnInit {

  constructor(private api: ApiService) { }

  category: Category[] = [];
  list: ListAdapter[] = [];
  loading: boolean = false;

  loadCategory() {
    this.loading = true;
    this.api.getCategory().subscribe(categoryResponse => {
      this.category = categoryResponse;
      this.loading = false;
      this.list = this.category.map(c => {
        const item = new ListAdapter();
        item.name = c.name;
        item.route = "/ingredients-details/"
        return item;
      })
    })
  }

  ngOnInit() {
    this.loadCategory();
  }

}
