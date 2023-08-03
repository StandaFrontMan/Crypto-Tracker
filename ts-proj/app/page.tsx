import Link from 'next/link'
import OwnCoinComponent from './components/OwnCoinComponent'

export default function Home() {
  return (
    <div>
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
      </div>
      <div>
        <OwnCoinComponent />
      </div>
      
    </div>
  )
}
