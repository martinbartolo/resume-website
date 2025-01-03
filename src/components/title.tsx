import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Title({
  children,
  link,
}: {
  children: React.ReactNode;
  link?: string | null;
}) {
  return (
    <div className="w-fit">
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-medium text-foreground decoration-foreground transition-colors hover:text-primary hover:underline"
        >
          {children}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:underline" />
        </Link>
      ) : (
        <p className="text-sm font-medium text-foreground">{children}</p>
      )}
    </div>
  );
}
