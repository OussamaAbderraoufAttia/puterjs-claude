"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Github, Zap, Code, Infinity as InfinityIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated Background Blob */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
              />
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Free Claude 3.7 Chatbot
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Powered by Puter.js – Streamed, Open Source & Unlimited
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-white/70">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <InfinityIcon className="w-5 h-5 text-green-400" />
                <span>Unlimited Usage</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Code className="w-5 h-5 text-blue-400" />
                <span>Open Source</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/chat">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Chatting
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              Made by <span className="text-white font-semibold">Oussama Abderraouf ATTIA</span>
            </p>
            <Link
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">View on GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
