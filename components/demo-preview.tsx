"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, LayoutDashboard, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";

type DevicePreview = "desktop" | "tablet" | "smartphone"

export const DemoPreview = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    const [devicePreview, setDevicePreview] = useState<DevicePreview>("desktop")

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const device = e.currentTarget.dataset.deviceName as DevicePreview
        setDevicePreview(device)
    }

    return (
        <Card>
            <CardHeader className="border-b py-4">
                <div className="flex flex-row items-center justify-between">
                    <div>Header</div>
                    <div className="space-x-2">
                        <Button 
                            size="icon" 
                            variant="outline"
                            data-device-name="desktop"
                            onClick={(e) => handleClick(e)}
                        >
                            <Laptop className="h-4 w-4" />
                        </Button>
                        <Button 
                            size="icon" 
                            variant="outline"
                            data-device-name="tablet"
                            onClick={(e) => handleClick(e)}
                        >
                            <Tablet className="h-4 w-4" />
                        </Button>
                        <Button 
                            size="icon" 
                            variant="outline"
                            data-device-name="smartphone"
                            onClick={(e) => handleClick(e)}
                        >
                            <Smartphone className="h-4 w-4" />
                        </Button>
                    </div>
                    <div>Actions</div>
                </div>
            </CardHeader>
            <CardContent 
                className={cn(
                    "p-0 flex justify-center items-center bg-dot-grid bg-center h-[500px] overflow-hidden",
                    devicePreview !== "desktop" && "p-8",
                )}
            >
                <div className={cn(
                    "@container h-full bg-background",
                    devicePreview === "desktop" && "relative w-full",
                    devicePreview !== "desktop" && "grow border rounded-md bg-background",
                    devicePreview === "tablet" && "max-w-lg",
                    devicePreview === "smartphone" && "max-w-sm",
                )}>
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}