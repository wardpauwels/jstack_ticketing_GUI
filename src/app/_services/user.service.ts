import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenStorage} from "../_token/token.storage";

@Injectable()
export class UserService {

  private isLoggedIn: boolean = false;
  private url: string = "http://localhost:8080/api/users";

  constructor(private http: HttpClient,
              token: TokenStorage) {
  }

  isUserLoggedIn() {
    return this.http.get(this.url + "/loggedin")
      .map(user => {
        this.isLoggedIn = !!user;
        return this.isLoggedIn;
      });
  }

  getLoggedInUser() {
    return this.http.get(this.url + "/loggedin")
      .map(user => {
        return user;
      });
  }

  getUserByUsername(username: String) {
    return this.http.get(this.url + "/" + username)
      .map(user => {
        return user
      });
  }
}
