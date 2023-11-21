import Button from "./button";

export default function Nav() {
  return (
    <div className="fixed flex w-full items-center justify-between bg-black p-4 md:bg-transparent">
      <h1 className="cursor-default text-3xl font-bold transition ease-in-out hover:scale-105">
        MB
      </h1>
      <Button>
        <a
          href="/MartinBartolo_Resume.pdf"
          target="_blank"
          className="hover:no-underline"
        >
          Resume PDF
        </a>
      </Button>
    </div>
  );
}
