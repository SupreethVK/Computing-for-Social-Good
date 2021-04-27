import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TerminologiesService {

  constructor(private http: HttpClient) { }

  getTerminologies() {
    let URL = "https://socialgood-312004.wl.r.appspot.com/terminologies";
    return this.http.get(URL);
  }
}
