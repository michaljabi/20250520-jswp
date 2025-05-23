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
        }
    }
})

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
    }
});

// ACTIONS:
const { increment, decrement } = counterSlice.actions;

// SELECTORS:
const selectCounter = (state) => state[counterSlice.name];

store.subscribe(() => {
    console.log(selectCounter(store.getState()));
})


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
