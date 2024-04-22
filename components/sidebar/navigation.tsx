"use client";

import { Cpu, Laptop, Layout, Tag } from "lucide-react";

import { NavItem } from "./nav-item";

export const Navigation = () => {
  const routes = [
    {
      label: "Getting Started",
      href: "#",
    },
    {
      label: "Docs",
      href: "#",
    },
    {
      label: "Gluons",
      href: "#",
    },
    {
      label: "Components",
      href: "#",
    },
  ];

  return (
    <ul className="flex flex-col gap-2">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          href={route.href}
        />
      ))}
    </ul>
  );
};
