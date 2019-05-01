import { Component, OnInit } from '@angular/core';
import { ApiService, Drink } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-non-alcohol-details',
  templateUrl: './non-alcohol-details.page.html',
  styleUrls: ['./non-alcohol-details.page.scss'],

  providers: [ApiService]
})
export class NonAlcoholDetailsPage implements OnInit {

  constructor(private api: ApiService, private router: ActivatedRoute) { }

  drink: Drink = new Drink();
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.api.getDrinkWithout(params.id).subscribe(drink => this.drink = drink);
      this.loading = false;
    });
  }

}
