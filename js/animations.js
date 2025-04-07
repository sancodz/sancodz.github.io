// Animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  // Set up Intersection Observer for animations
  const setupAnimations = () => {
    const animateElements = document.querySelectorAll("[data-aos]")
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target

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
              entry.target.style.opacity = "0.8"
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    )

    // Observe data-aos elements
    animateElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      observer.observe(el)
    })

    // Observe sections
    sections.forEach((section) => {
      observer.observe(section)
    })
  }

  setupAnimations()
})

