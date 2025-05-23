/**
 * Architektura: Flux, 
 * implementacja: Redux
 *
 * Jednokierunkowy przepływ danych.
 * 
 * Zaimplementowany wzorzec CQRS:
 * Zainteresowani zmianą danych - muszą wywołać akcję dla danego reducera
 * 
 * Zainteresowania odczytem muszą zasubskrybować się do stora
 *
 * */

// Zrób tutaj akcje i wywołaj:

// CLEAN_COUNTER -> zeruje counter
// INCREMENT_BY -> zwiększa o, wyznaczoną przez nas wartość counter.

import { configureStore } from '@reduxjs/toolkit'

const increment = { type: 'INCREMENT_COUNTER', payload: 1 };
const decrement = { type: 'DECREMENT_COUNTER' };
const clean = { type: 'CLEAN_COUNTER' }

// const incrementBy = (payload = 0) => ({ type: 'INCREMENT_BY', payload })
const incrementBy = (value = 0) => ({ type: 'INCREMENT_BY', value })

// Zrób akcje, która zwiększy o 10 counter i zaimplementuj
// * Zaimplementuj akcje która zwiększy o dowolną zadaną wartość counter

function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + action.payload;
        case 'DECREMENT_COUNTER':
            return state - 1;
        case 'CLEAN_COUNTER':
            return 0;
        case 'INCREMENT_BY':
            return state + action.value;
        default:
            return state;
    }
}

function userNameReducer(name = '', action) {

    return name;
}

const store = configureStore({
    reducer: {
        counter: counterReducer,
        myUser: userNameReducer
    }
});

store.subscribe(() => {
    console.log(store.getState());
    // console.log(store.getState().counter);
})

//console.log(store.getState());
// store.dispatch({ type: 'DECREMENT_COUNTER' });
// store.dispatch({ type: 'DECREMENT_COUNTER' });
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(clean);
store.dispatch(increment);
store.dispatch(incrementBy(10));
store.dispatch(incrementBy(2));
store.dispatch(incrementBy(100));
// store.dispatch(increment);
// store.dispatch({ type: 'DECREMENT_COUNTER' });
// store.dispatch({ type: 'DECREMENT_COUNTER' });
// store.dispatch({ type: 'DECREMENT_COUNTER' });

//console.log(store.getState());

// store.dispatch(increment);
// store.dispatch(increment);
// store.dispatch(increment);
// console.log(store.getState());
// store.dispatch(decrement);
// console.log(store.getState());
