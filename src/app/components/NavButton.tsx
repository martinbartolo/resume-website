import Link from "next/link";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

export function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="border-b-[1.5px] border-muted-foreground/60 text-lg font-medium tracking-wide text-foreground uppercase transition-colors hover:text-muted-foreground sm:text-xl md:text-2xl"
    >
      {children}
    </Link>
  );
}
