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
    slug: "synkhiv",
    title: "Synkhiv",
    description: "A decentralized network of devices to train and inference AI.",
    image: "/Synk.png",
    tags: ["Typescript", "Python", "Pytorch", "Expo", "Electron", "Docker", "Azure"],
  },  
  {
    slug: "adpadi",
    title: "Adpadi",
    description: "An advertising platform for whatsapp",
    image: "/adpadi.svg",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Pi Network- SDK"],
  },
  {
    slug: "maylng",
    title: "Maylng",
    description: "Email, authentication & custom tools for AI—now your agents can seamlessly integrate and use 3rd Party Software like a real person",
    image: "/maylng_mascot.png",
    tags: ["Typescript", "Python", "AWS", "Azure", "Golang", "Next JS"],
  },
  {
    slug: "groq-agents",
    title: "Groq Agents",
    description:
      "A typescript SDK and framework for building autonomous AI agents that can self coordinate and self develop tools to complete a task.",
    image: "/groqagents1.png",
    tags: ["Typescript", "Groq", "Vercel-AI SDK", "Zod"],
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
            ⚡
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
          My Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          Building innovative solutions through code. Here&apos;s what I&apos;ve been working on.
        </motion.p>
      </motion.div>

      {/* Modern grid layout */}
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
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
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
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </motion.main>
  )
}