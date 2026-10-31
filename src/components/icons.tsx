import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Outline({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Outline>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Outline>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Outline>
  );
}

export function Mail(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </Outline>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Outline>
  );
}

export function Sun(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Outline>
  );
}

export function Moon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M21 13.2A8.5 8.5 0 1 1 10.8 3a6.8 6.8 0 0 0 10.2 10.2Z" />
    </Outline>
  );
}

export function Menu(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Outline>
  );
}

export function Close(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Outline>
  );
}

export function Download(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
    </Outline>
  );
}

export function GitHub(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5l-.01-1.94c-2.92.63-3.54-1.24-3.54-1.24-.48-1.22-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.09-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.08a10 10 0 0 1 5.26 0c2-1.36 2.88-1.08 2.88-1.08.57 1.45.21 2.52.1 2.79.68.74 1.09 1.67 1.09 2.82 0 4.02-2.45 4.9-4.79 5.17.38.33.72.97.72 1.96l-.01 2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21h-4V9Z" />
    </svg>
  );
}

export function X(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-6.08l-4.76-6.22L5.45 21H2.43l7.06-8.07L2.25 3h6.23l4.3 5.69L17.53 3Zm-1.06 16.2h1.67L7.6 4.7H5.8l10.67 14.5Z" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </Outline>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 3l1.7 4.9L18.5 9.6l-4.8 1.7L12 16l-1.7-4.7L5.5 9.6l4.8-1.7L12 3Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </Outline>
  );
}
