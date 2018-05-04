import {User} from "./user";

export class Ticket {
  id: number;
  assignedGroup: string;
  assignedUser: string;
  createdAt: Date;
  creator: string;
  description: string;
  dueAt: Date;
  status: string;
  topicText: string;

  //custom
  user: User;

}
