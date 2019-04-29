import { Component, OnInit } from '@angular/core';
import { Drink, ApiService } from '../services/api.service';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.page.html',
  styleUrls: ['./coctails.page.scss'],
  providers: [ApiService]
})
export class CoctailsPage implements OnInit {

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
