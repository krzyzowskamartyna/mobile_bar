import { Component, OnInit } from '@angular/core';
import { ApiService, Drink } from '../services/api.service';
import { ListAdapter } from '../elements/list-element/list-element.component';

@Component({
  selector: 'app-non-alcohol',
  templateUrl: './non-alcohol.page.html',
  styleUrls: ['./non-alcohol.page.scss'],

  providers: [ApiService]
})
export class NonAlcoholPage implements OnInit {

  constructor(private api: ApiService) { }

  drinks: Drink[] = [];
  list: ListAdapter[] = [];
  loading: boolean = false;

  loadDrinks() {
    this.loading = true;
    this.api.getDrinkWithoutList().subscribe(drinkResponse => {
      this.drinks = drinkResponse;
      this.loading = false;
      this.list = this.drinks.map((art) => {
        const item = new ListAdapter();
        item.name = art.name;
        item.preparation = art.preparation;
        item.ingrediens = art.ingrediens;
        item.route = "/non-alcohol-details/" + art._id.$oid;
        item.image = art.image;
        return item;
      })
    })
  }
  ngOnInit() {
    this.loadDrinks();
  }

}
