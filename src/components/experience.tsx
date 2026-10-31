import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve been{" "}
              <span className="font-serif font-normal text-accent italic">
                so far
              </span>
            </>
          }
          description="A short history of the teams and projects that shaped how I work."
        />

        <ol className="mt-12 ml-1 space-y-10 border-l border-line sm:space-y-12">
          {site.experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="relative pl-7"
            >
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5.5px] size-2.5 rounded-full border-2 border-bg bg-accent"
              />

              <div className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8">
                <p className="pt-0.5 font-mono text-[11px] tracking-wide text-muted">
                  {job.period}
                </p>

                <div>
                  <h3 className="text-base font-medium tracking-tight">
                    {job.role}
                    <span className="font-normal text-muted">
                      {" "}
                      · {job.company}
                    </span>
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">{job.location}</p>

                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-3 shrink-0 bg-line"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
