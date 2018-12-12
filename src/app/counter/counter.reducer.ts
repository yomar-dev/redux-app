import { Actions } from './counter.actions';
import { INCREMENT, DECREMENT, MULTIPLY, DIVIDE } from './counter.actions';

export function counterReducer(state: number = 10, action: Actions) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        break;

        case DECREMENT:
            return state - 1;
        break;

        case MULTIPLY:
            return state * action.payload;
        break;

        case DIVIDE:
            return state / action.payload;
        break;

        default:
            return state;
        break;
    }
}
