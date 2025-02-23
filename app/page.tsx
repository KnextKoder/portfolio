import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { PanelRightOpen } from "lucide-react"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    slug: "aceternity",
    title: "Aceternity",
    description: "A design and development studio that focuses on building quality apps.",
    image: "/images/sidefolio-aceternity-2.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    slug: "algochurn",
    title: "Algochurn",
    description: "Practice for technical interviews with hands on coding challenges.",
    image: "/images/sidefolio-algochurn.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    slug: "moonbeam",
    title: "Moonbeam",
    description: "Never write from scratch again with Moonbeam, your AI first writing tool",
    image: "/images/sidefolio-moonbeam.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    slug: "tailwindmasterkit",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    image: "/images/sidefolio-tailwindmasterkit.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
]

const techStack = [
  { name: "Next.js", logo: "/images/logos/next.png", width: 56 },
  { name: "AWS", logo: "/images/logos/aws.webp", width: 40 },
  { name: "Figma", logo: "/images/logos/figma.png", width: 32 },
  { name: "Framer Motion", logo: "/images/logos/framer.webp", width: 40 },
  { name: "Node", logo: "/images/logos/node.png", width: 48 },
  { name: "Tailwind", logo: "/images/logos/tailwind.png", width: 96 },
  { name: "Vercel", logo: "/images/logos/vercel.png", width: 96 },
]

export default function Home() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">👋</span>
      <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black">
        Hello there! I&apos;m John
      </h1>
      <p className="text-sm lg:text-base font-normal text-secondary max-w-xl mt-4">
        I&apos;m a full-stack developer that loves <span className="bg-neutral-100 px-1 py-0.5">building products</span> and
        web apps that can impact millions of lives
      </p>
      <p className="text-sm lg:text-base font-normal text-secondary max-w-xl mt-4">
        I&apos;m a senior software engineer with <span className="bg-neutral-100 px-1 py-0.5">7 years of experience</span>{" "}
        building scalable web apps that are performance optimized and good looking.
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
                  <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
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
            className={`object-contain mr-4 mb-4 h-10 w-${tech.width / 4}`}
          />
        ))}
      </div>

      <Footer />

      <button className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50">
        <PanelRightOpen className="h-4 w-4 text-secondary" />
      </button>
    </main>
  )
}

