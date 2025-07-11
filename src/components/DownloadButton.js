import { motion } from 'framer-motion'

export default function DownloadButton({ platform, icon, color }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center px-6 py-3 rounded-lg shadow-md ${color} text-white transition-all hover:shadow-lg`}
    >
      <div className="mr-3">
        {icon}
      </div>
      <div>
        <div className="text-xs">Download for</div>
        <div className="font-bold">{platform}</div>
      </div>
    </motion.a>
  )
}
