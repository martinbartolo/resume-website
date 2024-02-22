export default function Date({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-subcontent min-w-[175px] whitespace-nowrap">
      {children}
    </p>
  );
}
