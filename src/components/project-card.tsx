
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import type { Project } from "@/types/portfolio";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <Link
        href={`/projects/${project.slug}`}
        className="project-card-link"
        aria-label={`Read the ${project.name} case study`}
      >
        <div className="project-screenshot">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} application interface`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
              className="project-screenshot-image"
              loading="lazy"
            />
          ) : (
            <div className="project-image-fallback" aria-hidden="true">
              <span>{project.name}</span>
            </div>
          )}
        </div>

        <div className="project-card-body">
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h3>
            {project.name}
            <ArrowUpRight size={18} aria-hidden="true" />
          </h3>

          <p>{project.summary}</p>

          <div className="tech-list">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-read">
            View case study
            <ArrowRight size={15} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
}
