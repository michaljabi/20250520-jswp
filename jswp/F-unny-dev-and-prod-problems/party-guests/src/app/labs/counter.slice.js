import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 230,
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

// ACTIONS:
export const { increment, decrement, cleanCounter, incrementBy } = counterSlice.actions;

// SELECTORS:
export const selectCounter = (state) => state[counterSlice.name];

