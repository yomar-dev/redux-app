import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
      console.log('Counter: ', counter);
    });
  }

  multiply() {
    this.counter *= 2;
    // this.changeCounter.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    // this.changeCounter.emit(this.counter);
  }

  resetGrandchild($event) {
    this.counter = $event;
    // this.changeCounter.emit($event);
  }

}
