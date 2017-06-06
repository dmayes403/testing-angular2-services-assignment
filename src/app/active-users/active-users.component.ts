import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { usersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnInit {
  activeUsersList: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private userservice: usersService) {

  }

  ngOnInit() {
    this.activeUsersList = this.userservice.activeUsers;
    console.log(this.activeUsersList)
  }

  onSetToInactive(id: number) {
    this.userservice.userSetToInactive(id);
  }
}
