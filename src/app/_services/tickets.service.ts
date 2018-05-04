import {Injectable} from '@angular/core';
import {Ticket} from "../_models";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TicketsService {
  private url: string = "http://localhost:8080/api/tickets";

  constructor(private http: HttpClient) {
  }

  answerOnTicketWithId(ticket: Ticket, message: string) {
    return this.http.post(this.url + "/answers/" + ticket.id, "{'message':'" + message + "'}")
      .map(res => {
        return res
      });
  }
}
