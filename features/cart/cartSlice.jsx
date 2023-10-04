import { createSlice } from "@reduxjs/toolkit";

const lastID = 0;

const initialState = {
    itemCount: 0,
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(
                {
                    id: lastID++,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1
                }
            );
        },
        addDuplicateItem: (state, action) => {
            state.items[action.payload.id].quantity++;
        },
        removeItem: (state, action) => {
            if (state.items[action.payload.id].quantity > 1)
                state.items[action.payload.id].quantity--;
            else
                state.items.splice(action.payload.id);
        }
    }
});

export const { addItem, addDuplicateItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer; 