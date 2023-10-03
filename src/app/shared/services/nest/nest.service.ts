import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
  env: string = environment.apiNest;

  constructor(private http: HttpClient) {
  }

  getNestService() {
    return this.http.get(this.env, {responseType: 'text'});
  }
}
