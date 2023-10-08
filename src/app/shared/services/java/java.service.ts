import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JavaService {
  private apiUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) {}

  getJavaItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
