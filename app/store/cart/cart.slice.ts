import {IProductItem} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:IProductItem[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProductItem>) => {
            state.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<{id:number}>) => {
            return state.filter(item => item.id !== action.payload.id);
        },
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;