import { Metadata } from "next"
import { APIBase, APIKey } from "../api/api"
import { CryptoData } from "../modules/ICrypto";

export const metadata: Metadata = {
    title: 'BTC'
}

async function getCryptoData(): Promise<CryptoData> {
    const response = await fetch(`${APIBase}${APIKey}`);

    if(!response.ok) {
        throw new Error('Unable to fetching :-(')
    }

    const data = await response.json();

    return data;
}

export default async function Bitcoin() {

    const btc = await getCryptoData();

    return (
        <div>
            <p>{btc.symbol}</p>
            <p>{btc.day}</p>
            <p>{btc.open}</p>
        </div>
    )
}