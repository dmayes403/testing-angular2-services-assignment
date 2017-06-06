import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { usersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  inActiveUserList: string[];

  constructor(private userservice: usersService) {}

  ngOnInit() {
    this.inActiveUserList = this.userservice.inactiveUsers
  }

  onSetToActive(id: number) {
    this.userservice.userSetToActive(id);
  }
}
