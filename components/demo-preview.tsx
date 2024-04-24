"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Index } from "@/gluons/demo";
import { DemoPreviewContainer } from "./demo-preview-container";

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
        <Card className="bg-dot-grid bg-top">
            <CardHeader className="border-b py-4 bg-background">
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
                    "py-8 flex justify-center items-start h-full",
                    devicePreview === "desktop" && "px-8",
                )}
            >
                <DemoPreviewContainer devicePreview={devicePreview}>
                    {children}
                </DemoPreviewContainer>
            </CardContent>
        </Card>
    )
}