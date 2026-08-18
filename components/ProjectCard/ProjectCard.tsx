import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  image: { src: string; alt: string };
  comingSoon?: boolean;
  wide?: boolean;
};

export default function ProjectCard({
  title,
  description,
  href,
  image,
  comingSoon,
  wide,
}: ProjectCardProps) {
  const className = `card${comingSoon ? " comingSoon" : ""}${wide ? " cardWide" : ""}`;
  const content = (
    <>
      <div className="cardThumb">
        {comingSoon ? (
          <div className="cardPlaceholder">
            <span>Coming soon</span>
          </div>
        ) : (
          <Image src={image.src} alt={image.alt} fill sizes="50vw" style={{ objectFit: "cover" }} />
        )}
      </div>
      <div className="cardBody">
        <div className="cardText">
          <span className="cardTitle">{title}</span>
          <span className="cardDesc">{description}</span>
        </div>
        <span className={`arrow${comingSoon ? " muted" : ""}`}>→</span>
      </div>
    </>
  );

  if (comingSoon || !href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
