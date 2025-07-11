import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RS VPN - Secure and Fast VPN Service</title>
        <meta name="description" content="RS VPN provides secure and private internet access worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>RS VPN</h1>
        <p className="description">Secure your internet connection with our fast and reliable VPN service</p>
        
        <div className="download-section">
          <h2>Download RS VPN</h2>
          <div className="download-buttons">
            <a href="#" className="download-btn">Download for Windows</a>
            <a href="#" className="download-btn">Download for Mac</a>
            <a href="#" className="download-btn">Download for Android</a>
            <a href="#" className="download-btn">Download for iOS</a>
          </div>
        </div>

        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>Military-grade encryption</li>
            <li>No-logs policy</li>
            <li>Unlimited bandwidth</li>
            <li>Global server network</li>
          </ul>
        </div>

        <Link href="/privacy" className="privacy-link">Privacy Policy</Link>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} RS VPN. All rights reserved.</p>
      </footer>
    </div>
  )
}
