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
      className="group inline-flex items-center gap-0.5 text-sm font-medium tracking-wide text-foreground/60 uppercase transition-colors hover:text-primary md:gap-1 md:text-base"
    >
      {label}
      <ArrowUpRight className="size-3 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary md:size-4" />
    </Link>
  );
}
