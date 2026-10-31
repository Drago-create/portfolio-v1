import { site } from "@/content/site";
import { Sparkles } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  A developer with a soft spot for{" "}
                  <span className="font-serif font-normal text-accent italic">
                    the last 10%
                  </span>
                  .
                </>
              }
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-7">
              {site.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="h-fit lg:sticky lg:top-24">
            <div className="rounded-3xl border border-line bg-surface p-6">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="size-4 text-accent" />
                  Toolbox
                </h3>
                <span className="font-mono text-[10px] text-muted uppercase">
                  2026
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {site.skills.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-medium text-fg">
                      {group.label}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line bg-elevated px-2.5 py-1 text-[11px] text-muted transition-colors hover:border-accent/30 hover:text-fg"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 px-1 text-[11px] leading-relaxed text-muted">
              Always happy to talk shop about types, design systems, or the best
              way to structure a monorepo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
