"use client"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Users, Shield, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

interface CommunityInitiative {
  title: string
  description: string
  image: string
  links: Array<{
    title: string
    url: string
  }>
}

const communityInitiatives: CommunityInitiative[] = [
  {
    title: "Community Growth Programs",
    description: "Strategic initiatives that helped scale Web3 communities from hundreds to thousands of active members through engagement tactics and incentive structures.",
    image: "/community-growth.jpg",
    links: [
      { title: "Telegram Group", url: "https://t.me/pickvibes" },
      { title: "Discord Server", url: "https://discord.gg/web3community" },
      { title: "Twitter", url: "https://twitter.com/web3community" },
    ],
  },
  {
    title: "Web3 Onboarding & Education",
    description: "Educational frameworks designed to help newcomers understand blockchain technology, navigate wallets, and participate in decentralized ecosystems.",
    image: "/web3-education.jpg",
    links: [
      { title: "Onboarding Guide", url: "https://web3community.guide" },
      { title: "Workshop Series", url: "https://youtube.com/web3workshops" },
    ],
  },
  {
    title: "Governance & DAO Structures",
    description: "Establishing effective community governance models that empower members while maintaining alignment with project goals and vision.",
    image: "/dao-governance.jpg",
    links: [
      { title: "Governance Framework", url: "https://notion.so/governance" },
      { title: "Case Study", url: "https://medium.com/web3-governance" },
    ],
  },
]

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
          className="text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 font-black"
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
        {communityInitiatives.map((initiative, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.4 }}
            whileHover={{ y: -5 }}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10 lg:hidden"></div>
                <Image
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 lg:h-full group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay icon for visual interest */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="absolute top-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md z-20 lg:hidden"
                >
                  {index === 0 ? (
                    <Users className="w-5 h-5 text-primary" />
                  ) : index === 1 ? (
                    <MessageSquare className="w-5 h-5 text-primary" />
                  ) : (
                    <Shield className="w-5 h-5 text-primary" />
                  )}
                </motion.div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                  >
                    {initiative.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="text-gray-600 mb-6 lg:text-lg"
                  >
                    {initiative.description}
                  </motion.p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {initiative.links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {link.title}
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ 
                            repeat: Infinity, 
                            repeatType: "loop", 
                            duration: 1.5,
                            repeatDelay: 2
                          }}
                        >
                          <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="h-1 w-full bg-gradient-to-r from-primary to-secondary origin-left"
            ></motion.div>
          </motion.div>
        ))}

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