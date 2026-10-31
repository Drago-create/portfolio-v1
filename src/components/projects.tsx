import { site, type Project } from "@/content/site";
import { ArrowUpRight, GitHub } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit the ${project.title} live site`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
        >
          Live site
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      ) : null}
      {project.sourceUrl ? (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`View ${project.title} source code`}
          className="group/link inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <GitHub className="size-3.5" />
          Source
        </a>
      ) : null}
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[10px] text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const githubUrl =
    site.socials.find((social) => social.icon === "github")?.href ?? "#";

  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Things I&apos;ve built{" "}
                <span className="font-serif font-normal text-accent italic">
                  recently
                </span>
              </>
            }
            description="A few projects that show how I think about product, performance, and the small details in between."
          />
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            More on GitHub
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {site.projects.map((project) =>
            project.featured ? (
              <article
                key={project.slug}
                className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)] md:col-span-2 lg:grid-cols-[1.08fr_0.92fr]"
              >
                <ProjectVisual
                  variant={project.visual}
                  className="min-h-[17rem] border-b border-line sm:min-h-[20rem] lg:border-r lg:border-b-0"
                />
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase">
                    <span className="text-accent">Featured</span>
                    <span aria-hidden="true" className="text-muted/50">
                      /
                    </span>
                    <span className="text-muted">{project.year}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-5">
                    <TagList tags={project.tags} />
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ) : (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)]"
              >
                <ProjectVisual
                  variant={project.visual}
                  className="aspect-16/10 border-b border-line"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-muted">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-4">
                    <TagList tags={project.tags} />
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
