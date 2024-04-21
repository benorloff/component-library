"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { cn } from "@/lib/utils"
import { LayoutDashboard } from "lucide-react"

export const Sidebar = () => {
    return (
        <aside className="absolute left-0 top-0 flex flex-col h-full w-48 p-8 bg-background border-r ">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            asChild
                            variant="ghost"
                            className={cn(
                                "w-full h-12",
                                // collapsed ? "justify-center" : "justify-start",
                            )}
                        >
                            <Link href={'#'}>
                                
                                <div className="flex items-center gap-x-2">
                                    <LayoutDashboard className="h-4 w-4" />
                                    <span>Dashboard</span>
                                    {/* <Icon className={cn(
                                        "h-4 w-4",
                                        collapsed ? "mr-0" : "mr-2",
                                    )} />
                                    {!collapsed && (
                                        <span>
                                            {label}
                                        </span>
                                    )} */}
                                </div>
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>Dashboard</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </aside>
    )
}