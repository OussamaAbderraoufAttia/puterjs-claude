"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
            PuterJS Claude
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
