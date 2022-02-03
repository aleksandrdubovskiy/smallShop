import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartInfo} from "../../models";

const initialState: ICartInfo = {
    isOpened: false,
    count: 0
};

export const cartShowSlice = createSlice({
    name: 'cartShow',
    initialState,
    reducers: {
        updateCart: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        toggleCart: (state) => {
            state.isOpened = !state.isOpened;
        },
    }
})

export const cartShowReducer = cartShowSlice.reducer;
export const cartShowActions = cartShowSlice.actions;