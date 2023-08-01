import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>
        <Link href='/constantCryptos/btc'>BTC</Link>
      </p>
      <p>
        <Link href='/constantCryptos/eth'>ETH</Link>
      </p>
      <p>
        <Link href='/constantCryptos/ltc'>LTC</Link>
      </p>

      <p>
      Here i have to create component for createing new Crypto info
      </p>
    </div>
  )
}
