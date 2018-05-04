import {Component, OnInit} from '@angular/core';
import {AssociationsService} from "../_services/associations.service";
import {Association} from "../_models";

@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrls: ['./associations-list.component.css']
})
export class AssociationsListComponent implements OnInit {

  associations: Association[];

  constructor(private associationService: AssociationsService) {
  }

  ngOnInit() {
    this.getAllConversations();
  }

  getAllConversations() {
    this.associationService.getAllAssociations()
      .subscribe(associations => this.associations = associations);
  }

}
