import Image from "next/image";

export default function Signature({ title }: { title: string }) {
  return (
    <div className="relative w-full h-40">
      <div className="absolute left-1/2 -translate-x-1/2 top-14 text-5xl font-semibold text-white z-10">
        {title}
      </div>
      <Image
        src="/forest.png"
        alt="Example image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
