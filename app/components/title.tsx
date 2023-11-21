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
        <a href={link} target="_blank">
          <p className="text-white">
            {children}
            <ArrowTopRightIcon className="ml-1 inline" />
          </p>
        </a>
      ) : (
        <p className="text-white">{children}</p>
      )}
    </div>
  );
}
