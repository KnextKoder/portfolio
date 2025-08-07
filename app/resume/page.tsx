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
    name: "Synkhiv",
    color: "#000000",
    roles: [
      {
        period: "Feb 2025 - Present",
        title: "Co-Founder",
        focus: "Building a decentralized datacenter powered by humans",
        achievements: [
          "Pioneered a novel model sharding technique that allows LLMs to run across networks of smartphones",
          "Developed a differential privacy mechanism ensuring user data security while contributing to network computation",
          "Implemented a peer discovery protocol in Go that maintains efficiency on unstable mobile networks",
          "Scaled the beta to 200+ devices with performance matching dedicated GPU servers at 5% of operating costs"
        ],
      },
    ],
  },
  {
    name: "Rubix Class",
    color: "#008296",
    roles: [
      {
        period: "May 2024 - Dec 2024",
        title: "Co-Founder",
        focus: "Building the future of AI x Education-Technology",
        achievements: [
          "Developed an AI-powered adaptive learning system that personalizes curriculum based on student progress",
          "Built a real-time collaboration platform enabling synchronous learning between students and AI tutors",
          "Implemented an assessment engine that provides detailed feedback on student work using multimodal analysis",
          "Designed and deployed a knowledge graph system to map educational concepts and optimize learning paths"
        ],
      },
    ],
    link: "https://rubixclass.com/",
  },
  {
    name: "AI-Plans",
    color: "#008296",
    roles: [
      {
        period: "Aug 2023 - Apr 2024",
        title: "Full Stack Developer",
        focus: "Measuring the effectiveness of State-Of-The-Art AI Alignment research",
        achievements: [
          "Created a visualization framework for tracking alignment methodologies across major research papers",
          "Implemented a benchmarking system comparing alignment techniques against standardized safety metrics",
          "Developed tools to capture and quantify alignment regressions in evolving AI systems",
          "Built an interactive dashboard used by 30+ alignment researchers to coordinate testing methodologies"
        ],
      },
    ],
    link: "https://ai-plans.com/",
  },
  {
    name: "Terra Hq",
    color: "#34A853",
    roles: [
      {
        period: "Dec 2022 - Jul 2023",
        title: "Software Engineer",
        focus: "Building the future of search",
        achievements: [
          "Led development of a semantic search implementation improving query relevance by 37%",
          "Built a context-aware recommendation system that increased user engagement with search results",
          "Developed a multi-modal search capability handling text, image, and voice inputs simultaneously",
          "Implemented query optimization algorithms that reduced response latency by 45%"
        ],
      },
      {
        period: "Jan 2021 - Nov 2022",
        title: "Junior Frontend Developer",
        focus: "Building the future of social networking",
        isPromotion: true,
        achievements: [
          "Developed a real-time activity feed using WebSockets that improved content delivery speed by 60%",
          "Created a responsive UI component library that streamlined mobile and desktop interface consistency",
          "Implemented advanced client-side caching strategies that reduced API calls by over 40%",
          "Built the frontend for a content moderation system that helped scale user-generated content workflows"
        ],
      },
    ],
    link: "https://lms.terrahq.co/",
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
          I&apos;m a full-stack developer that loves building products and web apps that can impact millions of lives
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
                        
                        {roleIndex > 0 && (
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