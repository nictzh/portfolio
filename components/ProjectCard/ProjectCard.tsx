"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  image: { src: string; alt: string };
  comingSoon?: boolean;
  wide?: boolean;
  locked?: boolean;
};

const LOCK_PASSWORD = "8784";

export default function ProjectCard({
  title,
  description,
  href,
  image,
  comingSoon,
  wide,
  locked,
}: ProjectCardProps) {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const isLocked = Boolean(locked) && !unlocked;
  const className = `card${comingSoon ? " comingSoon" : ""}${wide ? " cardWide" : ""}${isLocked ? " locked" : ""}`;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.value;
    setValue(next);
    setError(false);

    if (next.length === LOCK_PASSWORD.length) {
      if (next === LOCK_PASSWORD) {
        setUnlocked(true);
        if (href) router.push(href);
      } else {
        setError(true);
        setValue("");
      }
    }
  }

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
        <span className={`arrow${comingSoon ? " muted" : ""}`}>»</span>
      </div>
      {isLocked && (
        <div className="cardLockOverlay">
          <span className="cardLockIcon">🔒</span>
          <span className="cardLockLabel">Password required</span>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            placeholder="Password"
            value={value}
            onChange={handleChange}
            className="cardLockInput"
          />
          {error && <span className="cardLockError">Incorrect password</span>}
        </div>
      )}
    </>
  );

  if (comingSoon || !href || isLocked) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
