import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomSearchService {
  constructor(private http: HttpClient) {}

  public BASE_URL = 'https://nft-app-4tp5y.ondigitalocean.app/public';
  public SEARCH_PATH = '/search/records-auto-complete?keyword=';

  public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('token', '123');

  public searchAutoComplete(search: string) {
    const url = this.BASE_URL + this.SEARCH_PATH + search;
    return this.http.get(url, { headers: this.headers });
  }
}
