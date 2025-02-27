"use client"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

interface ResearchTopic {
  title: string
  description: string
  image: string
  links: Array<{
    title: string
    url: string
  }>
}

const researchTopics: ResearchTopic[] = [
  {
    title: "Inferencing Distributed Models",
    description: "Exploring decentralized networks for inferencing large language models.",
    image: "/petals.png",
    links: [
      { title: "arXiv", url: "https://arxiv.org/pdf/2209.01188" },
      { title: "Petals", url: "https://petals.dev/" },
      { title: "GitHub - Petals", url: "https://github.com/bigscience-workshop/petals?tab=readme-ov-file" },
    ],
  },
  {
    title: "Directed Acyclic Graphs as a Consensus Mechanism",
    description: "Investigating the use of DAGs in blockchain technology and their potential for scalability.",
    image: "/dags.png",
    links: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Directed_acyclic_graph" },
      { title: "GitHub - MedicalTorch", url: "https://github.com/perone/medicaltorch" },
    ],
  },
  {
    title: "Sharding Large Language Models",
    description: "Researching techniques for sharding and distributing large language models.",
    image: "/edgeshard.png",
    links: [
      { title: "arXiv", url: "https://arxiv.org/pdf/2405.14371" },
      { title: "GitHub - MLX Sharding", url: "https://github.com/mzbac/mlx_sharding" },
    ],
  },
]

export default function Research() {
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
            🔬
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
          My Research Interests
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          Exploring some of the cutting-edge technologies I&apos;m actively studying and researching.
        </motion.p>
      </motion.div>

      <div className="space-y-16">
        {researchTopics.map((topic, index) => (
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
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
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
                  <BookOpen className="w-5 h-5 text-primary" />
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
                    {topic.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="text-gray-600 mb-6 lg:text-lg"
                  >
                    {topic.description}
                  </motion.p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {topic.links.map((link, linkIndex) => (
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
      </div>
    </motion.main>
  )
}