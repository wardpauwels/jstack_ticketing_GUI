import {Ticket} from "./ticket";

export class Association {
  id: number;
  ticket: Ticket;
  association: Association;
  associationType: String;
}
