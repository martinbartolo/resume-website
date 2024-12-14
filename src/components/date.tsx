export default function Date({ children }: { children: React.ReactNode }) {
  return (
    <p className="min-w-[150px] whitespace-nowrap text-sm font-medium text-muted-foreground">
      {children}
    </p>
  );
}
