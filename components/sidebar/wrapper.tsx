"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar-store";

interface WrapperProps {
    children: React.ReactNode;
};

export const Wrapper = ({
    children,
}: WrapperProps) => {
    const { collapsed } = useSidebar((state) => state);

    return (
        <aside
            className={cn(
                "fixed container py-8 flex flex-col w-48 h-full bg-background border-r",
                collapsed && "hidden"
            )}
        >
            {children}
        </aside>
    )
};