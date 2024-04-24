"use client";

import { Index, IndexProps } from "@/gluons/demo";
import { NavItem } from "./nav-item";

export const Navigation = () => {
  
  const demoIndex = Object.keys(Index["demo"]);

  if (!demoIndex) {
    return null;
  }

  const routes = demoIndex.map((route) => {
    let href = route.replace(/-demo/g, '')
    let label = href
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
      
    return { href, label }
  })

  return (
    <div className="flex flex-col gap-2 text-sm">
      <h4 className="font-semibold pb-2">Docs</h4>
      <ul className="flex flex-col gap-2">
        {routes.map((route, i) => (
            <NavItem
              key={i}
              label={route.label}
              href={`/docs/${route.href}`}
            />
        ))}
      </ul>
    </div>
  );
};
