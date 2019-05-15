import { Component, OnInit, Input } from '@angular/core';
import { ApiService, Category, Drink } from 'src/app/services/api.service';
import { ListAdapter } from 'src/app/elements/list-element/list-element.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.page.html',
  styleUrls: ['./ingredients-details.page.scss'],
  providers: [ApiService]
})
export class IngredientsDetailsPage implements OnInit {

  constructor(private api: ApiService, private router: ActivatedRoute) { }

  drinks: Drink[] = [];
  //category: Category[] = [];
  list: ListAdapter[] = [];
  loading: boolean = false;

  loadCategory() {

    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params.name)
      this.api.getAlcohols(params.name).subscribe(categoryResponse => {
        this.drinks = categoryResponse;
        this.loading = false;
        this.list = this.drinks.map(c => {
          console.log(this.list)
          const item = new ListAdapter();
          item.name = c.name;
          item.alkohol = c.alkohol;
          item.preparation = c.preparation;
          item.ingrediens = c.ingrediens;
          item.route = "/coctails/" + c._id.$oid;
          return item;
        })
      })
    })

  }
  ngOnInit() {
    this.loadCategory();
  }
}
