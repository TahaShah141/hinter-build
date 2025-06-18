export type TechnologyType = {
  name: string
  src: string
  desc: string
}

export const technologies: TechnologyType[] = [
  {
    name: "FastAPI",
    src: "/fastapi.svg",
    desc: "Modern, fast web framework for building APIs with Python"
  },
  {
    name: "React",
    src: "/react.svg",
    desc: "Frontend library for building dynamic user interfaces"
  },
  {
    name: "AWS",
    src: "/aws.svg",
    desc: "Cloud computing services for scalable infrastructure"
  },
  {
    name: "Azure",
    src: "/azure.svg",
    desc: "Enterprise-grade cloud computing platform"
  },
  {
    name: "Docker",
    src: "/docker.svg",
    desc: "Container platform for application deployment"
  },
  {
    name: "Kubernetes",
    src: "/kubernetes.svg",
    desc: "Container orchestration for cloud-native applications"
  },
  {
    name: "Golang",
    src: "/golang.svg",
    desc: "High-performance programming language"
  },
  {
    name: "Langchain",
    src: "/langchain.svg",
    desc: "Framework for developing LLM-powered applications"
  },
  {
    name: "Langgraph",
    src: "/langgraph.svg",
    desc: "Advanced language model orchestration tool"
  },
  {
    name: "Agno",
    src: "/agno.svg",
    desc: "Modern development workflow automation"
  },
  {
    name: "N8n",
    src: "/n8n.svg",
    desc: "Workflow automation and integration platform"
  }
]