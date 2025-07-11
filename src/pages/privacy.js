import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="container">
      <Head>
        <title>Privacy Policy - RS VPN</title>
        <meta name="description" content="RS VPN Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Privacy Policy</h1>
        
        <div className="privacy-content">
          <section>
            <h2>Information We Collect</h2>
            <p>RS VPN does not collect, store, or log any data regarding your browsing activities, IP addresses, or DNS queries.</p>
          </section>

          <section>
            <h2>Connection Logs</h2>
            <p>We only maintain minimal logs of connection attempts for troubleshooting purposes, which are automatically deleted within 24 hours.</p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We use industry-standard encryption protocols to secure your data in transit. Our servers are configured to prevent data leakage.</p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>RS VPN does not share any user data with third parties. Our payment processors may collect information necessary to process transactions.</p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>We may update this privacy policy periodically. Users will be notified of significant changes through the app or website.</p>
          </section>
        </div>

        <Link href="/" className="home-link">Back to Home</Link>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} RS VPN. All rights reserved.</p>
      </footer>
    </div>
  )
}
