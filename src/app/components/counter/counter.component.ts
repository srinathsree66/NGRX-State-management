import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.actions';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  // counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // onIncrement() {
  //   // this.counter++;
  // }
  // onDecrement() {
  //   // this.counter--;
  // }
  // onReset() {
  //   // this.counter = 0;
  // }
}
