import { Component } from '@angular/core';
import { usersService } from './users.service';
import { counterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = this.userservice.activeUsers;
  inactiveUsers = ['Chris', 'Manu'];
  madeActive = this.counterservice.sentToActive;
  madeInactive = this.counterservice.sentToInactive;

  constructor(private userservice: usersService, private counterservice: counterService) {
  }

}
