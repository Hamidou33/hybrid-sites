import {Injectable} from '@angular/core';

@Injectable()
export class BasicAuthInterceptor {
  // constructor(private authenticationService: AuthenticationService) {
  // }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // add authorization header with basic auth credentials if available
  //   const currentUser = this.authenticationService.currentUserValue;
  //   if (currentUser && currentUser.authdata) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Basic ${currentUser.authdata}`
  //       }
  //     });
  //   }
  //
  //   return next.handle(request);
  // }
}
