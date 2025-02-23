import Image from "next/image"
import Link from "next/link"
import { Zap, MessageSquare, Briefcase, FileText, Mail, Twitter, Linkedin, Youtube, ChevronRight } from "lucide-react"

const navItems = [
  { href: "/", icon: Zap, text: "Home" },
  { href: "/about", icon: MessageSquare, text: "About" },
  { href: "/projects", icon: Briefcase, text: "Projects" },
  { href: "/blog", icon: FileText, text: "Articles" },
  { href: "/contact", icon: Mail, text: "Contact" },
]

const socialItems = [
  { href: "https://twitter.com/mannupaaji", icon: Twitter, text: "Twitter" },
  { href: "https://linkedin.com/in/manuarora28", icon: Linkedin, text: "LinkedIn" },
  { href: "https://youtube.com/maninthere", icon: Youtube, text: "YouTube" },
]

export default function Sidebar() {
  return (
    <aside className="px-6 z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between">
      <div className="flex-1 overflow-auto">
        <div className="flex space-x-2">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
            alt="Avatar"
            width={40}
            height={40}
            className="object-cover object-top rounded-full flex-shrink-0"
          />
          <div className="flex text-sm flex-col">
            <p className="font-bold text-primary">John Doe</p>
            <p className="font-light text-secondary">Developer</p>
          </div>
        </div>

        <nav className="flex flex-col space-y-1 my-10 relative z-[100]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.text}</span>
            </Link>
          ))}

          <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-sm md:text-sm lg:text-sm pt-10 px-2">
            Socials
          </p>

          {socialItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <Link
          href="/resume"
          className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10">
            <span>Read Resume</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
      </div>
    </aside>
  )
}

