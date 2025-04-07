import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Your Name`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="container-custom">
        <AnimatedSection>
          <Link
            href="/projects"
            className="inline-flex items-center mb-8 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>

          <h1 className="mb-6">{project.title}</h1>

          <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-3 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg">{project.description}</p>
            {project.details && <p>{project.details}</p>}
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Source Code
              </a>
            )}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="mb-6">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="card group block"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg mb-2">{p.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
