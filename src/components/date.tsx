export default function Date({ children }: { children: React.ReactNode }) {
  return (
    <p className="min-w-[150px] text-sm font-medium whitespace-nowrap text-muted-foreground">
      {children}
    </p>
  );
}
