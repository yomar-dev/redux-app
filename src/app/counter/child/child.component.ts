import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

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
    const action = new MultiplyAction(10);
    this.store.dispatch(action);
  }

  divide() {
    const action = new DivideAction(10);
    this.store.dispatch(action);
  }

  resetGrandchild($event) {
    this.counter = $event;
    // this.changeCounter.emit($event);
  }

}
