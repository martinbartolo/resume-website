import Link from "next/link";
import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  href: string;
  imagePath?: string;
};

export const PortfolioCard = ({
  title,
  href,
  imagePath,
}: PortfolioCardProps) => {
  return (
    <Link href={href}>
      <div className="group overflow-hidden rounded-xl border border-foreground/10 transition-all hover:border-primary">
        <div className="relative aspect-video bg-muted">
          {imagePath && (
            <Image
              src={imagePath}
              alt={`${title} preview`}
              fill
              className="object-contain p-10"
            />
          )}
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          {imagePath && (
            <Image
              src={imagePath}
              alt={`${title} preview`}
              height={16}
              width={16}
              className="w-auto"
            />
          )}
          <h3 className="text-lg text-foreground">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
