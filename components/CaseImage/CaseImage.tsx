import Image from "next/image";

export default function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="caseImg">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
