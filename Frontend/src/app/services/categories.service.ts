import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories () {
    let URL = "https://socialgood-312004.wl.r.appspot.com/prices";
    return this.http.get(URL);
  }

}
