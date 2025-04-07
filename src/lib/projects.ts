export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  details?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with cart, checkout, and payment processing.",
    image: "/../../public/projects/p_business.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "MongoDB",
    ],
    demoUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
    details:
      "This e-commerce platform features user authentication, product search with filters, shopping cart functionality, secure checkout with Stripe integration, and a fully responsive design. The admin dashboard allows for product management, order tracking, and analytics.",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app with kanban boards, task assignments, and deadlines.",
    image: "/../../public/projects/reancode.jpg",
    technologies: ["React", "TypeScript", "Redux", "Firebase", "Material UI"],
    demoUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/yourusername/taskapp",
    featured: true,
    details:
      "This task management application helps teams organize work with customizable kanban boards. It includes features like drag-and-drop task organization, due date tracking, assignee management, comment threads, and real-time updates via Firebase.",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather data visualization with forecasts and historical data.",
    image: "/projects/weather.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "OpenWeather API",
      "Tailwind CSS",
    ],
    demoUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather",
    featured: true,
    details:
      "The Weather Dashboard provides users with current weather conditions and 7-day forecasts for any location. It features interactive charts for temperature, precipitation, and wind patterns, as well as historical weather data comparisons. The app uses geolocation for automatic local weather updates.",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A content management system with markdown support and analytics.",
    image: "/projects/blog.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "MDX",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    demoUrl: "https://example.com/blog",
    githubUrl: "https://github.com/yourusername/blog",
    featured: false,
    details:
      "This blog platform allows writers to create and publish content with a rich markdown editor. Features include categorization, tagging, SEO optimization, scheduled publishing, and reader analytics. The platform is built with performance and accessibility in mind.",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for tracking engagement across multiple platforms.",
    image: "/projects/social.jpg",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://example.com/social",
    githubUrl: "https://github.com/yourusername/social",
    featured: false,
    details:
      "The Social Media Dashboard aggregates data from multiple social media platforms to provide comprehensive analytics. It visualizes engagement metrics, follower growth, and content performance. The dashboard includes customizable reports, scheduled exports, and competitive analysis features.",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Mobile-first application for tracking workouts and nutrition.",
    image: "/projects/fitness.jpg",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "Chart.js",
    ],
    demoUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/yourusername/fitness",
    featured: false,
    details:
      "This fitness tracking application helps users monitor their exercise routines and nutritional intake. It includes workout planning, progress tracking with visual charts, calorie counting, and social features for accountability. The app syncs across devices and provides personalized recommendations.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
