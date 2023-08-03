import { configureStore } from "@reduxjs/toolkit";
import  usersCoinsReducer  from "./features/usersCoinsSlice";


export const store = configureStore({
    reducer: {
        coin: usersCoinsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;