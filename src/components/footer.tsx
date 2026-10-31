import { site } from "@/content/site";
import { ArrowUp } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          © 2026 {site.name}. Built with Next.js, TypeScript &amp; Tailwind.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            {site.email}
          </a>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
