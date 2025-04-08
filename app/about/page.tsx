import Image from "next/image"
import Footer from "@/components/footer"
import { Users, Palette, Gamepad, Target } from "lucide-react"

const images = [
  "/something.jpg",
  "/crypto-about.jpg",
  "/ethereum-about.jpg",
  "/blockchain-about.jpg",
]

export default function About() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      {/* Modern header section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl animate-bounce">🌐</span>
          <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-4">
          About My Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Web3 Community Lead, Designer, and Gamer on a mission to build vibrant decentralized ecosystems.
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
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Who I Am</h2>
              <p className="text-gray-700 leading-relaxed">
                I&apos;m a Web3 Community Lead, Designer, and Gamer with 5 years of experience in building, scaling, and managing decentralized communities. 
                My passion lies in fostering engagement, collaboration, and innovation within blockchain ecosystems while bringing creativity 
                and immersive experiences to digital spaces.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">My Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                I believe that strong communities, compelling design, and interactive experiences drive the success of Web3 projects. 
                My mission is to create inclusive, engaged, and self-sustaining ecosystems that empower users, developers, and stakeholders 
                while integrating creative design and gaming elements into blockchain projects.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Design Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                My design philosophy centers on creating intuitive, visually stunning interfaces that enhance user experience in the Web3 space.
                I specialize in bridging the gap between complex blockchain functionality and accessible design, making decentralized applications
                approachable for mainstream users while maintaining the cutting-edge aesthetics that define the Web3 movement.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Gamepad className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Gaming & Web3</h2>
              <p className="text-gray-700 leading-relaxed">
                As an avid gamer, I bring a unique perspective to Web3 projects by incorporating gamification elements that drive engagement and retention.
                I believe in the power of play to create memorable experiences and build stronger communities, whether through tokenized rewards,
                interactive onboarding, or fully-immersive metaverse environments.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                I&apos;m passionate about connecting with others who share my vision for a more engaging, creative, and community-driven Web3 ecosystem.
                Let&apos;s build the future of decentralized communities together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}