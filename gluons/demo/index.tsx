import { lazy } from "react";

export const Index: Record<string, any> = {
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
}