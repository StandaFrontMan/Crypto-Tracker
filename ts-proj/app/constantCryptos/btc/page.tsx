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
        <div>
            <div>
                <p>{btc.symbol}</p>
                <p>{btc.day}</p>
                <p>{btc.close}</p>
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </div>
    )
}