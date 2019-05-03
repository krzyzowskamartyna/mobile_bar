import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { key } from '../config';

export class Drink {
  _id: any;
  image: String;
  name: String;
  ingrediens: String;
  preparation: String;
  alkohol: String;
}

export class Category {
  _id: String;
  name: String;
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

  getDrink(_id: any): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiBase}/items/${_id}${key}`)
  }

  getDrinkList(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}/items${key}`)
  }

  getAlcohols(name: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}/items/${key}&q={"alkohol":"${name}"}`)
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiBase}/category/${key}`)
  }

  getFlavour(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiBase}/flavour/${key}`)
  }
  getDrinkWithout(_id: any): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiBase}/itemsWithout/${_id}${key}`)
  }

  getDrinkWithoutList(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiBase}/itemsWithout${key}`)
  }
}
