// Parallax scrolling effect
document.addEventListener("DOMContentLoaded", () => {
  const parallaxElements = document.querySelectorAll("[data-parallax]")

  const handleScroll = () => {
    const scrollY = window.scrollY

    parallaxElements.forEach((element) => {
      const speed = Number.parseFloat(element.dataset.parallax || "0")
      const yPos = -(scrollY * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  }

  window.addEventListener("scroll", handleScroll)
})

