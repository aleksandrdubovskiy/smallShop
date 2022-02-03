import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productAPI} from "./product/product.api";
import {cartReducer} from "./cart/cart.slice";
import {cartShowReducer} from "./cartShow/cartShow.slice";

const rootReducer = combineReducers({
    cart: cartReducer,
    cartShow: cartShowReducer,
    [productAPI.reducerPath]: productAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']