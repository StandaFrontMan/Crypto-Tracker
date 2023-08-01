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
        <div>
            <div>
                <p>{ltc.symbol}</p>
                <p>{ltc.day}</p>
                <p>{ltc.close}</p>
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </div>
    )
}