import type { FC } from "react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const Experience: FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Java Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description: [
        "Led the development of a microservices-based e-commerce platform using Spring Boot and Spring Cloud",
        "Implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes",
        "Mentored junior developers and conducted code reviews to ensure code quality",
        "Optimized database queries resulting in 40% improvement in application performance",
      ],
    },
    {
      title: "Java Developer",
      company: "Digital Solutions Ltd.",
      period: "Mar 2018 - Dec 2020",
      description: [
        "Developed and maintained RESTful APIs using Spring Boot and Spring Data JPA",
        "Implemented authentication and authorization using Spring Security and OAuth2",
        "Collaborated with frontend developers to integrate APIs with React applications",
        "Participated in Agile development process with bi-weekly sprints",
      ],
    },
    {
      title: "Junior Java Developer",
      company: "Software Systems Inc.",
      period: "Jun 2016 - Feb 2018",
      description: [
        "Assisted in the development of a banking application using Java and Spring Framework",
        "Wrote unit and integration tests using JUnit and Mockito",
        "Fixed bugs and implemented new features based on client requirements",
        "Participated in daily stand-up meetings and sprint planning",
      ],
    },
  ]

  return (
    <div className="space-y-16">
      {experiences.map((exp, index) => (
        <div key={index} className="space-y-4" data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="space-y-1">
            <h3 className="text-2xl font-normal">{exp.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {exp.company} • {exp.period}
            </p>
          </div>
          <ul className="space-y-2">
            {exp.description.map((item, idx) => (
              <li key={idx} className="flex">
                <span className="h-1 w-1 rounded-full bg-black dark:bg-white mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Experience

