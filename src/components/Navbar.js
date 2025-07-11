import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-dark-800 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* Replace with your logo */}
          <svg className="w-8 h-8 text-primary-600 dark:text-primary-500" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.5,8.1 14.5,9.5C14.5,10.9 13.4,12 12,12C10.6,12 9.5,10.9 9.5,9.5C9.5,8.1 10.6,7 12,7M12,14.93C14.5,14.44 16.5,12.54 17.5,10.13C17.5,10.13 14.5,10.5 12,10.5C9.5,10.5 6.5,10.13 6.5,10.13C7.5,12.54 9.5,14.44 12,14.93Z" />
          </svg>
          <span className="text-xl font-bold text-gray-800 dark:text-white">RS VPN</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link href="/privacy" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
            Privacy Policy
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
