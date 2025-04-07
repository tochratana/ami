import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "About Me | Your Name",
  description: "Learn more about my background, skills, and experience",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="mb-8 text-center">About Me</h1>

          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                <div className="relative w-full aspect-square max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/profile.jpg"
                    alt="Your Name"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="mb-4">Hello, I'm Your Name</h2>

              <p className="mb-4 text-lg">
                I'm a full-stack developer specializing in modern web
                technologies. With over 5 years of experience building web
                applications, I focus on creating clean, efficient, and
                user-friendly experiences.
              </p>

              <p className="mb-4">
                My journey in web development began at University Name, where I
                earned my degree in Computer Science. Since then, I've worked
                with startups and established companies alike, helping them turn
                their ideas into reality through code.
              </p>

              <p className="mb-6">
                When I'm not coding, you can find me hiking in the mountains,
                experimenting with new recipes, or contributing to open-source
                projects. I'm passionate about continuous learning and staying
                up-to-date with the latest industry trends and best practices.
              </p>

              <h3 className="mb-4">My Approach</h3>

              <p className="mb-6">
                I believe in writing clean, maintainable code and building
                applications that are not only functional but also performant
                and accessible. My goal is to create digital experiences that
                delight users while meeting business objectives.
              </p>

              <h3 className="mb-4">Experience</h3>

              <div className="mb-8 space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-bold text-xl mb-1">Senior Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Company Name | 2021 - Present
                  </p>
                  <p>
                    Lead development of web applications using React, Next.js,
                    and Node.js. Implemented CI/CD pipelines, mentored junior
                    developers, and improved application performance by 40%.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-bold text-xl mb-1">
                    Full Stack Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Previous Company | 2018 - 2021
                  </p>
                  <p>
                    Built and maintained multiple web applications. Collaborated
                    with design and product teams to implement new features and
                    optimize user experiences.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-bold text-xl mb-1">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    First Company | 2016 - 2018
                  </p>
                  <p>
                    Developed responsive user interfaces using React and Redux.
                    Worked on improving accessibility and performance of
                    existing applications.
                  </p>
                </div>
              </div>

              <h3 className="mb-4">Education</h3>

              <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-xl mb-1">
                  BSc in Computer Science
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  University Name | 2012 - 2016
                </p>
                <p>
                  Graduated with honors. Specialized in Software Engineering and
                  Web Development.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
