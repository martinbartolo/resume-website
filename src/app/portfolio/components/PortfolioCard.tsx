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
              className="object-cover"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg text-foreground">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
