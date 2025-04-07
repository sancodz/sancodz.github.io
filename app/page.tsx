import Link from "next/link"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ParallaxEffect from "@/components/parallax-effect"
import BackgroundElements from "@/components/background-elements"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <BackgroundElements />

      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-full w-48 pt-32 px-6 hidden md:block z-10">
          <nav className="space-y-6">
            <Link
              href="#intro"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Intro
            </Link>
            <Link
              href="#work"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="#background"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Background
            </Link>
            <Link
              href="#about"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-48">
          {/* Hero Section */}
          <section id="intro" className="min-h-screen flex items-center justify-center px-6 relative">
            <div className="max-w-4xl mx-auto relative z-10" data-parallax="0.2">
              <h1 className="text-5xl md:text-7xl font-normal leading-tight tracking-tight animate-fadeIn">
                Hello, I'm <span className="font-normal">Sathiya Narayanan</span>
                <br />
                <span className="text-2xl md:text-3xl">Java & Spring Boot Developer</span>
              </h1>
              <p className="text-base mt-8 text-gray-700 dark:text-gray-300 max-w-2xl">
                I build robust, scalable backend systems and APIs using Java and Spring Boot. Passionate about clean
                code, microservices architecture, and continuous delivery.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10" data-parallax="0.1">
              <h2 className="text-2xl md:text-3xl font-normal mb-16">My Skills</h2>
              <Skills />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10" data-parallax="0.15">
              <h2 className="text-2xl md:text-3xl font-normal mb-16">Featured Projects</h2>
              <Projects />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10" data-parallax="0.1">
              <h2 className="text-2xl md:text-3xl font-normal mb-16">Work Experience</h2>
              <Experience />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10" data-parallax="0.05">
              <h2 className="text-2xl md:text-3xl font-normal mb-16">Get In Touch</h2>
              <Contact />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center">
                <p>© {new Date().getFullYear()} Sathiya Narayanan. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <ParallaxEffect />
    </div>
  )
}

