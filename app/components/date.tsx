export default function Date({ children }: { children: React.ReactNode }) {
  return (
    <p className="min-w-[160px] whitespace-nowrap text-zinc-500">{children}</p>
  );
}
