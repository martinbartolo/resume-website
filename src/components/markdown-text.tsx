import Link from "next/link";

interface MarkdownTextProps {
  children: string;
}

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
              className="underline transition-colors hover:text-foreground"
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
