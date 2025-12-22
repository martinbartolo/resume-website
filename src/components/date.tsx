export default function Date({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground min-w-[150px] text-sm font-medium whitespace-nowrap">
      {children}
    </p>
  );
}
