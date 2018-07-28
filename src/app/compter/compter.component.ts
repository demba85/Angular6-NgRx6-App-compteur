import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of } from "rxjs";
import { Detail } from './../models/detail';
import { IncrementCounter, DecrementCounter } from '../state/app.actions';


@Component({
  selector: 'app-compter',
  templateUrl: './compter.component.html',
  styleUrls: ['./compter.component.css']
})
export class CompterComponent implements OnInit {

  title = '';
  total = 0;
  allDetails: Detail[]

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select("appState")).subscribe(data => {
      console.log(data);
      this.total = data.count;
      this.allDetails = data.details;
      this.title = data.title;
    });
  }

  increment() {
    // this.store.dispatch({ type: 'INCREMENT', payload: 1 });
    this.store.dispatch(new IncrementCounter(1));
  }

  decrement() {
  //   this.store.dispatch({ type: 'DECREMENT', payload: 1 });
    this.store.dispatch(new DecrementCounter(1));
  }

}
