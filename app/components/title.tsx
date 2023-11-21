import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Title({
  children,
  link,
}: {
  children: React.ReactNode;
  link?: string | null;
}) {
  return (
    <div className="w-full">
      {link ? (
        <a href={link} target="_blank" className="flex items-end gap-1">
          <p className="text-white">{children}</p>
          <ArrowTopRightIcon className="mb-0.5" />
        </a>
      ) : (
        <p className="text-white">{children}</p>
      )}
    </div>
  );
}
