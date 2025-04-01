"use client"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    slug: "pickvibes",
    title: "Pickvibes Community Growth",
    description: "Led growth strategies for the Pickvibes community, implementing engagement tactics and content strategies.",
    image: "/community-growth.jpg",
    tags: ["Community Growth", "Telegram", "Content Strategy"],
  },  
  {
    slug: "meme-token",
    title: "Meme Token Investor Community",
    description: "Managed investor relations and community engagement for a popular meme token project.",
    image: "/investor-community.jpg",
    tags: ["Investor Relations", "Token Community", "Discord Management"],
  },
  {
    slug: "osea-pirates",
    title: "O'sea Pirate Community",
    description: "Effectively managed the O'sea pirate community, creating engagement opportunities and governance structure.",
    image: "/osea-community.jpg",
    tags: ["Community Management", "NFT Community", "Governance"],
  },
  {
    slug: "solana-events",
    title: "Solana Web3 Events",
    description: "Organized and facilitated Web3 onboarding events in collaboration with Solana all-stars.",
    image: "/web3-events.jpg",
    tags: ["Event Planning", "Solana", "Web3 Education"],
  },
]

const techStack = [
  { name: "Discord", logo: "/discord.svg", width: 120 },
  { name: "Telegram", logo: "/telegram.svg", width: 120 },
  { name: "Twitter", logo: "/twitter.svg", width: 120 },
  { name: "Notion", logo: "/notion.svg", width: 120 },
  { name: "Snapshot", logo: "/snapshot.svg", width: 120 },
  { name: "Figma", logo: "/figma.webp", width: 96 },
  { name: "NFT Tools", logo: "/nft.svg", width: 120 },
  { name: "DAO Tools", logo: "/dao.svg", width: 120 },
  { name: "OpenSea", logo: "/opensea.svg", width: 120 },
  { name: "Arweave", logo: "/arweave.svg", width: 120 },
  { name: "Ethereum", logo: "/ethereum.svg", width: 120 },
  { name: "Solana", logo: "/solana.svg", width: 120 },
]

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <section className="max-w-5xl mx-auto py-20 md:py-32 px-4 md:px-10">
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mb-6 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium"
          >
            <span className="animate-wave mr-2">👋</span> 
            <span>Welcome to my portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Hello, I&apos;m Newton
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 text-gray-600 md:text-lg max-w-2xl mb-8"
          >
            <p>
              I&apos;m a Web3 Community Lead passionate about <span className="bg-neutral-200 px-1.5 py-0.5 rounded-md font-medium">building digital communities</span> and{" "}
              <span className="bg-neutral-200 px-1.5 py-0.5 rounded-md font-medium">exploring blockchain innovations</span> that shape the future of web3.
            </p>
            <p>
              With <span className="bg-neutral-200 px-1.5 py-0.5 rounded-md font-medium">5 years of experience</span>{" "}
              I&apos;ve helped scale Web3 projects, foster engaged user bases, and drive adoption in the decentralized space.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link 
                href="/resume" 
                className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                View Resume
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link 
                href="/projects" 
                className="px-5 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 font-medium transition-colors"
              >
                Explore Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured projects section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Community Projects
              </span>
            </h2>
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Link 
                href="/projects" 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View All Projects
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-0.5 rounded-md transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-0.5 rounded-md transition-colors"
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6">
              {projects.slice(2, 4).map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.15) }}
                  whileHover={{ y: -3 }}
                >
                    <div className="relative h-40 md:w-48 md:h-40 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-0.5 rounded-md transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-0.5 rounded-md transition-colors"
                          >
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms section */}
      <section className="py-20 max-w-5xl mx-auto px-4 md:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-10"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Platforms & Tools
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 aspect-square"
            >
              <div className="relative h-12 w-full flex items-center justify-center">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={tech.width / 2}
                  height={48}
                  className="object-contain max-h-12"
                />
              </div>
              <span className="mt-3 text-sm text-gray-600 font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}