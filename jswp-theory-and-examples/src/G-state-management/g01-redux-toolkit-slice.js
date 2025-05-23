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

import { configureStore, createSlice } from '@reduxjs/toolkit'

// cleanCounter -> zeruje counter
// incrementBy -> zwiększa o, wyznaczoną przez nas wartość counter.

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => {
            state++;
            return state;
        },
        decrement: (state) => {
            state--;
            return state;
        },
        cleanCounter: () => 0,
        incrementBy: (state, { payload = 0 }) => state + payload//(action.payload || 0)
    }
})

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
    }
});

// ACTIONS:
const { increment, decrement, cleanCounter, incrementBy } = counterSlice.actions;

// SELECTORS:
const selectCounter = (state) => state[counterSlice.name];

store.subscribe(() => {
    console.log(selectCounter(store.getState()));
})


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(cleanCounter());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementBy(500));
store.dispatch(decrement());
