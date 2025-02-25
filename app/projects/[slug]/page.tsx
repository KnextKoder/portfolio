"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Link2OffIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"

const projects = {
  "wengine": {
    title: "Wengine",
    description: "An advertising platform for whatsapp",
    images: [
      "/wengine1.png",
      "https://sjc.microlink.io/90_Ke0qInZCegg93D0Yz4kC99Tmebt2kxxHKCauc0jBh0swSnJhlzQeSsG0Gd6X25OVKvn2xS378OiWxur6frw.jpeg",
    ],
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Pi Network- SDK"],
    content: `
      <p>Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et.</p>
      
      <p>Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.</p>
    `,
    liveUrl: "https://wengine.com.ng",
  },
  "inbox-ai": {
    title: "Inbox AI",
    description: "A managed email and authentication client for agents to communicate and access restricted sites.",
    images: ["/inboxai1.png",],
    tags: ["Nextjs", "Tailwindcss", "Typescript", "AWS-SES", "Groq"],
    content: `
      <p>Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et.</p>
      
      <p>Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.</p>
    `,
    liveUrl: "https://inbox-ai-demo.vercel.app/",
  },
  "obin-labs": {
    title: "Obin Labs",
    description: "A decentralized edge network for inferencing sharded LLMs.",
    images: ["/network.webp",],
    tags: ["Go", "Python", "Docker", "AWS"],
    content: `
      <p>Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et.</p>
      
      <p>Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.</p>
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
      <p>Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et. https://www.npmjs.com/package/groq-agents</p>
      
      <p>Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.</p>
    `,
    liveUrl: "https://groq-agents.vercel.app",
  }
}

export default function ProjectPage() {
  const params = useParams()
  const project_name = params.slug as string
  const project = projects[project_name as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <div className="py-10">
        <div className="relative" style={{ opacity: 1 }}>
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt="thumbnail"
            width={1000}
            height={1000}
            className="rounded-md object-contain"
          />
          <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
        </div>

        <div className="flex flex-row justify-center my-8 flex-wrap">
          {project.images.map((image, index) => (
            <button key={index}>
              <Image
                src={image || "/placeholder.svg"}
                alt="product thumbnail"
                width={1000}
                height={1000}
                className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
              />
            </button>
          ))}
        </div>

        <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
          <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 font-black mb-2 pb-1">
            {project.title}
          </h1>
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

        <div>
          <p className="text-sm lg:text-base font-normal text-primary max-w-xl mt-4">{project.description}</p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mb-5">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
        
        {!project.liveUrl ? (
          <div
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
        >
          No Publicly Available Link
          <Link2OffIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
        ) : (
        <Link
          href={project.liveUrl}
          target="_blank"
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800/40 text-gray-800 shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
        >
          Project Url
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        )
        }
      </div>
      <Footer />
    </main>
  )
}

