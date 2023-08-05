import Link from 'next/link'
import OwnCoinComponent from './components/OwnCoinComponent'

export default function Home() {
  return (
    <div className="container">
      <div className="navigation">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href='/constantCryptos/btc'>BTC</Link>
            </li>
            <li className="nav-item">
              <Link href='/constantCryptos/eth'>ETH</Link>
            </li>
            <li className="nav-item">
              <Link href='/constantCryptos/ltc'>LTC</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <section>
          <OwnCoinComponent />
        </section>
      </div>
    </div>
  )
}
