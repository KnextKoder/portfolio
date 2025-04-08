"use client"
import { Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      {/* Modern header section with animations */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-4"
        >
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl"
          >
            ✉️
          </motion.span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"
          ></motion.div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-4"
        >
          Get In Touch
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl"
        >
          Have a question or want to work together? I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-2"
        >
          <ContactForm />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="col-span-1"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              Contact Details
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p className="flex flex-col">
                <span className="text-sm text-gray-500">My Email</span>
                <a href="mailto:jerrydara8@gmail.com" className="hover:text-primary transition-colors">
                  jerrydara8@gmail.com
                </a>
              </p>
              
              <p className="flex flex-col">
                <span className="text-sm text-gray-500">Location</span>
                <span>Osun, Nigeria</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}