import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  url?: string
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Microservices",
      description:
        "A scalable e-commerce platform built with Spring Boot microservices architecture, featuring product catalog, shopping cart, and order processing services.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL"],
      url: "https://example.com",
    },
    {
      title: "Banking API System",
      description:
        "Secure banking API system with transaction processing, account management, and fraud detection capabilities using Spring Security and OAuth2.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST API"],
      url: "https://example.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-based real-time chat application with user authentication, message persistence, and notification system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Spring Boot", "WebSocket", "MongoDB", "Redis"],
      url: "https://example.com",
    },
  ]

  return (
    <div className="space-y-20">
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-normal">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="border border-gray-300 dark:border-gray-700 text-sm px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            {project.url && (
              <Link
                href={project.url}
                className="inline-block border-b border-black dark:border-white hover:border-transparent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            )}
          </div>
          <div className="order-first md:order-last">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto border border-gray-200 dark:border-gray-800"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects

