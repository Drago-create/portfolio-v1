import type { ReactNode } from "react";
import { site } from "@/content/site";
import { ArrowDown, ArrowUpRight, Sparkles } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";

function CodeLine({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="w-3 shrink-0 select-none text-right text-muted/40">
        {n}
      </span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute -top-48 right-[-12%] size-[40rem] rounded-full" />
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="min-w-0">
          <div className="animate-rise flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {site.availability}
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {site.role}
            </span>
          </div>

          <h1 className="animate-rise mt-7 text-[2.7rem] leading-[1.04] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.15rem]">
            {site.headline.lead}{" "}
            <span className="font-serif font-normal text-accent italic">
              {site.headline.emphasis}
            </span>{" "}
            {site.headline.tail}
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.description}
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent hover:text-accent-fg"
            >
              View selected work
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6">
            <SocialLinks />
            <p className="text-xs text-muted">
              or write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-fg underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="animate-fade relative mx-auto w-full max-w-md min-w-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-5 rotate-3 rounded-[2rem] border border-line bg-surface/60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-5 -rotate-2 rounded-[2rem] border border-line bg-elevated/60"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_30px_80px_-45px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
              <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
              <span className="size-2.5 rounded-full bg-[#28c840]/80" />
              <span className="ml-3 font-mono text-[11px] text-muted">
                developer.ts
              </span>
              <span className="ml-auto rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                TS
              </span>
            </div>

            <div className="overflow-x-auto bg-gradient-to-b from-surface to-elevated/40 px-5 py-6 font-mono text-[12px] leading-6 sm:text-[13px]">
              <div className="min-w-max">
                <CodeLine n={1}>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-fg">developer</span>{" "}
                  <span className="text-muted">= {"{"}</span>
                </CodeLine>
                <CodeLine n={2}>
                  {"  "}
                  <span className="text-muted">name:</span>{" "}
                  <span className="text-[#2f7d5c] dark:text-[#8bd3b0]">
                    &quot;{site.name}&quot;
                  </span>
                  <span className="text-muted">,</span>
                </CodeLine>
                <CodeLine n={3}>
                  {"  "}
                  <span className="text-muted">role:</span>{" "}
                  <span className="text-[#2f7d5c] dark:text-[#8bd3b0]">
                    &quot;{site.role}&quot;
                  </span>
                  <span className="text-muted">,</span>
                </CodeLine>
                <CodeLine n={4}>
                  {"  "}
                  <span className="text-muted">based:</span>{" "}
                  <span className="text-[#2f7d5c] dark:text-[#8bd3b0]">
                    &quot;{site.location}&quot;
                  </span>
                  <span className="text-muted">,</span>
                </CodeLine>
                <CodeLine n={5}>
                  {"  "}
                  <span className="text-muted">stack:</span>{" "}
                  <span className="text-muted">[</span>
                  <span className="text-[#2f7d5c] dark:text-[#8bd3b0]">
                    &quot;TypeScript&quot;
                  </span>
                  <span className="text-muted">, </span>
                  <span className="text-[#2f7d5c] dark:text-[#8bd3b0]">
                    &quot;React&quot;
                  </span>
                  <span className="text-muted">, </span>
                  <span className="text-[#2f7d5c] dark:text-[#8bd3b0]">
                    &quot;Next.js&quot;
                  </span>
                  <span className="text-muted">]</span>
                  <span className="text-muted">,</span>
                </CodeLine>
                <CodeLine n={6}>
                  {"  "}
                  <span className="text-muted">available:</span>{" "}
                  <span className="text-accent">true</span>
                  <span className="text-muted">,</span>
                </CodeLine>
                <CodeLine n={7}>
                  <span className="text-muted">{"}"}</span>
                </CodeLine>
                <CodeLine n={8}>
                  <span className="text-muted">.</span>
                  <span className="text-fg">satisfies</span>{" "}
                  <span className="text-fg">Developer</span>
                  <span className="text-muted">;</span>
                </CodeLine>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />
          </div>

          <div className="animate-float absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pr-4 shadow-xl backdrop-blur sm:flex">
            <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Currently
              </p>
              <p className="text-xs font-medium">Building Northstar</p>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 hidden rounded-full border border-line bg-surface/95 px-3 py-1.5 font-mono text-[10px] tracking-wider text-muted uppercase shadow-lg backdrop-blur sm:block">
            5+ yrs experience
          </div>
        </div>
      </div>
    </section>
  );
}
