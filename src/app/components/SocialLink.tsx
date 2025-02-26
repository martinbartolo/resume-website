import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SocialLinkProps {
  href: string;
  label: string;
}

export function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-0.5 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground sm:gap-1 sm:text-sm md:text-base"
    >
      {label}
      <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-4" />
    </Link>
  );
}
