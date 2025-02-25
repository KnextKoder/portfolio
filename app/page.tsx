"use client"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    slug: "obin-labs",
    title: "Obin Labs",
    description: "A decentralized edge network for inferencing sharded LLMs.",
    image: "/network.webp",
    tags: ["Go", "Python", "Docker", "AWS"],
  },  
  {
    slug: "wengine",
    title: "Wengine",
    description: "An advertising platform for whatsapp",
    image: "/wengine1.png",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Pi Network- SDK"],
  },
  {
    slug: "inbox-ai",
    title: "Inbox AI",
    description: "A managed email and authentication client for agents to communicate and access restricted sites.",
    image: "/inboxai1.png",
    tags: ["Nextjs", "Tailwindcss", "Typescript", "AWS-SES", "Groq"],
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

const techStack = [
  { name: "Typescript", logo: "/ts.svg", width: 96 },
  { name: "Python", logo: "/python.svg", width: 96 },
  { name: "Go", logo: "/golang.png", width: 96 },
  { name: "Framer Motion", logo: "/framer.webp", width: 40 },
  { name: "AWS", logo: "/aws.webp", width: 40 },
  { name: "Figma", logo: "/figma.webp", width: 56 },
  { name: "Node", logo: "/node.webp", width: 56 },
  { name: "Tailwind", logo: "/tailwind.webp", width: 96 },
  { name: "Groq", logo: "/groq.svg", width: 96 },
  { name: "Docker", logo: "/docker.svg", width: 96 },
  { name: "Next.js", logo: "/next.svg", width: 56 },
  { name: "Vercel", logo: "/vercel.webp", width: 56 },
  { name: "Upsatsh", logo: "/upstash.svg", width: 56 },
]

export default function Home() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">👋</span>
      <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/30 font-black">
        Hello there! I&apos;m Marvel
      </h1>
      <p className="text-sm lg:text-base font-normal text-primary max-w-xl mt-4">
        I&apos;m a full-stack developer that loves <span className="bg-neutral-200 px-1 py-0.5">building startups</span> and
        <span className="bg-neutral-200 px-1 py-0.5">doing research</span> on cutting-edge technology that can impact millions of lives
      </p>
      <p className="text-sm lg:text-base font-normal text-primary max-w-xl mt-4">
        I&apos;m a software engineer with <span className="bg-neutral-200 px-1 py-0.5">4 years of experience</span>{" "}
        building scalable web apps and going from 0-1 on many personal projects.
      </p>

      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        What I&apos;ve been working on
      </h2>
      <div>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt="thumbnail"
                width={200}
                height={200}
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg">
                    {project.title}
                  </h4>
                  <p className="font-normal text-primary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Tech Stack
      </h2>
      <div className="flex flex-wrap">
        {techStack.map((tech) => (
          <Image
            key={tech.name}
            src={tech.logo || "/placeholder.svg"}
            alt={tech.name}
            width={200}
            height={200}
            className={`object-contain m-2 h-10 w-${tech.width / 4}`}
          />
        ))}
      </div>
      <Footer />
    </main>
  )
}

