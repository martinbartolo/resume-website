import Link from "next/link";
import UnderlineToBackground from "./ui/underline-to-background";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

export function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link href={href}>
      <UnderlineToBackground
        label={children as string}
        className="font-medium tracking-wide uppercase sm:text-lg md:text-xl"
      />
    </Link>
  );
}
