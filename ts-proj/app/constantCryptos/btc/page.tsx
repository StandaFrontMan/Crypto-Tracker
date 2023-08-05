import { Metadata } from "next"
import Link from "next/link";
import { getCryptoData } from "@/app/helpers/getCryptoData";

export const metadata: Metadata = {
    title: `BTC`
}

export default async function Bitcoin() {
        
    const cryptoName: string = 'BTC';
    const fiatPair: string = 'USD';
    const btc = await getCryptoData({ cryptoName, fiatPair });
    
    return (
        <div className="bitcoin-container">
            <div className="btc-details">
                <p className="btc-symbol">{btc.symbol}</p>
                <p className="btc-day">{btc.day}</p>
                <p className="btc-close">{btc.close}</p>
            </div>
        <div className="home-link">
            <Link href='/'>Home</Link>
        </div>
    </div>
    )
}