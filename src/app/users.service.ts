import { EventEmitter, Injectable } from '@angular/core';
import { counterService } from './counter.service';

@Injectable()
export class usersService {
  sendToInactive: string[];
  sendToActive: string[];
  sentToActive: number = 0;
  sentToInactive: number = 0;
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterservice: counterService){}

  userSetToInactive(id: number){
    this.currentCount.emit({sentToActive: this.sentToActive, sentToInactive: this.sentToInactive});
    this.sendToInactive = this.activeUsers.splice(id,1)
    this.inactiveUsers.push(this.sendToInactive[0])
    this.counterservice.incrementActiveToInactive();
  }

  userSetToActive(id: number){
    this.currentCount.emit({sentToActive: this.sentToActive, sentToInactive: this.sentToInactive});
    this.sendToActive = this.inactiveUsers.splice(id,1)
    this.activeUsers.push(this.sendToActive[0]);
    this.counterservice.incrementInactiveToActive();
  }

  currentCount = new EventEmitter<{sentToActive: number, sentToInactive: number}>()
}
