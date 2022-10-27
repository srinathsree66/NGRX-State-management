import { Component, OnInit } from '@angular/core';
import { CounterState } from 'src/app/state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number | any;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}
  addTocounter() {
    this.store.dispatch(customIncrement({ value: +this.value })); // + is used bcs of dom will return in string need to convert into number thats y
    console.log(this.value);
  }
}
