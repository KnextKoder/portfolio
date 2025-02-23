import ProjectCard from "@/components/project-card"

export default function Home() {
  const projects = [
    {
      title: "Aceternity",
      description: "A design and development studio that focuses on building quality apps.",
      image:
        "https://sjc.microlink.io/4_u9aPgVEcAokzK3tIm48mrOl70Njp9Lb8TcNXveZ_rGbjzLh9Bp4WUEacK8EqPwFVf4-5FBJgg2Ywy09K39yw.jpeg",
      tags: ["NextJs", "TailwindCSS"],
    },
    // Add more projects as needed
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-16">
        <div className="text-5xl mb-4">👋</div>
        <h1 className="text-4xl font-bold mb-8">Hello there! I&apos;m John</h1>
        <div className="space-y-6 text-gray-600">
          <p>
            I&apos;m a full-stack developer that loves building products and web apps that can impact millions of lives
          </p>
          <p>
            I&apos;m a senior software engineer with 7 years of experience building scalable web apps that are
            performance optimized and good looking.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8">What I&apos;ve been working on</h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

