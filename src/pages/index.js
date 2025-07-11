import Head from 'next/head'
import Navbar from '../components/Navbar'
import DownloadButton from '../components/DownloadButton'
import { FaWindows, FaApple, FaAndroid, FaAppStoreIos } from 'react-icons/fa'
import { FiShield, FiGlobe, FiZap, FiEyeOff } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Head>
        <title>RS VPN - Secure and Fast VPN Service</title>
        <meta name="description" content="RS VPN provides secure and private internet access worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Secure Your Digital Life with <span className="text-primary-500">RS VPN</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Military-grade encryption, blazing fast speeds, and a strict no-logs policy.
                Browse freely and securely from anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <DownloadButton 
                  platform="Windows" 
                  icon={<FaWindows size={24} />}
                  color="bg-blue-600 hover:bg-blue-700"
                />
                <DownloadButton 
                  platform="Mac" 
                  icon={<FaApple size={24} />}
                  color="bg-gray-800 hover:bg-gray-900"
                />
                <DownloadButton 
                  platform="Android" 
                  icon={<FaAndroid size={24} />}
                  color="bg-green-600 hover:bg-green-700"
                />
                <DownloadButton 
                  platform="iOS" 
                  icon={<FaAppStoreIos size={24} />}
                  color="bg-purple-600 hover:bg-purple-700"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/app-screenshot.png" 
                alt="RS VPN App" 
                className="w-full max-w-md rounded-xl shadow-xl animate-float"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-dark-800 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Why Choose RS VPN?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FiShield size={32} className="text-primary-500" />,
                  title: "Military-Grade Encryption",
                  desc: "AES-256 encryption keeps your data safe from hackers and surveillance."
                },
                {
                  icon: <FiGlobe size={32} className="text-primary-500" />,
                  title: "Global Servers",
                  desc: "Access content from anywhere with our worldwide server network."
                },
                {
                  icon: <FiZap size={32} className="text-primary-500" />,
                  title: "Blazing Fast Speeds",
                  desc: "Optimized servers ensure minimal speed loss when connected."
                },
                {
                  icon: <FiEyeOff size={32} className="text-primary-500" />,
                  title: "No Activity Logs",
                  desc: "We never track or store your browsing history or connection logs."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 dark:bg-dark-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary-500 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Back Your Privacy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of users who trust RS VPN to protect their online privacy and security.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
              Get RS VPN Now
            </button>
          </div>
        </section>
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
