'use client';

import { useState } from "react"
import { getCryptoData } from "../helpers/getCryptoData";
import { CryptoData } from "../modules/ICrypto";
import Link from "next/link";

export default function OwnCoinComponent() {

    const [cryptoName, setCryptoName] = useState<string>('');
    const [fiatPair, setFiatPair] = useState<string>('');

    const [data, setData] = useState<CryptoData | null>(null);
    
    const handleClick = () => {
        if (cryptoName && fiatPair !== '') {
            getCryptoData({ cryptoName, fiatPair })
                .then((response: CryptoData) => {
                    setData(response)
                })
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
        </main>
    )
}