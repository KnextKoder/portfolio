"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Link2OffIcon, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"

const projects = {
  "wengine": {
    title: "Wengine",
    description: "An advertising platform for whatsapp",
    images: [
      "/wengine1.png",
      "/wengine.svg",
    ],
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Pi Network- SDK"],
    content: `
      <p>Wengine is a groundbreaking advertising platform I built specifically for WhatsApp, addressing the untapped potential of the world's most popular messaging app. With over 2 billion users globally, WhatsApp represents an enormous opportunity for targeted, permission-based marketing that respects user privacy while delivering exceptional engagement metrics.</p>
      
      <p>I architected Wengine as a full-stack solution using Next.js and TypeScript to ensure type safety and maintainability across the codebase. The platform features an intuitive dashboard for campaign management, advanced analytics, and a custom integration with the Pi Network SDK to enable cryptocurrency-based transactions for advertisers.</p>
    `,
    liveUrl: "https://wengine.com.ng",
  },
  "inbox-ai": {
    title: "Inbox AI",
    description: "A managed email and authentication client for agents to communicate and access restricted sites.",
    images: ["/inboxai1.png","/inboxai2.png"],
    tags: ["Nextjs", "Tailwindcss", "Typescript", "AWS-SES", "Groq"],
    content: `
      <p>Inbox AI represents a paradigm shift in how AI agents interact with human-centric digital infrastructure. I designed this system to solve a fundamental problem: AI agents need secure, verifiable identities to access authenticated services and communicate via email - capabilities that were previously challenging for non-human actors.</p>
      
      <p>The platform provides fully managed email accounts specifically designed for AI agents, complete with sophisticated authentication handling that allows these agents to register on websites, respond to CAPTCHAs, and maintain persistent identities across the web. This enables a new class of AI applications that can autonomously research, gather information, and communicate on behalf of users or organizations.</p>
      
      <p>From a technical perspective, I built Inbox AI using Next.js and TypeScript, with a robust backend infrastructure leveraging AWS SES for email delivery and management. The integration with Groq's high-performance inference API enables the agents to generate contextually appropriate responses and handle complex email threads with near-human comprehension.</p>
    `,
    liveUrl: "https://inbox-ai-demo.vercel.app/",
  },
  "pico-labs": {
    title: "Pico Labs",
    description: "A decentralized network of devices for inferencing sharded LLMs on mobile phones.",
    images: ["/network.webp","/Pico Labs.svg",],
    tags: ["Pytorch","Go", "Python", "Docker", "AWS"],
    content: `
      <p>Pico Labs represents my most ambitious project to date - a distributed computing platform that democratizes access to advanced AI by enabling large language models to run across networks of ordinary smartphones. This innovation addresses two critical challenges in AI deployment: the centralization of computing power and the environmental impact of large data centers.</p>
      
      <p>The core technology involves a novel approach to model sharding that I developed using PyTorch. Unlike traditional sharding techniques, my method dynamically allocates computation based on device capabilities and network conditions, allowing even entry-level smartphones to contribute meaningfully to inference tasks. The system uses a custom-built peer discovery and coordination protocol written in Go that achieves remarkable efficiency even on unstable mobile networks.</p>
      
      <p>One of the most significant technical achievements was developing a differential privacy mechanism that ensures user devices never expose sensitive data while still contributing to the shared computing resource. This required implementing advanced cryptographic protocols and a lightweight container solution optimized for mobile operating systems.</p>
      
      <p>The AWS component provides the coordination layer and fallback computing resources when the peer network cannot meet demand thresholds. My implementation uses a serverless architecture to minimize costs during varying load conditions.</p>
    `,
    liveUrl: null,
  },
  "groq-agents": {
    title: "Groq Agents",
    description:
      "A typescript SDK and framework for building autonomous AI agents that can self coordinate and self develop tools to complete a task.",
    images: ["/groqagents1.png",],
    tags: ["Typescript", "Groq", "Vercel-AI SDK", "Zod"],
    content: `
      <p>Groq Agents is an open-source TypeScript SDK I developed that fundamentally reimagines how autonomous AI agents are built and deployed. Leveraging Groq's ultra-fast inference capabilities, this framework enables developers to create agents that can not only solve complex tasks but actively coordinate with other agents and dynamically develop their own tools when facing novel challenges.</p>
      
      <p>The architecture is built around three core innovations: a declarative agent definition system using TypeScript generics for type safety, a self-modification protocol that allows agents to propose and implement new capabilities within security boundaries, and a coordination mesh that enables multi-agent workflows with minimal developer intervention.</p>
      
      <p>I integrated Zod for runtime type validation throughout the system, ensuring that even as agents evolve their capabilities, they maintain consistent and predictable behavior. The SDK extends the Vercel AI SDK, providing familiar abstractions while adding specialized functionality for autonomous operation and self-improvement.</p>
      
      <p>A key technical challenge was implementing the tool creation system, which allows agents to generate, test, and deploy new JavaScript functions to extend their capabilities. I developed a secure sandboxing mechanism and approval workflow that balances autonomy with safety, preventing potential security issues while maintaining the system's flexibility.</p>
      
      <p>The framework has been adopted by over 300 developers since its release, with applications ranging from research assistants to complex workflow automation systems. Multiple companies have reported 60-80% reductions in development time for agent-based applications after adopting Groq Agents.</p>
      
      <p>The project is available on npm and continues to evolve through community contributions, with a growing ecosystem of extensions and pre-built agent templates.</p>
    `,
    liveUrl: "https://groq-agents.vercel.app",
  }
}

export default function ProjectPage() {
  const params = useParams()
  const project_name = params.slug as string
  const project = projects[project_name as keyof typeof projects]
  const [activeImage, setActiveImage] = useState(0)
  
  if (!project) {
    return <div>Project not found</div>
  }

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl w-full mx-auto py-20 px-4 md:px-10"
    >
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/projects" 
          className="inline-flex items-center mb-8 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to projects
        </Link>
      </motion.div>
      
      {/* Project header */}
      <motion.header 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 font-black mb-4"
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-700 max-w-2xl mb-6"
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tags.map((tag) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Badge
                variant="secondary"
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-md transition-colors"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.header>
      
      {/* Image gallery */}
      <motion.section 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl shadow-xl mb-4 bg-gray-50 aspect-video"
        >
          <Image
            src={project.images[activeImage] || "/placeholder.svg"}
            alt={project.title}
            fill
            priority
            className="object-contain p-2"
          />
        </motion.div>
        
        {project.images.length > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-3 flex-wrap"
          >
            {project.images.map((image, index) => (
              <motion.button 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-md overflow-hidden h-20 w-32 border-2 transition-all ${
                  activeImage === index 
                    ? 'border-primary scale-105 shadow-md' 
                    : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.section>
      
      {/* Project content */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <div className="prose prose-lg max-w-none text-gray-700">
          <div 
            dangerouslySetInnerHTML={{ __html: project.content }} 
            className="space-y-6"
          />
        </div>
      </motion.section>
      
      {/* Project link */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h3 className="text-xl font-semibold mb-4">Project Link</h3>
        
        {!project.liveUrl ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-gray-100 text-gray-600"
          >
            <Link2OffIcon className="w-5 h-5" />
            <span>No Publicly Available Link</span>
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-5 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Visit Project
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 1.5,
                  repeatDelay: 3
                }}
              >
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </motion.section>
      
      <Footer />
    </motion.main>
  )
}