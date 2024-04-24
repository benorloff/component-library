import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, LayoutDashboard, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SidebarDemo = () => {
    
    return (
        <div className="@container relative w-full h-full max-h-[500px] flex flex-col bg-muted/25">
            <div className="absolute h-14 w-full flex items-center justify-between gap-4 px-8 border-b bg-background">
                <div className="flex gap-4 items-center justify-start">
                    <Button size="icon" variant="ghost" className="flex @lg:hidden">
                        <AlignLeft />
                    </Button>
                    <Image src="/logoipsum.svg" width={100} height={30} alt="Logo" className="brightness-150"/>
                </div>
                <div className="h-6 w-32 bg-muted rounded-md" />
            </div>
            <div className="relative flex flex-row mt-14 h-full w-full overflow-hidden bg-background">
                <div className="hidden @lg:flex flex-col gap-2 absolute top-0 container py-6 w-48 h-full border-r bg-background">
                    <p>Dashboard</p>
                    <p>Analytics</p>
                    <p>Inventory</p>
                    <p>Reports</p>
                    <p>Settings</p>
                </div>
                <div className="h-full max-h-[500px] w-full p-8 @lg:ml-48 space-y-4 overflow-scroll">
                    <div className="h-12 flex-1 bg-muted rounded-md"/>
                    <div className="h-96 flex-1 bg-muted rounded-md"/>
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex-1 h-48 bg-muted rounded-md"/>
                        <div className="flex-1 h-48 bg-muted rounded-md"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarDemo;