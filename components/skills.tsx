import type { FC } from "react"

interface Skill {
  name: string
  items: string[]
}

const Skills: FC = () => {
  const skills: Skill[] = [
    {
      name: "Backend Development",
      items: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA"],
    },
    {
      name: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      name: "API Development",
      items: ["RESTful APIs", "GraphQL", "Swagger/OpenAPI", "API Gateway", "Microservices"],
    },
    {
      name: "DevOps",
      items: ["Git", "Maven", "Gradle", "Jenkins", "Docker", "Kubernetes"],
    },
    {
      name: "Cloud Services",
      items: ["AWS", "Azure", "Google Cloud", "Heroku", "Serverless"],
    },
    {
      name: "Tools & Others",
      items: ["IntelliJ IDEA", "Postman", "JUnit", "Mockito", "SonarQube", "Agile/Scrum"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-4" data-aos="fade-up" data-aos-delay={index * 100}>
          <h3 className="text-xl font-normal">{skill.name}</h3>
          <ul className="space-y-2">
            {skill.items.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="h-1 w-1 rounded-full bg-black dark:bg-white mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Skills

