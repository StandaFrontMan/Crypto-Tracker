import { CryptoData } from "@/app/modules/ICrypto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

interface CoinState {
    coins: CryptoData[];
}

const initialState: CoinState = {
    coins: [],
}

export const usersCoinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        addCoin: (state, action: PayloadAction<CryptoData>) => {
            state.coins.push({
                symbol: action.payload.symbol,
                day: action.payload.day,
                close: action.payload.close,
            })
        },
        removeCoin: (state, action: PayloadAction<string>) => {

        }
    }
})

export const { addCoin, removeCoin } = usersCoinsSlice.actions;
export default usersCoinsSlice.reducer;