import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { key } from '../config';

import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { CacheService } from "ionic-cache";

export class Drink {
  _id: any;
  image: String;
  name: String;
  ingrediens: String;
  preparation: String;
  alkohol: String;
}

export class Category {
  _id: string;
  name: string;
}

export class DrinkListResponse {
  drinks: Drink[];
}

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) {
    this.cache.enableCache(false);
    this.cache.setOfflineInvalidate(true);
    this.cache.setDefaultTTL(3600 * 24 * 7); // one week cache
  }

  apiBase: String = 'https://api.mlab.com/api/1/databases/bar/collections';

  private _get(api: string): Observable<any> {
    let url = this.apiBase + api + key;
    let getFromAPI = this.http.get(url);

    return this.cache.loadFromObservable(url, getFromAPI)
  }

  getDrink(_id: any): Observable<Drink> {
    return this._get('/items/' + _id).pipe(map(resp => <Drink>resp))
  }

  getDrinkList(): Observable<Drink[]> {
    return this._get('/items').pipe(map(resp => <Drink[]>resp))
  }

  getAlcohols(name: string): Observable<Drink[]> {
    let url = `${this.apiBase}/items/${key}&q={"alkohol":"${name}"}`;
    let cacheKey = url;
    let request = this.http.get(url)
    return this.cache.loadFromObservable(cacheKey, request);
  }

  getCategory(): Observable<Category[]> {
    return this._get('/category').pipe(map(resp => <Category[]>resp))
  }

  getFlavour(): Observable<Category[]> {
    return this._get('/flavour').pipe(map(resp => <Category[]>resp))
  }
  getDrinkWithout(_id: any): Observable<Drink> {
    return this._get('/itemsWithout/' + _id).pipe(map(resp => <Drink>resp))
  }

  getDrinkWithoutList(): Observable<Drink[]> {
    return this._get('/itemsWithout').pipe(map(resp => <Drink[]>resp))
  }
}
