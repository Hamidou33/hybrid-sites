import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NestService {
  optionRequete = {
    headers: new HttpHeaders({
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
  };
  env: string = environment.apiUrlNest;

  constructor(private http: HttpClient) {
  }

  getNestService() {
    return this.http.get(`${this.env}/titre`, {responseType: 'text'});
  }

  // GET Request
  getNestItems(): Observable<any> {
    return this.http.get(`${this.env}/items`);
  }

  getNestCats(): Observable<any> {
    return this.http.get(`${this.env}/cats`);
  }

  // POST Request
  addNestItem(item: any): Observable<any> {
    return this.http.post(`${this.env}/items`, item);
  }

  // DELETE Request
  deleteNestItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.env}/items/${itemId}`);
  }

  // PUT Request
  updateNestItem(itemId: number, updatedItem: any): Observable<any> {
    return this.http.put(`${this.env}/items/${itemId}`, updatedItem);
  }
}
