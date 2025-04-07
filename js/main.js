// Main JavaScript file
document.addEventListener("DOMContentLoaded", () => {
  // Import portfolio data (or declare it if not using modules)
  // Assuming portfolioData is in a separate file (e.g., data.js)
  // You can use import if you're using modules:
  // import portfolioData from './data.js';

  // If not using modules, you can declare it here or include data.js in your HTML:
  const portfolioData = {
    skills: [
      {
        name: "Programming Languages",
        items: ["JavaScript", "Python", "HTML", "CSS"],
      },
      {
        name: "Frameworks & Libraries",
        items: ["React", "Node.js", "Tailwind CSS"],
      },
    ],
    projects: [
      {
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Tailwind CSS.",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        image: "https://via.placeholder.com/400x300",
        url: "#",
      },
      {
        title: "E-commerce Store",
        description: "An e-commerce store built with Node.js and Express.",
        tags: ["Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/400x300",
        url: "#",
      },
    ],
    experiences: [
      {
        title: "Software Engineer",
        company: "Acme Corp",
        period: "2020 - Present",
        description: [
          "Developed and maintained web applications using React and Node.js.",
          "Collaborated with a team of engineers to deliver high-quality software.",
        ],
      },
      {
        title: "Web Developer Intern",
        company: "Beta Inc",
        period: "2019",
        description: [
          "Assisted in the development of a new website using HTML, CSS, and JavaScript.",
          "Learned about web development best practices.",
        ],
      },
    ],
  }

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Theme toggle functionality
  const setupThemeToggle = () => {
    const themeToggle = document.getElementById("theme-toggle")
    const themeToggleLight = document.getElementById("theme-toggle-light")
    const themeToggleDark = document.getElementById("theme-toggle-dark")

    // Check for saved theme preference or use system preference
    const getThemePreference = () => {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        return savedTheme
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    // Apply theme
    const applyTheme = (theme) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
        themeToggleLight.classList.remove("hidden")
        themeToggleDark.classList.add("hidden")
      } else {
        document.documentElement.classList.remove("dark")
        themeToggleLight.classList.add("hidden")
        themeToggleDark.classList.remove("hidden")
      }
      localStorage.setItem("theme", theme)
    }

    // Initial theme setup
    applyTheme(getThemePreference())

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      const newTheme = currentTheme === "dark" ? "light" : "dark"
      applyTheme(newTheme)
    })

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light")
      }
    })
  }

  // Populate skills section
  const populateSkills = () => {
    const skillsContainer = document.getElementById("skills-container")
    if (!skillsContainer) return

    portfolioData.skills.forEach((skill, index) => {
      const skillElement = document.createElement("div")
      skillElement.className = "space-y-4"
      skillElement.setAttribute("data-aos", "fade-up")
      skillElement.setAttribute("data-aos-delay", index * 100)

      skillElement.innerHTML = `
        <h3 class="text-xl font-normal">${skill.name}</h3>
        <ul class="space-y-2">
          ${skill.items
            .map(
              (item) => `
            <li class="flex items-center">
              <span class="h-1 w-1 rounded-full bg-black dark:bg-white mr-2"></span>
              <span class="text-gray-700 dark:text-gray-300">${item}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
      `

      skillsContainer.appendChild(skillElement)
    })
  }

  // Populate projects section
  const populateProjects = () => {
    const projectsContainer = document.getElementById("projects-container")
    if (!projectsContainer) return

    portfolioData.projects.forEach((project, index) => {
      const projectElement = document.createElement("div")
      projectElement.className = "grid grid-cols-1 md:grid-cols-2 gap-8"
      projectElement.setAttribute("data-aos", "fade-up")
      projectElement.setAttribute("data-aos-delay", index * 100)

      projectElement.innerHTML = `
        <div class="space-y-4">
          <h3 class="text-2xl font-normal">${project.title}</h3>
          <p class="text-gray-700 dark:text-gray-300">${project.description}</p>
          <div class="flex flex-wrap gap-2">
            ${project.tags
              .map(
                (tag) => `
              <span class="border border-gray-300 dark:border-gray-700 text-sm px-3 py-1">
                ${tag}
              </span>
            `,
              )
              .join("")}
          </div>
          ${
            project.url
              ? `
            <a href="${project.url}" class="inline-block border-b border-black dark:border-white hover:border-transparent transition-colors" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          `
              : ""
          }
        </div>
        <div class="order-first md:order-last">
          <img src="${project.image}" alt="${project.title}" class="w-full h-auto border border-gray-200 dark:border-gray-800">
        </div>
      `

      projectsContainer.appendChild(projectElement)
    })
  }

  // Populate experience section
  const populateExperience = () => {
    const experienceContainer = document.getElementById("experience-container")
    if (!experienceContainer) return

    portfolioData.experiences.forEach((exp, index) => {
      const expElement = document.createElement("div")
      expElement.className = "space-y-4"
      expElement.setAttribute("data-aos", "fade-up")
      expElement.setAttribute("data-aos-delay", index * 100)

      expElement.innerHTML = `
        <div class="space-y-1">
          <h3 class="text-2xl font-normal">${exp.title}</h3>
          <p class="text-gray-700 dark:text-gray-300">
            ${exp.company} • ${exp.period}
          </p>
        </div>
        <ul class="space-y-2">
          ${exp.description
            .map(
              (item) => `
            <li class="flex">
              <span class="h-1 w-1 rounded-full bg-black dark:bg-white mt-2 mr-2 flex-shrink-0"></span>
              <span class="text-gray-700 dark:text-gray-300">${item}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
      `

      experienceContainer.appendChild(expElement)
    })
  }

  // Handle contact form submission
  const setupContactForm = () => {
    const contactForm = document.getElementById("contact-form")
    if (!contactForm) return

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // In a real implementation, you would send the form data to a server
      // For GitHub Pages, you could use a service like Formspree or a serverless function

      const formData = new FormData(contactForm)
      const formValues = Object.fromEntries(formData.entries())

      // For demonstration purposes, just log the form data
      console.log("Form submitted:", formValues)

      // Show a success message
      alert("Thank you for your message! In a real implementation, this would be sent to the server.")

      // Reset the form
      contactForm.reset()
    })
  }

  // Initialize all components
  setupThemeToggle()
  populateSkills()
  populateProjects()
  populateExperience()
  setupContactForm()
})

