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

export default function Projects() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">⚡</span>
      <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-10">
        What I&apos;ve been working on
      </h1>

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

      <Footer />
    </main>
  )
}

