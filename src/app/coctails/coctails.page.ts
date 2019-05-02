import { Component, OnInit, Input } from '@angular/core';
import { Drink, ApiService } from '../services/api.service';
import { ListAdapter } from '../elements/list-element/list-element.component';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.page.html',
  styleUrls: ['../ingredients/ingredients.page.scss'],
  providers: [ApiService]
})
export class CoctailsPage implements OnInit {

  constructor(private api: ApiService) { }



  drinks: Drink[] = [];
  list: ListAdapter[] = [];
  loading: boolean = false;

  loadDrinks() {
    this.loading = true;
    this.api.getDrinkList().subscribe(drinkResponse => {
      this.drinks = drinkResponse;
      this.loading = false;
      this.list = this.drinks.map((art) => {
        const item = new ListAdapter();
        item.name = art.name;
        item.alkohol = art.alkohol;
        item.preparation = art.preparation;
        item.ingrediens = art.ingrediens;
        item.route = "/coctails/" + art._id.$oid;
        item.image = art.image;
        return item;
      })
    })
  }
  ngOnInit() {
    this.loadDrinks();
  }

}
