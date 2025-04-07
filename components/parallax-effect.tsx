"use client"

import { useEffect } from "react"

export default function ParallaxEffect() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll("[data-parallax]")

    const handleScroll = () => {
      const scrollY = window.scrollY

      parallaxElements.forEach((element) => {
        const el = element as HTMLElement
        const speed = Number.parseFloat(el.dataset.parallax || "0")
        const yPos = -(scrollY * speed)
        el.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

