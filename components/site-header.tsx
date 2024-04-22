"use client"

import { useSidebar } from "@/hooks/use-sidebar-store";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

export const SiteHeader = () => {
    const { collapsed } = useSidebar((state) => state);
    return (
        <header className="fixed w-full top-0 z-50 bg-background border-b">
            <div className="container max-w-screen-2xl flex h-16 items-center justify-between">
                <div className="flex gap-4 items-center">
                    {collapsed && (
                        <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="ghost">
                                <Menu className="h-6 w-6"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Glui</SheetTitle>
                                <SheetDescription>Component library built on shadcn/ui</SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-2">
                                <p>Docs</p>
                                <p>Gluons</p>
                                <p>Playground</p>
                            </div>
                        </SheetContent>
                    </Sheet>
                    )}
                    <div className="text-2xl">glui</div>
                </div>
                <ThemeToggle />
            </div>
        </header>
    )
}