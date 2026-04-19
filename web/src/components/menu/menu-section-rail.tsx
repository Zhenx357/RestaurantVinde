"use client";

import { useEffect, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

type MenuSectionRailProps = {
  links: SectionLink[];
};

export function MenuSectionRail({ links }: MenuSectionRailProps) {
  const contentLinks = links.filter((link) => link.id !== "drikkevarer");
  const [activeId, setActiveId] = useState(contentLinks[0]?.id ?? "");

  useEffect(() => {
    const sections = contentLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [contentLinks]);

  return (
    <aside
      className="fixed top-28 z-20 hidden xl:block"
      style={{ left: "max(3rem, calc(50vw - 45rem))", width: "16rem" }}
    >
      <nav aria-label="Menu sektioner">
        <ul className="space-y-6">
          {links.map((link) => {
            const isActive = activeId === link.id;
            const href = link.id === "drikkevarer" ? "/drinks" : `#${link.id}`;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`block font-display text-[1.15rem] leading-[1.2] transition-colors ${
                    isActive
                      ? "font-bold text-[var(--primary-strong)]"
                      : "text-[color:rgba(90,64,60,0.72)] hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
