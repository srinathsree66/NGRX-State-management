import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
  customIncrement,
} from './counter.actions';
import { CounterState, intialState } from './counter.state';

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(`action value is`, action);

    return {
      ...state,

      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state: any, action: any): CounterState {
  return _counterReducer(state, action);
}
