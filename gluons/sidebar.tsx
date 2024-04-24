"use client"

import Link from "next/link"
import { Button } from "../components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import { cn } from "@/lib/utils"
import { LayoutDashboard } from "lucide-react"
import React from "react"
import { useSidebar } from "@/hooks/use-sidebar-store"
import { cva } from "class-variance-authority"

const Sidebar = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) => {
    const { collapsed } = useSidebar((state) => state);
    return (
        <aside
            ref={ref}
            className={cn(
                "fixed p-8 flex flex-col h-full bg-background border-r",
                collapsed ? "w-16" : "w-48",
            )}
            {...props}
        />
    );
});
Sidebar.displayName = "Sidebar";

const SidebarList = React.forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn(
            "flex flex-col gap-2",
            className
        )}
        {...props}
    />
));
SidebarList.displayName = "SidebarList";

const SidebarItem = React.forwardRef<
    HTMLLIElement,
    React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={cn(
            "flex items-center gap-x-2",
            className
        )}
        {...props}
    />
));
SidebarItem.displayName = "SidebarItem";

const sidebarLinkStyle = cva(
    "group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  )

const SidebarLink = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
    <a
        ref={ref}
        className={cn(
            sidebarLinkStyle(),
            "items-center gap-x-2",
            className
        )}
        {...props}
    >
        {children}
    </a>
));
SidebarLink.displayName = "SidebarLink";

const SidebarToggle = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
    const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
    const label = collapsed ? "Expand" : "Collapse";
    return (
        <Button
            ref={ref}
            onClick={collapsed ? onExpand : onCollapse}
            className={cn(
                "flex items-center gap-x-2",
                className
            )}
            {...props}
        >
            {label}
        </Button>
    );
});
SidebarToggle.displayName = "SidebarToggle";

export {
    Sidebar,
    SidebarList,
    SidebarItem,
    SidebarLink,
    SidebarToggle,
};

