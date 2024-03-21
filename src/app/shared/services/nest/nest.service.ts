import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comments } from "../../interfaces/comments";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NestService {
  env: string = environment.apiUrlNest;

  constructor(private http: HttpClient) {
  }

  addComment(comment: Comments): Observable<any> {
    return this.http.post<any>(`${this.env}/comments`, comment).pipe(
      tap(() => this.fetchComments())
    );
  }

  deleteComment(commentId: number): Observable<any> {
    const url = `${this.env}/comments/${commentId}`;
    return this.http.delete<any>(url).pipe(
      tap(() => this.fetchComments())
    );
  }

  fetchComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.env}/comments`)
  }

}
