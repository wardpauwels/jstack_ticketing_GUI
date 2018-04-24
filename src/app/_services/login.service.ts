import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:8080/api/login', {username: username, password: password})
      .map(user => {
        console.log(user);
        // login successful if there's a user
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  static logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
  }

}
