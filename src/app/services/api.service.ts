import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Drink {
  id: number;
  image: String;
  name: String;
  ingredients: String;
  preparation: String;
  alkohol: String;
}

export class DrinkListResponse {
  drinks: Drink[];
}

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  apiBase: String = 'https://api.mlab.com/api/1/databases/bar/collections/items';
  key: String = '?apiKey=q6Fe3HyzvkpdVymQxPKSpPtcEjBHGHFc';


  getDrink(id: any): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiBase}/${id}${this.key}`)
  }

  getDrinkList(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}${this.key}`)
  }
}
