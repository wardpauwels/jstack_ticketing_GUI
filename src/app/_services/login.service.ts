import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import {User} from "../_models";
import {TokenStorage} from 'app/_token/token.storage';


@Injectable()
export class LoginService {

  private url: string = "http://localhost:8080/api";
  private newToken: string;

  constructor(private http: HttpClient,
              private token: TokenStorage) {
  }

  login(user: User) {
    return this.http.post(this.url + '/login', '{\"username\":\"' + user.username + '\",\"password\":\"' + user.password + '\"}',  {observe: 'response'})
      .map(res => {
        this.newToken = res.headers.get("Authorization");
        this.token.saveToken(this.newToken);
        return this.newToken;
      });
  }

  logout() {
    this.http.post(this.url + "/logout", null);
    this.token.signOut();
  }

}
