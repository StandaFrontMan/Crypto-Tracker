'use client';

import { useState } from "react"
import { getCryptoData } from "../helpers/getCryptoData";
import { CryptoData } from "../modules/ICrypto";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addCoin } from "../redux/features/usersCoinsSlice";

export default function OwnCoinComponent() {

    const dispatch = useAppDispatch();

    const [cryptoName, setCryptoName] = useState<string>('');
    const [fiatPair, setFiatPair] = useState<string>('');

    const [data, setData] = useState<CryptoData | null>(null);
    
    const handleClick = () => {
        if (cryptoName && fiatPair !== '') {
            getCryptoData({ cryptoName, fiatPair })
                .then((response: CryptoData) => {
                    setData(response);
                })
        }
    }

    const handleAddCoin = () => {
        if(data) {
            dispatch(addCoin(data))
        }
    }

    return (
        <main className="coin-container">
            <div className="input-container">
                <input
                    type="text"
                    className="crypto-input"
                    placeholder="Enter crypto ..."
                    value={cryptoName}
                    onChange={(e) => setCryptoName(e.target.value.toUpperCase())}
                />
                <input
                    type="text"
                    className="pair-input"
                    placeholder="Enter pair ..."
                    value={fiatPair}
                    onChange={(e) => setFiatPair(e.target.value.toUpperCase())}
                />
            </div>
            <div className="button-container">
                <button className="fetch-button" onClick={handleClick}>click</button>
            </div>
            <div className="data-container">
                <p>{data?.symbol}</p>
                <p>{data?.day}</p>
                <p>{data?.close}</p>
            </div>
            <div className="add-button-container">
                <button className="add-button" onClick={handleAddCoin} disabled={!data}>Add to Fav</button>
            </div>
        </main>
    )
}