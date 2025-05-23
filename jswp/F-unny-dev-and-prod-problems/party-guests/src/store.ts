import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./app/labs/counter.slice";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
  devTools: true,
});
