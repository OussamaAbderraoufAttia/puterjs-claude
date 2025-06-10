import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import Script from "next/script" // ✅ import this

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PuterJS Claude - Free Claude 3.7 Chatbot",
  description: "Free and unlimited Claude 3.7 Sonnet chatbot powered by Puter.js",
   icons: {
    icon: [
      {url: '/favicon.ico',} // ✅ Path relative to public/
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Add the Puter.js script here */}
        <Script src="https://js.puter.com/v2/" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#1a1a2e] to-[#16213e] dark:from-[#0f0f1b] dark:via-[#1a1a2e] dark:to-[#16213e]">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
