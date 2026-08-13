import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
  image?: { src: string; alt: string };
};

export default function ProjectCard({
  title,
  description,
  href,
  comingSoon,
  image,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="cardThumb">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="cardPlaceholder">
            <span>Coming soon</span>
          </div>
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
    return <div className="card comingSoon">{content}</div>;
  }

  return (
    <Link href={href} className="card">
      {content}
    </Link>
  );
}
