import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { Toaster } from "sonner"
import { SidebarProvider } from "@/components/sidebar-provider"
import { SidebarToggle } from "@/components/sidebar-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SidebarProvider>
        <body className={inter.className}>
          <div className="flex antialiased h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
              {children}
            </main>
            <SidebarToggle/>  
          </div>
          <Toaster />
        </body>
      </SidebarProvider>
    </html>
  )
}

