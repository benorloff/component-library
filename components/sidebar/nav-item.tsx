"use client";

import Link from "next/link";

import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar-store";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";

interface NavItemProps {
    label: string;
    href: string;
};

export const NavItem = ({
    label,
    href,
}: NavItemProps) => {

    const { collapsed } = useSidebar((state) => state);

    return (
        <>
        {collapsed && (
            <Hint label={label} side="right" align="start" asChild>
                <Button
                    asChild
                    variant="ghost"
                    className={cn(
                        "w-full h-12",
                        collapsed ? "justify-center" : "justify-start",
                    )}
                >
                    <Link href={href}>
                        <div className="flex items-center gap-x-2">
                            {!collapsed && (
                                <span>
                                    {label}
                                </span>
                            )}
                        </div>
                    </Link>
                </Button>
            </Hint>
        )}
        {!collapsed && (
                <Link href={href}>
                    <div className="flex items-center gap-x-2 text-muted-foreground hover:underline">
                        <span>
                            {label}
                        </span>
                    </div>
                </Link>
        )}  
        </>
    )


}