
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { projects } from '@/content/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="case-study section-wrap">
      <Link href="/projects" className="back-link">
        <ArrowLeft size={15} />
        All projects
      </Link>

      <header className="case-header">
        <div className="case-overline">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h1>
          {project.name}
          <span>.</span>
        </h1>

        <p>{project.description}</p>

        <div className="case-facts">
          <div>
            <span>MY ROLE</span>
            <strong>{project.role}</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong>{project.status}</strong>
          </div>

          <div>
            <span>TECHNOLOGIES</span>
            <strong>{project.stack.join(' · ')}</strong>
          </div>
        </div>
      </header>

      {project.image && (
        <div className="case-art">
          <Image
            src={project.image}
            alt={`${project.name} project screenshot`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="case-art-image"
          />
        </div>
      )}

      <div className="case-content">
        <aside>
          <span className="eyebrow">CASE STUDY</span>
          <p>Problem · Approach · Learnings</p>
        </aside>

        <div className="case-body">
          <section>
            <span className="eyebrow">01 / THE CHALLENGE</span>
            <h2>What needed to be solved.</h2>
            <p>{project.challenge}</p>
          </section>

          <section>
            <span className="eyebrow">02 / THE APPROACH</span>
            <h2>How I approached it.</h2>

            <ul>
              {project.approach.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <span className="eyebrow">03 / ENGINEERING NOTES</span>
            <h2>What the work reinforced.</h2>

            <ul>
              {project.learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <span className="eyebrow">FOCUS AREAS</span>

            <div className="case-tags">
              {project.focus.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          {project.links.live && (
            <a
              className="button button-dark case-live"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Visit project
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="next-project"
      >
        <span>UP NEXT</span>
        <strong>{next.name}</strong>
        <ArrowUpRight size={20} />
      </Link>
    </article>
  );
}
