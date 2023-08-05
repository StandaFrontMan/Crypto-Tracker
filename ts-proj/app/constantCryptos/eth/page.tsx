import { getCryptoData } from "@/app/helpers/getCryptoData";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'ETH',
}

export default async function Ethereum() {

    const cryptoName: string = 'ETH';
    const fiatPair: string = 'USD';
    const eth = await getCryptoData({ cryptoName, fiatPair });

    return (
        <div className="ethereum-container">
                <div className="eth-details">
                    <p className="eth-symbol">{eth.symbol}</p>
                    <p className="eth-day">{eth.day}</p>
                    <p className="eth-close">{eth.close}</p>
                </div>
            <div className="home-link">
                <Link href='/'>Home</Link>
            </div>
        </div>
    )
}