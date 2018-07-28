import { Action } from '@ngrx/store';

export enum CounterActionTypes {
    Increment = "[Counter] Increment",
    Decrement = "[Counter] Decrement"
}

export class IncrementCounter implements Action {
    // type = "[Counter] Increment";
    type = CounterActionTypes.Increment;

    constructor(public payload: number) {}
}

export class DecrementCounter implements Action {
    // type = "[Counter] Decrement";
    type = CounterActionTypes.Decrement;

    constructor(public payload: number) { }
}

export type CounterActions = IncrementCounter | DecrementCounter;