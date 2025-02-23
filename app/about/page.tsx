import Image from "next/image"
import Footer from "@/components/footer"

const images = [
  "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
]

export default function About() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">💬</span>
      <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black">
        About Me
      </h1>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {images.map((src, index) => (
            <div
              key={src}
              style={{
                opacity: 1,
                transform: `translateY(0px) rotate(${index % 2 === 0 ? "3deg" : "-3deg"}) translateZ(0px)`,
              }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt="about"
                width={200}
                height={400}
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl">
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            Hey there, I&apos;m John Doe - a passionate developer, avid writer, and a connoisseur of awesome design. Welcome
            to my corner of the digital world!
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            Since the early days of my journey, I&apos;ve been captivated by the art of crafting exceptional digital
            experiences. As a developer, I thrive on turning lines of code into functional and elegant solutions. My
            goal is to not just create software, but to build digital marvels that seamlessly merge form and function.
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            But my journey doesn&apos;t stop at coding. With a heart full of words and a mind brimming with ideas, I&apos;ve
            ventured into the realm of writing. From tech articles that unravel complex concepts to creative tales that
            ignite the imagination, I weave words to inform, entertain, and inspire.
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            What sets me apart is my unwavering appreciation for design. I believe that aesthetics and usability go hand
            in hand. My eye for awesome design ensures that every project I undertake not only works flawlessly under
            the hood but also looks stunning on the surface.
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            Through this website, I aim to share my insights, experiences, and creations with you. Whether you&apos;re a
            fellow developer seeking solutions, a fellow writer in search of inspiration, or simply someone who
            appreciates the finer aspects of design, there&apos;s something here for you.
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can
            explore the boundless possibilities of technology and storytelling, all while reveling in the sheer beauty
            of thoughtful design.
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

