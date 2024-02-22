export default function Technologies({ list }: { list: string[] }) {
  return (
    <p className="text-subcontent">
      {list.map((item, index) => (
        <span key={index}>
          {item}
          {index !== list.length - 1 && " • "}
        </span>
      ))}
    </p>
  );
}
