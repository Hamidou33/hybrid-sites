import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Comments } from "../../interfaces/comments";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NestService {
  private commentsSubject: Subject<Comments[]> = new Subject<Comments[]>();
  env: string = environment.apiUrlNest;

  constructor(private http: HttpClient) {
  }

  get commentsUpdated(): Observable<Comments[]> {
    return this.commentsSubject.asObservable();
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

  // fetchComments(): void {
  //   this.http.get<Comments[]>(this.apiUrl).subscribe(
  //     comments => this.commentsSubject.next(comments),
  //     error => console.error('Error fetching comments:', error)
  //   );
  // }

  fetchComments(): void {
    console.log('Fetching comments...');
    this.http.get<Comments[]>(`${this.env}/comments`).subscribe({
      next: (comments: Comments[]) => {
        this.commentsSubject.next(comments);
      }, error: (err: any) => {
        this.commentsSubject.error(err);
      }
    }
    );
  }

}
