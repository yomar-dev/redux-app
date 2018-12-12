import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './counter.actions';

export function counterReducer(state: number = 10, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        break;

        case DECREMENT:
            return state - 1;
        break;

        default:
            return state;
        break;
    }
}
