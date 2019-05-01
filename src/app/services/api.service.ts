import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Drink {
  _id: any;
  image: String;
  name: String;
  ingrediens: String;
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

  apiBase: String = 'https://api.mlab.com/api/1/databases/bar/collections';
  key: String = '?apiKey=q6Fe3HyzvkpdVymQxPKSpPtcEjBHGHFc';


  getDrink(_id: any): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiBase}/items/${_id}${this.key}`)
  }

  getDrinkList(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}/items${this.key}`)
  }

  getDrinkListbyAlcohol(alcohol: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}/items${this.key}&q={"alkohol":${alcohol}}`)
  }

  getDrinkWithout(_id: any): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiBase}/itemsWithout/${_id}${this.key}`)
  }

  getDrinkWithoutList(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}/itemsWithout${this.key}`)
  }
}
