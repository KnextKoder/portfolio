import Image from "next/image"
import Footer from "@/components/footer"
import { BookOpen, Code, Lightbulb } from "lucide-react"

const images = [
  "/innovation.jpg",
  "/astronaut.jpg",
  "/intelligence.jpg",
  "/marvel.jpg",
]

export default function About() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      {/* Modern header section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl animate-bounce">💬</span>
          <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-4">
          A Glimpse Into My World
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          I&apos;m crafting tomorrow&apos;s digital landscape through AI-driven development, quantum computing research, and human-centered design. My passion lies at the intersection of emerging tech and creative problem-solving.
        </p>
      </div>

      {/* Gallery with modern polaroid style */}
      <div className="relative my-16 h-80 md:h-96">
        {images.map((src, index) => (
          <div
            key={src}
            className="absolute transition-all duration-500 ease-in-out hover:z-10 hover:scale-110"
            style={{
              top: `${index * 5}%`,
              left: `${(index * 20) + 10}%`,
              transform: `rotate(${index % 2 === 0 ? "3deg" : "-3deg"})`,
            }}
          >
            <div className="bg-white p-2 shadow-xl rounded-md">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="about"
                  width={180}
                  height={180}
                  className="object-cover w-40 h-40 md:w-48 md:h-48"
                />
              </div>
              <div className="h-5 flex items-center justify-center mt-2">
                <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* About content section with modern cards */}
      <div className="space-y-12 my-16">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Code Architect & Innovator</h2>
              <p className="text-gray-700 leading-relaxed">
                My journey began with Python and JavaScript, but today I&apos;m pioneering applications that leverage generative AI, edge computing, and decentralized systems. I&apos;ve dedicated the past two years to mastering WebAssembly and exploring the boundaries of AR/VR interfaces. Every project is an opportunity to push beyond conventional solutions toward experiences that feel magical yet intuitive.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Knowledge Explorer</h2>
              <p className="text-gray-700 leading-relaxed">
                I&apos;m fascinated by how technology is reshaping our collective future. My recent research delves into cognitive computing, ambient intelligence, and computational sustainability. In 2024, I published findings on biomimetic algorithms that could revolutionize energy management systems. When I&apos;m not coding, you&apos;ll find me synthesizing complex technological concepts into accessible narratives that bridge the gap between innovation and understanding.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Building Our Tomorrow</h2>
              <p className="text-gray-700 leading-relaxed">
                I believe we&apos;re entering the most transformative decade in human history. The convergence of AI, biotechnology, quantum computing, and sustainable energy will fundamentally reshape how we live, work, and connect. My mission is to ensure these technologies evolve with humanity at their center.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Through this digital garden, I&apos;m sharing not just my code and research, but my vision for what&apos;s possible. I&apos;m actively seeking collaborators for my latest project—a distributed computing platform that democratizes access to advanced AI capabilities while preserving privacy and autonomy.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                Let&apos;s connect and build something extraordinary. The next breakthrough isn&apos;t waiting to be discovered—it&apos;s waiting to be created, and I&apos;m convinced our best ideas emerge through unexpected collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}