// Data for the portfolio site
const portfolioData = {
  skills: [
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
  ],

  projects: [
    {
      title: "E-Commerce Microservices",
      description:
        "A scalable e-commerce platform built with Spring Boot microservices architecture, featuring product catalog, shopping cart, and order processing services.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=E-Commerce+Microservices",
      tags: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL"],
      url: "https://example.com",
    },
    {
      title: "Banking API System",
      description:
        "Secure banking API system with transaction processing, account management, and fraud detection capabilities using Spring Security and OAuth2.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Banking+API+System",
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST API"],
      url: "https://example.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-based real-time chat application with user authentication, message persistence, and notification system.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Real-time+Chat+App",
      tags: ["Java", "Spring Boot", "WebSocket", "MongoDB", "Redis"],
      url: "https://example.com",
    },
  ],

  experiences: [
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
  ],
}

