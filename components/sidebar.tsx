"use client"
import Image from "next/image"
import Link from "next/link"
import { Zap, MessageSquare, Briefcase, FileText, Mail, Linkedin, ChevronRight, Github } from "lucide-react"
import { usePathname } from 'next/navigation'
import { useSidebar } from "./sidebar-provider"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const navItems = [
  { href: "/", icon: Zap, text: "Home" },
  { href: "/about", icon: MessageSquare, text: "About" },
  { href: "/projects", icon: Briefcase, text: "Projects" },
  { href: "/research", icon: FileText, text: "Research" },
  { href: "/contact", icon: Mail, text: "Contact" },
]

const socialItems = [
  { href: "https://github.com/KnextKoder", icon: Github, text: "Github" },
  { href: "https://twitter.com/marvel0_", icon: "x", text: "Twitter" }, // Changed to use "x" as identifier
  { href: "https://linkedin.com/in/marvelous-adesina-271b2128b", icon: Linkedin, text: "LinkedIn" },
]

export default function Sidebar() {
  const { isOpen, close } = useSidebar()
  const pathname = usePathname();
  const currentPath = pathname;
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) && 
        isOpen
      ) {
        close();
      }
    }

    // Add click listener to entire document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, close]);

  // Handle navigation link clicks - close sidebar
  const handleNavClick = () => {
    if (isOpen && window.innerWidth < 1024) { // Only close on mobile/tablet
      close();
    }
  };

  return (
    <>
      {/* Overlay behind sidebar on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <aside
        ref={sidebarRef}
        className={`px-6 z-[100] py-10 bg-gradient-to-b from-white to-neutral-50 max-w-[16rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between transition-all duration-300 border-r border-neutral-100 ${
          isOpen ? "translate-x-0 shadow-2xl lg:shadow-none" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex-1 overflow-auto">
          {/* Profile section with subtle animation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="object-cover object-top rounded-full ring-2 ring-primary/10"
                loading="eager"
                priority
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></span>
            </div>
            <div className="flex flex-col">
              <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Marvel</p>
              <p className="text-xs text-gray-500">Full-stack Developer</p>
            </div>
          </motion.div>

          {/* Main navigation */}
          <nav className="flex flex-col space-y-1 my-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className={`group flex items-center space-x-3 py-3 px-3 rounded-lg transition-all duration-200 ${
                    currentPath === item.href 
                      ? "bg-primary text-white font-medium shadow-md" 
                      : "hover:bg-neutral-100 text-gray-600 hover:text-primary"
                  }`}
                >
                  <item.icon
                    className={`h-4 w-4 ${
                      currentPath === item.href 
                        ? "text-white" 
                        : "text-gray-500 group-hover:text-primary"
                    } transition-colors`}
                  />
                  <span className="text-sm">{item.text}</span>
                  {currentPath === item.href && (
                    <motion.span 
                      layoutId="sidebar-indicator" 
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Social links section */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3">Connect</h3>
            <div className="flex flex-wrap gap-2 px-2">
              {socialItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-neutral-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200 shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.text}
                  >
                    {/* Render X.svg for Twitter, otherwise use the icon component */}
                    {item.icon === "x" ? (
                      <div className="flex items-center justify-center h-4 w-4">
                        <Image 
                          src="/X.svg" 
                          alt="X (Twitter)" 
                          width={14} 
                          height={14}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <item.icon className="h-4 w-4" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="px-3 pt-4">
              <p className="text-xs text-gray-500">
                Based in Osun, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Resume button with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6"
        >
          <Link
            href="/resume"
            onClick={handleNavClick}
            className="group flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
          >
            <span className="text-sm font-medium">View Resume</span>
            <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ChevronRight className="w-3 h-3" />
            </span>
          </Link>
        </motion.div>
      </aside>
    </>
  )
}