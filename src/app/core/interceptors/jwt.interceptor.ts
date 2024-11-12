import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();
    // const token =
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJub206ICI6IkRpb3AiLCJzdWIiOiJrYW5hQGdtYWlsLmNvbSIsInJvbGVzOiAiOlsidXNlciJdLCJwcmVub206ICI6IklicmFoaW1hIiwiZXhwIjoxNzAwMTU5MjAxLCJpYXQiOjE3MDAxNDEyMDF9.sbbQ7VAxWKxh-69fRsRN5EAqHOidduU_jdfLdEWIsjQ';
    if (token) {
      // const requestWithToken = request.clone({
      //   headers: request.headers.set('Authorization', 'bearer Token ' + token),
      // });

      const requestWithToken = request.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }),
      });
      return next.handle(requestWithToken);
    }
    return next.handle(request);
  }
}
