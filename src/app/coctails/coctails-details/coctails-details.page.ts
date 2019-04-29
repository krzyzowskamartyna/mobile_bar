import { Component, OnInit } from '@angular/core';
import { ApiService, Drink } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coctails-details',
  templateUrl: './coctails-details.page.html',
  styleUrls: ['./coctails-details.page.scss'],
  providers: [ApiService]
})
export class CoctailsDetailsPage implements OnInit {
  constructor(private api: ApiService, private router: ActivatedRoute) { }

  drink: Drink = new Drink();

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.api.getDrink(params.id).subscribe(drink => this.drink = drink);
    });
  }

}
