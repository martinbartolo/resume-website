import Image from "next/image";
import { useEffect } from "react";
import Modal from "react-modal";

type ImageModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ImageModal({ isOpen, setIsOpen }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full outline-none"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Image
        className="rounded-full"
        src="/avatar.jpg"
        alt="avatar"
        width={500}
        height={500}
      />
    </Modal>
  );
}
