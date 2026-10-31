"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Close, Menu } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const sectionIds = ["work", "about", "experience", "contact"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-bg/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — back to top`}
        >
          <span className="grid size-9 place-items-center rounded-xl bg-fg font-serif text-xl leading-none text-bg transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-fg">
            {site.initials}
          </span>
          <span className="text-sm font-medium tracking-tight">
            {site.name}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const isActive = active === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent hover:text-accent-fg sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-fg md:hidden"
          >
            {open ? (
              <Close className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 text-sm text-muted transition-colors hover:text-fg last:border-b-0"
              >
                {item.label}
                <span className="font-mono text-[10px] text-muted/60">
                  0{site.nav.indexOf(item) + 1}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center rounded-full bg-fg px-4 py-2.5 text-sm font-medium text-bg"
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
