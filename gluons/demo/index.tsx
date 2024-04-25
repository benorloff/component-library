import { lazy } from "react";

export interface IndexProps {
    [key: string]: {
        [key: string]: {
            name: string,
            component: React.LazyExoticComponent<React.ComponentType<any>>,
            files?: string[],
        }
    }
}

export const Index: Record<string, any> = {
    "demo": {
        "carousel-demo": {
            name: "carousel-demo",
            component: lazy(() => import("@/gluons/demo/carousel-demo")),
            files: ["gluons/demo/carousel-demo.tsx"]
        },
        "content-accordion-demo": {
            name: "content-accordion-demo",
            component: lazy(() => import("@/gluons/demo/content-accordion-demo")),
            files: ["gluons/demo/content-accordion-demo.tsx"]
        },
        "header-demo": {
            name: "header-demo",
            component: lazy(() => import("@/gluons/demo/header-demo")),
            files: ["gluons/demo/header-demo.tsx"]
        },
        "hover-grid-demo": {
            name: "hover-grid-demo",
            component: lazy(() => import("@/gluons/demo/hover-grid-demo")),
            files: ["gluons/demo/hover-grid-demo.tsx"]
        },
        "sidebar-demo": {
            name: "sidebar-demo",
            component: lazy(() => import("@/gluons/demo/sidebar-demo")),
            files: ["gluons/demo/sidebar-demo.tsx"]
        },
    },
}