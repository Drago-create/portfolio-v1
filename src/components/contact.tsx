import { site } from "@/content/site";
import { ArrowUpRight, GitHub, MapPin } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";

export function Contact() {
  const githubUrl =
    site.socials.find((social) => social.icon === "github")?.href ?? "#";

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="hero-glow absolute -top-24 -right-16 size-96 rounded-full" />
            <div className="grid-lines-soft absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -bottom-20 hidden font-serif text-[20rem] leading-none text-accent/5 italic select-none lg:block"
          >
            ts
          </div>

          <div className="relative max-w-2xl">
            <p className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Contact
            </p>

            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
              Have something in mind?{" "}
              <span className="block font-serif font-normal text-accent italic">
                Let&apos;s make it real.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              I&apos;m currently open to full-time roles and select freelance
              projects. Tell me a little about what you&apos;re building and
              I&apos;ll get back to you within a couple of days.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-opacity duration-200 hover:opacity-90"
              >
                Say hello
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-bg px-5 py-3 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              >
                <GitHub className="size-4" />
                See my GitHub
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                {site.location}
              </span>
              <span>{site.timezone}</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Available for new work
              </span>
            </div>

            <div className="mt-6 sm:hidden">
              <SocialLinks />
            </div>
          </div>

          <div className="absolute right-10 bottom-12 hidden sm:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
