import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your Name
              </span>
            </h1>
            <h2 className="mb-6 font-normal text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </h2>
            <p className="mb-8 max-w-2xl text-lg">
              I build modern, responsive, and performant web applications with
              React, TypeScript, and Next.js.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="mb-6 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Your Name"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="mb-4 text-lg">
                  I'm a passionate full-stack developer with expertise in modern
                  web technologies. My focus is on creating clean, efficient,
                  and user-friendly applications.
                </p>
                <p className="mb-4">
                  With experience in TypeScript, React, Next.js, and Node.js, I
                  build responsive and accessible web applications with a focus
                  on performance and user experience.
                </p>
                <Link href="/about" className="btn-secondary">
                  More About Me
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="mb-6 text-center">Featured Projects</h2>
            <p className="mb-10 text-center text-lg max-w-3xl mx-auto">
              Here are some of my recent projects. Each one presented unique
              challenges and learning opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/projects" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="mb-6 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "TypeScript", icon: "typescript.svg" },
                { name: "React", icon: "react.svg" },
                { name: "Next.js", icon: "nextjs.svg" },
                { name: "Node.js", icon: "nodejs.svg" },
                { name: "TailwindCSS", icon: "tailwind.svg" },
                { name: "GraphQL", icon: "graphql.svg" },
                { name: "MongoDB", icon: "mongodb.svg" },
                { name: "PostgreSQL", icon: "postgresql.svg" },
                { name: "Docker", icon: "docker.svg" },
                { name: "AWS", icon: "aws.svg" },
                { name: "Git", icon: "git.svg" },
                { name: "Jest", icon: "jest.svg" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-16 h-16 mb-2 relative">
                    <Image
                      src={`/icons/${skill.icon}`}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="mb-6 text-center">Get In Touch</h2>
            <p className="mb-10 text-center text-lg max-w-3xl mx-auto">
              Interested in working together? Feel free to reach out for
              collaborations or just a friendly hello!
            </p>
            <div className="max-w-lg mx-auto">
              <Link
                href="/contact"
                className="block w-full text-center btn-primary"
              >
                Contact Me
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
