"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkHref = (href: string) => {
    if (href === "/#contact") return "#contact";
    return href;
  };

  const handleContactClick = (e: React.MouseEvent) => {
    // Nav + Footer live in the root layout, so the "#contact" footer is
    // present on every page — scroll to it in place rather than forcing a
    // navigation to "/". Always scroll explicitly rather than relying on
    // hash-change navigation, since the hash may already be "#contact"
    // (e.g. after scrolling back up manually), in which case the browser
    // won't re-trigger a scroll on click.
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      // The footer is still collapsed at this point, so this first scroll
      // lands short of the true bottom — but it brings enough of the
      // footer into view to trigger the expand, which grows it further.
      // How long that takes varies with page length and its own
      // transition, and its min-height transition doesn't reliably fire
      // "transitionend" (it gets interrupted/restarted by the scroll
      // itself), so keep re-correcting the scroll target for a bit until
      // it settles rather than trying to catch one exact moment.
      let ticks = 0;
      const correct = () => {
        el.scrollIntoView({ behavior: "smooth", block: "end" });
        ticks += 1;
        if (ticks < 12) window.setTimeout(correct, 100);
      };
      correct();
    }
    setOpen(false);
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img className="monogram" src="/images/nt-logo.svg" alt="NT" />
        </Link>

        <nav className="navlinks">
          {links.map((link) => (
            <Link
              key={link.href}
              href={linkHref(link.href)}
              className={`navlink${pathname === link.href ? " active" : ""}`}
              onClick={link.label === "Contact" ? handleContactClick : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="navToggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Normal flow (not position: fixed) — the header itself grows
          taller to reveal this via .nav.open's max-height, rather than
          this being a separately positioned panel. */}
      <div className="navDrawer">
        {links.map((link) => (
          <Link
            key={link.href}
            href={linkHref(link.href)}
            className={`navlink${pathname === link.href ? " active" : ""}`}
            onClick={link.label === "Contact" ? handleContactClick : () => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
