"use client"
import { Briefcase, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface Role {
  period: string
  title: string
  focus?: string
  achievements: string[]
  isPromotion?: boolean
}

interface Company {
  name: string
  color: string
  roles: Role[]
  link?: string
}

const companies: Company[] = [
  {
    name: "Pickvibes",
    color: "#8A2BE2", // Purple color for community focus
    roles: [
      {
        period: "Jan 2024 - Present",
        title: "Head of Community",
        focus: "Leading community growth and engagement strategies for Web3 projects",
        achievements: [
          "Scaled Telegram community from 100 to 1000 members in 2 months",
          "Implemented engagement tactics that increased daily active users by 40%",
          "Developed content strategy resulting in 300% increase in social media engagement",
          "Established ambassador program with 25+ active community advocates"
        ],
      },
    ],
    link: "https://pickvibes.com/",
  },
  {
    name: "Meme Token Collective",
    color: "#FF6B6B", // Pinkish color for meme token theme
    roles: [
      {
        period: "May 2023 - Dec 2023",
        title: "Community Manager",
        focus: "Managing investor relations and community engagement for token projects",
        achievements: [
          "Successfully onboarded 500+ new investors through community initiatives",
          "Organized weekly AMAs with project founders increasing investor confidence",
          "Created educational content explaining tokenomics to non-technical audience",
          "Moderated Discord server with 5,000+ members ensuring quality discussions"
        ],
      },
    ],
    link: "https://memetoken.collective/",
  },
  {
    name: "O'sea Pirates NFT",
    color: "#4EA8DE", // Blue color for NFT/ocean theme
    roles: [
      {
        period: "Aug 2022 - Apr 2023",
        title: "Community Lead",
        focus: "Building and nurturing NFT community through engagement and governance",
        achievements: [
          "Established community guidelines and moderation protocols",
          "Created engagement programs that increased holder retention by 35%",
          "Implemented governance structure for community-driven project decisions",
          "Organized virtual events averaging 200+ attendees per session"
        ],
      },
    ],
    link: "https://osea-pirates.io/",
  },
  {
    name: "Solana Foundation",
    color: "#14F195", // Solana green
    roles: [
      {
        period: "Mar 2021 - Jul 2022",
        title: "Web3 Community Specialist",
        focus: "Organizing educational events and onboarding programs for blockchain adoption",
        achievements: [
          "Onboarded 500+ new Web3 enthusiasts through organized events and workshops",
          "Collaborated with Solana all-stars to create educational content",
          "Facilitated 20+ in-person and virtual meetups across multiple regions",
          "Developed beginner-friendly guides for wallet setup and DApp interaction"
        ],
      },
      {
        period: "Jan 2020 - Feb 2021",
        title: "Community Moderator",
        focus: "Managing online communities and providing front-line support",
        isPromotion: true,
        achievements: [
          "Moderated Discord and Telegram channels with 10,000+ combined members",
          "Resolved user queries and technical issues, maintaining 95% satisfaction rate",
          "Contributed to community growth strategies resulting in 200% member increase",
          "Created weekly community highlights newsletter with 30% open rate"
        ],
      },
    ],
    link: "https://solana.com/",
  },
]

export default function Resume() {
  return (
    <main className="max-w-5xl w-full mx-auto py-24 px-4 md:px-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full mb-6 text-white"
        >
          <Briefcase className="w-10 h-10" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl font-bold mb-4"
        >
          Work History
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 max-w-2xl text-lg"
        >
          I&apos;m a Web3 Community Lead with 5 years of experience building engaged communities and driving adoption in the decentralized space
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Timeline line with animation */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute left-0 md:left-1/2 w-px bg-gray-200 transform -translate-x-1/2"
        ></motion.div>

        <div className="space-y-12">
          {companies.map((company, companyIndex) => (
            <motion.div 
              key={company.name} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + (companyIndex * 0.1) }}
              className="relative"
            >
              {/* Company timeline dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (companyIndex * 0.1) }}
                className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md transform -translate-x-1/2" 
                style={{ backgroundColor: company.color }}
              ></motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Company name section */}
                <motion.div 
                  initial={{ opacity: 0, x: companyIndex % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (companyIndex * 0.1) }}
                  className={`${companyIndex % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'} mb-6 md:mb-0`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: company.color }}>
                      {company.name}
                    </h2>
                    
                    {company.link && (
                      <Link 
                        href={company.link} 
                        target="_blank"
                        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors mb-2"
                      >
                        Visit website <ExternalLink className="ml-1 w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </motion.div>

                {/* Roles section */}
                <motion.div 
                  initial={{ opacity: 0, x: companyIndex % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (companyIndex * 0.1) }}
                  className={`${companyIndex % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}
                >
                  <div className="space-y-6">
                    {company.roles.map((role, roleIndex) => (
                      <motion.div 
                        key={roleIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + (companyIndex * 0.1) + (roleIndex * 0.1) }}
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border ${
                          roleIndex > 0 ? 'border-l-4' : 'border'
                        }`}
                        style={{ borderLeftColor: roleIndex > 0 ? company.color : '' }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{role.title}</h3>
                          <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                            {role.period}
                          </span>
                        </div>
                        
                        {role.isPromotion && (
                          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-green-50 to-green-100 text-green-700 text-xs font-medium rounded-full">
                            Promotion
                          </div>
                        )}
                        
                        {role.focus && <p className="text-gray-600 mb-4">{role.focus}</p>}
                        
                        <ul className="space-y-3">
                          {role.achievements.map((achievement, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.6 + (companyIndex * 0.1) + (roleIndex * 0.1) + (index * 0.05) }}
                              className="flex items-start group"
                            >
                              <span 
                                className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"
                                style={{ backgroundColor: company.color + '80' }}
                              />
                              <span className="text-gray-600">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}