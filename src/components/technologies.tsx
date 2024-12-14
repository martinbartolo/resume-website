export default function Technologies({ list }: { list: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {list.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center rounded-sm bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
