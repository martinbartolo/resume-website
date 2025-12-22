import Link from "next/link";

type MarkdownTextProps = {
  children: string;
};

export default function MarkdownText({ children }: MarkdownTextProps) {
  const parts = children.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = /\[([^\]]+)\]\(([^)]+)\)/.exec(part);

        if (match) {
          const [, text, url] = match;
          return (
            <Link
              key={index}
              href={url ?? ""}
              className="hover:text-foreground underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </Link>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
