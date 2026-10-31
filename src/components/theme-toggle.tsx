"use client";

import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    root.style.colorScheme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage can be unavailable in private browsing; the theme still applies.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="grid size-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}
