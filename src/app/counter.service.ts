import { OnInit } from '@angular/core';

export class counterService {
  sentToActive: number = 0;
  sentToInactive: number = 0;

  ngOnInit() {
  }

  incrementActiveToInactive() {
    this.sentToInactive++;
    console.log(this.sentToInactive);
  }

  incrementInactiveToActive() {
    this.sentToActive++;
    console.log(this.sentToActive);
  }
}
