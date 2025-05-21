import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        items: ['cola']
    },
    reducers: {
        // reducer'y są teraz rozdzielone "per akcja" (pozbywamy się switcha)
        addNew: (state, action) => {
            // możemy mutować!
            state.items.push(action.payload)
        }
    }
})

// Selektor, zwykła funkcja - wyciągająca daną część stanu
// może ew. mapować / przerabiać / przeliczać na potrzeby prezentacji danych
export const selectAllOrders = (state) => state[ordersSlice.name].items