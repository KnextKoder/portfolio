"use client"
import Image from "next/image"
// import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { ArrowUpRight, Users, MessageCircle, Calendar, Award } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  achievements: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    slug: "pickvibes",
    title: "Pickvibes Community Growth",
    description: "Led growth strategies for the Pickvibes community, implementing engagement tactics and content strategies.",
    image: "/pickvibes.jpg",
    achievements: ["Scaled Telegram from 100 to 1000 members in 2 months"],
    tags: ["Community Growth", "Telegram", "Content Strategy"],
  },  
  {
    slug: "meme-token",
    title: "Meme Token Investor Community",
    description: "Managed investor relations and community engagement for a popular meme token project.",
    image: "/memetoken.jpg",
    achievements: ["Successfully onboarded new investors through community initiatives"],
    tags: ["Investor Relations", "Token Community", "Discord Management"],
  },
  {
    slug: "osea-pirates",
    title: "O'sea Pirate Community",
    description: "Effectively managed the O'sea pirate community, creating engagement opportunities and governance structure.",
    image: "/osea.jpg",
    achievements: ["Established community guidelines", "Created engagement programs"],
    tags: ["Community Management", "NFT Community", "Governance"],
  },
  {
    slug: "solana-events",
    title: "Solana Web3 Events",
    description: "Organized and facilitated Web3 onboarding events in collaboration with Solana all-stars.",
    image: "/solanaevents.jpg",
    achievements: ["Onboarded 500+ new Web3 enthusiasts through organized events"],
    tags: ["Event Planning", "Solana", "Web3 Education"],
  },
]

const strategies = [
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "Community Events",
    description: "Hosting AMAs, Twitter Spaces, and Discord discussions to foster engagement and knowledge sharing.",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Ambassador Programs",
    description: "Creating initiatives that empower community members to become advocates for projects and protocols.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Content & Education",
    description: "Developing guides, newsletters, and video content to onboard and educate users about Web3 technologies.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Incentives",
    description: "Implementing bounties and reward programs to keep members engaged and motivated within the ecosystem.",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
            animate={{ 
              scale: [0.9, 1.1, 0.9],
              opacity: [0.7, 1, 0.7]
            }} 
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              repeatType: "loop" 
            }}
            className="text-4xl"
          >
            🚀
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
          className="text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black"
        >
          Projects & Contributions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          Building vibrant Web3 communities and driving engagement through innovative strategies and collaborative initiatives.
        </motion.p>
      </motion.div>

      {/* Projects grid layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
          
              {/* Project Image with overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute top-4 right-4 z-20"
                  whileHover={{ rotate: 45 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md transform transition-transform duration-300 group-hover:rotate-12">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col justify-between flex-grow p-6">
                <div>
                  <h4 className="font-bold text-2xl mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="mt-3 space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <p className="text-sm text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {project.tags.map((tag, i) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.05 + index * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-md transition-colors"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Bottom accent line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary origin-left"
              ></motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Engagement Strategies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Engagement Strategies</h2>
        <p className="text-gray-700 mb-8">
          I utilize data-driven and organic growth strategies to enhance community participation and brand visibility. Some of my key approaches include:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 * index }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {strategy.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </motion.main>
  )
}