import { Component, OnInit } from '@angular/core';
import { ApiService, Drink } from '../services/api.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
  providers: [ApiService]
})
export class IngredientsPage implements OnInit {

  constructor(private api: ApiService) { }

  drinks: Drink[] = []

  loadDrinks() {
    this.api.getDrinkList().subscribe(drinkResponse => {
      this.drinks = drinkResponse
    })
  }
  ngOnInit() {
    this.loadDrinks();
  }

}
