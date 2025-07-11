import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Head>
        <title>Privacy Policy - RS VPN</title>
        <meta name="description" content="RS VPN Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl bg-white dark:bg-dark-800 rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300">
                RS VPN is designed with privacy as its core principle. We do not collect, store, or log any data regarding your browsing activities, IP addresses, DNS queries, or any information about the websites you visit while connected to our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Connection Logs</h2>
              <p className="text-gray-600 dark:text-gray-300">
                For the purpose of maintaining service quality and preventing abuse, we retain minimal connection logs for a maximum of 24 hours. These logs include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mt-2">
                <li>Timestamp of connection</li>
                <li>Amount of data transferred (not content)</li>
                <li>Server location connected to</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                These logs are automatically deleted and cannot be used to identify individual users or their activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We implement industry-standard security measures to protect any information we do collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mt-2">
                <li>AES-256 encryption for all data in transit</li>
                <li>Perfect Forward Secrecy (PFS) to prevent decryption of past sessions</li>
                <li>RAM-only servers that wipe all data on reboot</li>
                <li>Regular security audits and penetration testing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Payment Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                When you purchase RS VPN, our payment processors may collect information necessary to process your transaction. We do not store your payment details on our servers. All payment processing is handled by third-party providers with their own privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. When we post changes, we will revise the "last updated" date at the bottom of this policy. We encourage you to periodically review this page for the latest information on our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at privacy@rsvpn.example.com.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-dark-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} RS VPN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
