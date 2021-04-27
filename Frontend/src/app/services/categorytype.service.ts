import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorytypeService {

  constructor(private http: HttpClient) { }

  getCategory(category: string) {
    let URL = "https://socialgood-312004.wl.r.appspot.com/" + category;
    return this.http.get(URL);
  }

  getCategoryData(categorydata: string) {
    let URL = "https://socialgood-312004.wl.r.appspot.com/" + categorydata;
    return this.http.get(URL);
  }
}
