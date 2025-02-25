import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

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
    //   { title: "arXiv", url: "https://arxiv.org/list/cs.LG/recent" },
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
    //   { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Smart_grid" },
      { title: "GitHub - MLX Sharding", url: "https://github.com/mzbac/mlx_sharding" },
    ],
  },
]

export default function Research() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-10">
        What I&apos;ve Been Researching...
      </h1>

      <div className="space-y-16">
        {researchTopics.map((topic, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src={topic.image || "/placeholder.svg"}
                alt={topic.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {link.title}
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

