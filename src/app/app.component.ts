import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementAction, DecrementAction } from './counter/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      console.log('State: ', state);
      this.counter = state.counter;
    });
  }

  increase() {
    const action = new IncrementAction();
    this.store.dispatch(action);
  }

  decrease() {
    const action = new DecrementAction();
    this.store.dispatch(action);
  }
}
