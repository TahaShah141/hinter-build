export type AutomationType = {
  name: string;
  src: string;
  desc: string;
};

export const automations: AutomationType[] = [
  {
    name: "On-board New Employees",
    src: "/onboard.png",
    desc: "Streamline your employee onboarding process with intelligent automation that handles document collection, system provisioning, training schedules, and compliance tracking. Reduce manual HR tasks by 80% while ensuring consistent, personalized welcome experiences for every new hire.",
  },
  {
    name: "Enrich Security Incident Tickets",
    src: "/enrich.png",
    desc: "Automatically enhance security incident tickets with contextual threat intelligence, asset information, and historical data. Our AI-powered system prioritizes incidents, suggests remediation steps, and accelerates response times by connecting disparate security tools and databases.",
  },
  {
    name: "Convert Natural Language into API Calls",
    src: "/convert.png",
    desc: "Transform spoken or written requests into structured API calls using advanced natural language processing. Enable non-technical users to interact with complex systems through conversational interfaces, reducing development overhead and improving user accessibility.",
  },
  {
    name: "Generate Customer Insights from Reviews",
    src: "/customer.png",
    desc: "Extract actionable business intelligence from customer reviews across multiple platforms. Our sentiment analysis and trend detection automatically categorizes feedback, identifies improvement opportunities, and generates comprehensive reports to drive data-driven decisions.",
  },
];
