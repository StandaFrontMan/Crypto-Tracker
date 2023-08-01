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
        <div>
            <div>
                <p>{eth.symbol}</p>
                <p>{eth.day}</p>
                <p>{eth.close}</p>
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </div>
    )
}