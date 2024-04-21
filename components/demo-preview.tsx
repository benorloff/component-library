"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";

type DevicePreview = "desktop" | "tablet" | "smartphone"

export const DemoPreview = () => {
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
            <CardContent className="flex justify-center items-center p-8 bg-dot-grid bg-center h-96">
                <div className="w-full h-full grow border rounded-md bg-background">
                    <div>Desktop</div>
                </div>
                {/* <div className="border rounded-md p-8 bg-background">
                    <div>Content</div>
                </div> */}
            </CardContent>
        </Card>
    )
}