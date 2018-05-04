import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {TokenStorage} from "../_token/token.storage";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public tokenStorage: TokenStorage
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenStorage.getToken() != null){
      request = request.clone({
        setHeaders: {
          Authorization: this.tokenStorage.getToken()
        }
      });
    }
    return next.handle(request);
  }
}
