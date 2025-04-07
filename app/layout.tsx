import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageAnimations from "./page-animations"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sathiya Narayanan - Java & Spring Boot Developer",
  description:
    "Professional portfolio of Sathiya Narayanan, a Java and Spring Boot Developer specializing in building robust backend systems and APIs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <PageAnimations />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'