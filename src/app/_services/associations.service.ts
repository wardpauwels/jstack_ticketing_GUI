import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Association} from "../_models";
import {TokenStorage} from "../_token/token.storage";

@Injectable()
export class AssociationsService {

  url: string = "http://localhost:8080/api";

  constructor(private http: HttpClient,
              private tokenStorage: TokenStorage) {
  }

  getAllAssociations() {
    return this.http.get<Association[]>(this.url + "/associations/groups");
  }

  getAssociotionsForConversation(id: string){
    return this.http.get<Association[]>(this.url + "/associations/groups/" + id);
  }

  getAssociationsForUser(username:string){

  }
}
