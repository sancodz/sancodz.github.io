// Background canvas animation
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("background-canvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Set canvas dimensions
  const setCanvasDimensions = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  setCanvasDimensions()
  window.addEventListener("resize", setCanvasDimensions)

  // Create particles
  const particles = []
  const particleCount = 30

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 0.5
      this.speedX = (Math.random() - 0.5) * 0.2
      this.speedY = (Math.random() - 0.5) * 0.2
      this.opacity = Math.random() * 0.5 + 0.1
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > canvas.width) this.x = 0
      else if (this.x < 0) this.x = canvas.width

      if (this.y > canvas.height) this.y = 0
      else if (this.y < 0) this.y = canvas.height
    }

    draw(ctx, isDarkMode) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = isDarkMode ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(0, 0, 0, ${this.opacity})`
      ctx.fill()
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains("dark")

    // Update and draw particles
    particles.forEach((particle) => {
      particle.update()
      particle.draw(ctx, isDarkMode)
    })

    requestAnimationFrame(animate)
  }

  animate()
})

