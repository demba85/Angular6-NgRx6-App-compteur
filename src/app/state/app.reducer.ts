import { State } from './app.state';
import { Detail } from '../models/detail'
import { CounterActionTypes, CounterActions } from './app.actions';

const initialState: State = {
    title: 'Nombre de personnes présentes',
    count: 0,
    details: []
};

export function reducer(state = initialState, action: CounterActions) {
 console.log('in reducer', action);
 switch(action.type) {
     case CounterActionTypes.Increment:
       return {
        ...state,
        count: state.count + action.payload,
        details: [...state.details, <Detail>{date: new Date(), buttonClicked: 'ajout'}]
       };
    
     case CounterActionTypes.Decrement:
         return {
           ...state,
           count: state.count - action.payload,
           details: [...state.details, <Detail>{ date: new Date(), buttonClicked: 'retrait' }]
         }

    default:
      return state;   

 }
}