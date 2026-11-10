
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Mail,
} from "lucide-react";

import { profile, experience } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero page-wrap">
        <div className="hero-overline">
          <span className="availability-dot" />
          {profile.availability}
        </div>

        <h1>
          {profile.intro.split("software")[0]}
          <em>software</em>
          {profile.intro.split("software")[1]}
        </h1>

        <div className="hero-bottom">
          <p>{profile.description}</p>

          <div className="hero-actions">
            <Link className="button button-dark" href="#work">
              Explore selected work
              <ArrowDown size={16} />
            </Link>

            <a
              className="button button-light"
              href="/documents/daniel-keme-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Résumé
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-index">
          <span>01 / INTRODUCTION</span>
          <span>
            ABUJA, NIGERIA · {new Date().getFullYear()}
          </span>
        </div>
      </section>

      {/* Selected Work */}
      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORK / 01—03</span>
            <h2>
              Products, systems
              <br />
              and ideas in progress.
            </h2>
          </div>

          <p>
            A selection of product engineering work—from early-stage
            systems to shipped client experiences.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
            />
          ))}
        </div>

        <div className="all-work">
          <span>{projects.length} PROJECTS · CASE STUDIES</span>

          <Link href="/projects" className="button button-dark">
            View other projects
            <ArrowRight size={16} />
          </Link>
        </div>
        
      </section>

      {/* About */}
      <section className="about-section section-wrap" id="about">
        <div className="about-aside">
          <span className="eyebrow">A LITTLE ABOUT ME / 02</span>

          <div className="about-stamp">
            ENGINEER
            <br />
            <span>×</span>
            <br />
            BUILDER
          </div>
        </div>

        <div className="about-main">
          <h2>
            Curious by default.
            <br />
            <em>Practical by design.</em>
          </h2>

          <p className="about-lead">
            I’m Daniel—a full-stack software engineer who enjoys
            making ambitious ideas useful, reliable, and real.
          </p>

          <p>
            I work across the product stack: shaping interfaces,
            designing data models, building APIs, and integrating
            the services that bring an application together. I care
            about the details, but I care just as much about
            solving the right problem.
          </p>

          <div className="about-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              Email
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities section-wrap">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">HOW I WORK / 03</span>
            <h2>
              Across the stack.
              <br />
              Close to the problem.
            </h2>
          </div>
        </div>

        <div className="capability-grid">
          <article>
            <span>01</span>
            <h3>Frontend engineering</h3>

            <p>
              Accessible, responsive interfaces that make complex
              workflows feel straightforward.
            </p>

            <div>React · Next.js · TypeScript · CSS</div>
          </article>

          <article>
            <span>02</span>
            <h3>Backend & data</h3>

            <p>
              Application logic, APIs, data models, and integrations
              built for maintainability.
            </p>

            <div>
              Node.js · Express · PostgreSQL · Supabase
            </div>
          </article>

          <article>
            <span>03</span>
            <h3>Product delivery</h3>

            <p>
              Taking ideas through implementation, testing,
              deployment, and iteration.
            </p>

            <div>Git · CI/CD · Vercel · Testing</div>
          </article>
        </div>
      </section>

      {/* Experience */}
      <section
        className="experience-section section-wrap"
        id="experience"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPERIENCE / 04</span>
            <h2>
              Where I’ve
              <br />
              contributed.
            </h2>
          </div>

          <p>
            Professional work and project engagements across
            software development.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item, i) => (
            <article
              className="experience-item"
              key={item.company}
            >
              <div className="experience-number">
                0{i + 1}
              </div>

              <div className="experience-company">
                <h3>{item.company}</h3>
                <span>{item.location}</span>
              </div>

              <div className="experience-details">
                <div className="experience-title">
                  <strong>{item.role}</strong>
                  <span>{item.dates}</span>
                </div>

                <p>{item.description}</p>

                <ul>
                  {item.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Additional Projects */}
      <section className="other-projects section-wrap">
        <div className="other-projects-heading">
          <span className="eyebrow">ALSO IN THE WORKS / 05</span>
          <p>Additional client and product work.</p>
        </div>

        <div className="other-project-row">
          {projects.slice(3).map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <span>0{i + 1}</span>

              <div>
                <strong>{project.name}</strong>
                <small>{project.category}</small>
              </div>

              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        className="contact-section section-wrap"
        id="contact"
      >
        <div className="contact-label">
          <span className="eyebrow">
            HAVE SOMETHING IN MIND? / 06
          </span>

          <span>AVAILABLE FOR THE RIGHT OPPORTUNITY</span>
        </div>

        <h2>
          Let’s build something
          <br />
          <em>that matters.</em>
        </h2>

        <div className="contact-bottom">
          <p>
            Interested in working together or want to talk through
            a product challenge? My inbox is open.
          </p>

          <a
            className="contact-email"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </>
  );
}
