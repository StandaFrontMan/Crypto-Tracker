'use client';

import { useState } from "react"
import { getCryptoData } from "../helpers/getCryptoData";
import { CryptoData } from "../modules/ICrypto";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addCoin } from "../redux/features/usersCoinsSlice";

export default function OwnCoinComponent() {

    const dispatch = useAppDispatch();
    const { coins } = useAppSelector(state => state.coin)

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
        <main>
            <div>
                <input
                    type="text"
                    placeholder="Enter crypto ..."
                    value={cryptoName}
                    onChange={(e) => setCryptoName(e.target.value.toUpperCase())}
                />
                <input
                    type="text"
                    placeholder="Enter pair ..."
                    value={fiatPair}
                    onChange={(e) => setFiatPair(e.target.value.toUpperCase())}
                />
            </div>
            <div>
                <button onClick={handleClick}>click</button>
            </div>
            <div>
                <p>{data?.symbol}</p>
                <p>{data?.day}</p>
                <p>{data?.close}</p>
            </div>
            <div>
                <button onClick={handleAddCoin} disabled={!data}>Add to Fav</button>
            </div>
        </main>
    )
}