import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AssociationsService} from "../_services/associations.service";
import {Association, User} from "../_models";
import {TicketsService} from "../_services/tickets.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  id: string;
  associations: Association[];
  error: string;
  username: string;

  constructor(private route: ActivatedRoute,
              private associationsService: AssociationsService,
              private ticketsService: TicketsService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.initialiseComponent();
      this.userService.getLoggedInUser()
        .subscribe(
          data => {
            this.username = "ward";
          }
        );
    });
  }

  initialiseComponent() {
    this.associationsService.getAssociotionsForConversation(this.id)
      .subscribe(associations => this.associations = associations);
  }

  sendMessage(message: string) {
    if (message.length != 0) {
      this.ticketsService.answerOnTicketWithId(this.associations[0].ticket, message)
        .subscribe(
          data => {
            console.log("Success")
          },
          error => {
            console.log("Failed");
          });
    } else {
      this.error = "No message specified.";
    }
  }
}
