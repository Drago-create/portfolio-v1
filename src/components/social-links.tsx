import { site } from "@/content/site";
import { GitHub, LinkedIn, Mail, X } from "@/components/icons";

const iconMap = {
  github: GitHub,
  linkedin: LinkedIn,
  x: X,
  mail: Mail,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {site.socials.map((social) => {
        const Icon = iconMap[social.icon];
        const isExternal = social.href.startsWith("http");

        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              aria-label={social.label}
              className="grid size-9 place-items-center rounded-full border border-line bg-surface text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
