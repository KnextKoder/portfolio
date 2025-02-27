import Image from "next/image"
import Footer from "@/components/footer"
import { BookOpen, Code, Sparkles, Lightbulb } from "lucide-react"

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
          More About Me...
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Developer, researcher, entrepreneur, and design enthusiast on a journey to create digital wonders.
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
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">The Developer</h2>
              <p className="text-gray-700 leading-relaxed">
                Since the early days of my journey, I&apos;ve been captivated by the art of crafting exceptional digital
                experiences. As a developer, I thrive on turning lines of code into functional and elegant solutions. My
                goal is to not just create software, but to build digital marvels that seamlessly merge form and function.
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
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">The Writer & Researcher</h2>
              <p className="text-gray-700 leading-relaxed">
                But my journey doesn&apos;t stop at coding. With a heart full of words and a mind brimming with ideas, I&apos;ve
                ventured into the realm of writing and research. From tech articles that unravel complex concepts to creative tales that
                ignite the imagination, I weave words to inform, entertain, and inspire.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">The Design Enthusiast</h2>
              <p className="text-gray-700 leading-relaxed">
                What sets me apart is my unwavering appreciation for design. I believe that aesthetics and usability go hand
                in hand. My eye for awesome design ensures that every project I undertake not only works flawlessly under
                the hood but also looks stunning on the surface.
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
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">The Journey Ahead</h2>
              <p className="text-gray-700 leading-relaxed">
                Through this website, I aim to share my insights, experiences, and creations with you. Whether you&apos;re a
                fellow developer seeking solutions, a fellow writer in search of inspiration, or simply someone who
                appreciates the finer aspects of design, there&apos;s something here for you.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can
                explore the boundless possibilities of technology and storytelling, all while reveling in the sheer beauty
                of thoughtful design.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}