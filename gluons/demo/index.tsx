import { lazy } from "react";

export interface IndexProps {
    [key: string]: {
        [key: string]: {
            name: string,
            component: React.LazyExoticComponent<React.ComponentType<any>>,
        }
    }
}

export const Index: Record<string, any> = {
    "demo": {
        "carousel-demo": {
            name: "carousel-demo",
            component: lazy(() => import("@/gluons/demo/carousel-demo")),
        },
        "content-accordion-demo": {
            name: "content-accordion-demo",
            component: lazy(() => import("@/gluons/demo/content-accordion-demo")),
        },
        "header-demo": {
            name: "header-demo",
            component: lazy(() => import("@/gluons/demo/header-demo")),
        },
        "hover-grid-demo": {
            name: "hover-grid-demo",
            component: lazy(() => import("@/gluons/demo/hover-grid-demo")),
        },
        "sidebar-demo": {
            name: "sidebar-demo",
            component: lazy(() => import("@/gluons/demo/sidebar-demo")),
        },
    },
}