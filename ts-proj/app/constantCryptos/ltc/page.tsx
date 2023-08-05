import { Metadata } from "next"
import Link from "next/link";
import { getCryptoData } from "@/app/helpers/getCryptoData";

export const metadata: Metadata = {
    title: `LTC`
}

export default async function LiteCoin() {
        
    const cryptoName: string = 'LTC';
    const fiatPair: string = 'USD';
    const ltc = await getCryptoData({ cryptoName, fiatPair });
    
    return (
        <div className="litecoin-container">
                <div className="ltc-details">
                    <p className="ltc-symbol">{ltc.symbol}</p>
                    <p className="ltc-day">{ltc.day}</p>
                    <p className="ltc-close">{ltc.close}</p>
                </div>
            <div className="home-link">
                <Link href='/'>Home</Link>
            </div>
        </div>
    )
}