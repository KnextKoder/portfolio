import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  slug?: string
}

export default function ProjectCard({ title, description, image, tags, slug }: ProjectCardProps) {
  const content = (
    <div className="group space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} preview`}
            width={600}
            height={400}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} preview 2`}
            width={600}
            height={400}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )

  if (slug) {
    return (
      <Link href={`/projects/${slug}`} className="block">
        {content}
      </Link>
    )
  }

  return content
}

