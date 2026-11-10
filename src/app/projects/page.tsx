
import type { Metadata } from "next";

import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Product engineering case studies and selected client work by Daniel Keme.",
};

export default function ProjectsPage() {
  return (
    <section className="projects-index section-wrap">
      <div className="projects-index-intro">
        <span className="eyebrow">WORK INDEX / 01—06</span>

        <h1>
          Selected work<span>.</span>
        </h1>

        <p>
          Product explorations, engineering projects, and client work. Each case
          study outlines the problem, approach, and technical considerations.
        </p>
      </div>

      <div className="project-grid project-grid-all">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
