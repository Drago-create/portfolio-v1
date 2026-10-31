/**
 * All of the content for the site lives here.
 * Edit this file to make the portfolio yours — no need to touch the components.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "mail";
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  visual: "dashboard" | "mobile" | "editor";
  featured?: boolean;
};

export const site = {
  name: "Tanay Sinha",
  initials: "ts",
  role: "Full-Stack Developer",
  location: "Bengaluru, India",
  timezone: "IST · UTC+5:30",
  email: "hello@tanaysinha.dev",
  availability: "Open to new work",

  headline: {
    lead: "I build",
    emphasis: "fast, thoughtful",
    tail: "products for the web.",
  },

  description:
    "Full-stack developer focused on the details that make software feel effortless — clean interfaces, sensible architecture, and pages that load before you notice.",

  socials: [
    { label: "GitHub", href: "https://github.com/tanaysinha", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/tanaysinha",
      icon: "linkedin",
    },
    { label: "X", href: "https://x.com/tanaysinha", icon: "x" },
    { label: "Email", href: "mailto:hello@tanaysinha.dev", icon: "mail" },
  ] satisfies SocialLink[],

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  about: [
    "I'm a developer based in Bengaluru who cares about the whole product — from the first sketch to the last empty state. I spend most of my day in TypeScript, React, and Next.js, and I'm happiest when a tricky interaction ends up feeling simple.",
    "Before going full-time into product engineering, I built sites for small studios and independent makers. That taught me to ship quickly, ask better questions, and treat performance and accessibility as part of the design, not an afterthought.",
  ],

  facts: [
    { label: "Based in", value: "Bengaluru, IN" },
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: "Product engineering" },
    { label: "Availability", value: "Open to work" },
  ],

  skills: [
    {
      label: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zod"],
    },
    {
      label: "Backend",
      items: ["Node.js", "PostgreSQL", "Prisma", "tRPC", "Redis"],
    },
    {
      label: "Tooling",
      items: ["Git", "Vercel", "Playwright", "Figma"],
    },
    {
      label: "Exploring",
      items: ["Rust", "Design systems", "Local-first apps"],
    },
  ],

  projects: [
    {
      slug: "northstar",
      title: "Northstar",
      summary:
        "A lightweight analytics dashboard for early-stage teams. Customisable widgets, sub-second queries, and reports that read like a story instead of a spreadsheet.",
      year: "2026",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      liveUrl: "https://example.com",
      sourceUrl: "https://github.com/tanaysinha",
      visual: "dashboard",
      featured: true,
    },
    {
      slug: "lumen",
      title: "Lumen",
      summary:
        "A calm habit tracker for iOS and Android. Offline-first, with gentle streaks and a home screen that stays out of your way.",
      year: "2025",
      tags: ["React Native", "Expo", "SQLite"],
      liveUrl: "https://example.com",
      sourceUrl: "https://github.com/tanaysinha",
      visual: "mobile",
    },
    {
      slug: "draft",
      title: "Draft",
      summary:
        "A collaborative markdown editor built for long-form writing. Presence, comments, and conflict-free sync that works on a flaky train connection.",
      year: "2024",
      tags: ["React", "Yjs", "WebRTC", "Node.js"],
      liveUrl: "https://example.com",
      sourceUrl: "https://github.com/tanaysinha",
      visual: "editor",
    },
  ] satisfies Project[],

  experience: [
    {
      role: "Senior Full-Stack Developer",
      company: "Northwind Studio",
      period: "2024 — Present",
      location: "Bengaluru",
      points: [
        "Lead engineer on a multi-tenant SaaS platform serving 40k monthly users.",
        "Cut median page load from 3.1s to 0.9s by moving rendering to the edge and trimming the client bundle.",
        "Mentor two junior developers and run the frontend guild.",
      ],
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      role: "Frontend Developer",
      company: "Loop Labs",
      period: "2022 — 2024",
      location: "Remote",
      points: [
        "Built the design system and component library used across four products.",
        "Partnered with design to ship a full rebrand in six weeks without a feature freeze.",
        "Introduced Playwright end-to-end tests, reducing release regressions by roughly 60%.",
      ],
      tags: ["React", "Design systems", "Playwright"],
    },
    {
      role: "Freelance Developer",
      company: "Independent",
      period: "2020 — 2022",
      location: "Remote",
      points: [
        "Designed and shipped 15+ marketing sites and small web apps for founders and studios.",
        "Handled everything from scoping and design to deployment and handover.",
      ],
      tags: ["JavaScript", "CSS", "Webflow"],
    },
  ],
};
