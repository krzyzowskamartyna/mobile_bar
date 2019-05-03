import { Component, OnInit } from '@angular/core';
import { ApiService, Category } from 'src/app/services/api.service';
import { ListAdapter } from 'src/app/elements/list-element/list-element.component';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.page.html',
  styleUrls: ['./ingredients-details.page.scss'],
})
export class IngredientsDetailsPage implements OnInit {

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
        item.route = "/details/"
        return item;
      })
    })
  }

  ngOnInit() {
    this.loadCategory();
  }
}
