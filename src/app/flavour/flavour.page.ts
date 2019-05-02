import { Component, OnInit } from '@angular/core';
import { ApiService, Category } from '../services/api.service';
import { ListAdapter } from '../elements/list-element/list-element.component';


@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.page.html',
  styleUrls: ['./flavour.page.scss'],
  providers: [ApiService]
})
export class FlavourPage implements OnInit {

  constructor(private api: ApiService) { }

  category: Category[] = [];
  list: ListAdapter[] = [];
  loading: boolean = false;

  loadCategory() {
    this.loading = true;
    this.api.getFlavour().subscribe(categoryResponse => {
      this.category = categoryResponse;
      this.loading = false;
      this.list = this.category.map(c => {
        const item = new ListAdapter();
        item.name = c.name;
        return item;
      })
    })
  }

  ngOnInit() {
    this.loadCategory();
  }


}
