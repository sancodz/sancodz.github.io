"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function PageAnimations() {
  const { setTheme, theme } = useTheme()

  // Set theme based on system preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light")
    }

    // Set initial theme
    if (theme === "system") {
      setTheme(darkModeMediaQuery.matches ? "dark" : "light")
    }

    // Listen for changes
    darkModeMediaQuery.addEventListener("change", handleChange)

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange)
    }
  }, [setTheme, theme])

  // Animation on scroll
  useEffect(() => {
    const animateElements = document.querySelectorAll("[data-aos]")
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement

            // For data-aos elements
            if (el.hasAttribute("data-aos")) {
              const delay = el.dataset.aosDelay ? Number.parseInt(el.dataset.aosDelay) : 0

              setTimeout(() => {
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, delay)

              observer.unobserve(el)
            }

            // For sections
            if (el.tagName.toLowerCase() === "section") {
              el.style.opacity = "1"
            }
          } else {
            // For sections, fade out slightly when not in view
            if (entry.target.tagName.toLowerCase() === "section") {
              const el = entry.target as HTMLElement
              el.style.opacity = "0.8"
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    )

    // Observe data-aos elements
    animateElements.forEach((el) => {
      const element = el as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      observer.observe(element)
    })

    // Observe sections
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

