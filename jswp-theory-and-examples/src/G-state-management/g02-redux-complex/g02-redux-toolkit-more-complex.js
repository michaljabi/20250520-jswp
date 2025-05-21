import { configureStore  } from '@reduxjs/toolkit'
import { ordersSlice, selectAllOrders } from './orders.slice.js'

// PROVIDER - store, z drzewem stanu:
const store = configureStore({
    reducer: {
        [ordersSlice.name]: ordersSlice.reducer
    },
    devTools: true
});


// CONSUMER - odbiorca naszej logiki:
store.subscribe(() => {
    console.log(selectAllOrders(store.getState()));
})

const { addNew } = ordersSlice.actions;
// EVENTS (actions dispatcher) - Zmiana stanu.
store.dispatch(addNew('pizza'));
store.dispatch(addNew('pasta'));
store.dispatch(addNew('chicken'));