"use client";

import { NavItem } from "./nav-item";

export const Navigation = () => {
  const routes = [
    {
      label: "Carousel",
      href: "/gluons/carousel",
    },
    {
      label: "Content Accordion",
      href: "/gluons/content-accordion",
    },
    {
      label: "Header",
      href: "/gluons/header",
    },
    {
      label: "HoverGrid",
      href: "/gluons/hover-grid",
    },
    {
      label: "Playground",
      href: "/gluons/playground",
    },
  ];

  return (
    <ul className="flex flex-col gap-2">
      {routes.map((route, i) => (
        <NavItem
          key={i}
          label={route.label}
          href={route.href}
        />
      ))}
    </ul>
  );
};
