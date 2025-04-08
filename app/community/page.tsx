"use client"
import { motion } from "framer-motion"

export default function Community() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl w-full mx-auto py-24 px-4 md:px-10"
    >
      {/* Modern header section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.3 
            }}
            className="text-4xl"
          >
            🧑‍🤝‍🧑
          </motion.span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"
          ></motion.div>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 font-black"
        >
          Community Building
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          Creating vibrant, engaged Web3 communities through strategic growth, education, and governance models.
        </motion.p>
      </motion.div>

      <div className="space-y-16">
        {/* Community Metrics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800">Community Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-1">Total Members</p>
              <p className="text-3xl font-bold text-primary">10,000+</p>
              <p className="text-sm text-gray-600 mt-2">Across multiple Web3 communities</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-1">Events Hosted</p>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-gray-600 mt-2">AMAs, Twitter Spaces, workshops</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-1">New Users Onboarded</p>
              <p className="text-3xl font-bold text-primary">5,000+</p>
              <p className="text-sm text-gray-600 mt-2">First-time Web3 participants</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-1">Ambassador Programs</p>
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-gray-600 mt-2">Established and managed</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}