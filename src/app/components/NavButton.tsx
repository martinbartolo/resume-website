import Link from "next/link";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

export function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="font-medium tracking-wide text-foreground/90 uppercase underline decoration-primary decoration-1 underline-offset-4 transition-colors hover:text-primary sm:text-lg md:text-xl"
    >
      {children}
    </Link>
  );
}
