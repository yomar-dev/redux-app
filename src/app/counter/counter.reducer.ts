import { Action } from '@ngrx/store';

export function counterReducer(state: number = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        break;

        case 'DECREMENT':
            return state - 1;
        break;

        default:
            return state;
        break;
    }
}
