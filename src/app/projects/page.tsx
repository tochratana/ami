

// Project page

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects | Your Name",
  description: "Explore my portfolio of web development projects",
};

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="mb-4 text-center">My Projects</h1>
          <p className="mb-12 text-center text-lg max-w-3xl mx-auto">
            Here's a collection of my recent work. Each project presented unique
            challenges and allowed me to expand my skills in different areas of
            web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="mb-4 text-center">Let's Work Together</h2>
            <p className="mb-6 text-center">
              Interested in collaborating or have a project idea in mind? I'm
              always open to discussing new opportunities and challenges.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
