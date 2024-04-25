"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Index } from "@/gluons/demo";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ImperativePanelGroupHandle, ImperativePanelHandle, PanelResizeHandle } from "react-resizable-panels";


type DevicePreview = "desktop" | "tablet" | "smartphone" | undefined

export const DemoPreview = ({
    children,
}: {
    children: React.ReactNode,
}) => {    
    const ref = useRef<ImperativePanelGroupHandle>(null)

    const resetLayout = (layout: number[]) => {
        const panelGroup = ref.current;
        if (!panelGroup) return;
        panelGroup.setLayout(layout)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const device = e.currentTarget.dataset.deviceName as DevicePreview
        const panelGroup = ref.current;
        if (!panelGroup) return;

        switch (true) {
            case device === "desktop":
                resetLayout([0,100,0])
                break;
            case device === "tablet":
                resetLayout([20,60,20])
                break;
            case device === "smartphone":
                resetLayout([30,40,30])
                break;
        }
    }

    return (
        <Card className="bg-dot-grid bg-top">
            <CardHeader className="border-b py-4 bg-background rounded-t-lg">
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
                    "py-8 h-[600px] bg-foreground/5",
                )}
            >
                <ResizablePanelGroup 
                    ref={ref}
                    direction="horizontal"
                    className="items-center"
                >
                    <ResizablePanel defaultSize={0} />
                    <ResizableHandle className="w-1.5 h-8 mr-1.5 my-auto bg-muted-foreground rounded-full" />
                    <ResizablePanel defaultSize={100} className="min-w-96">
                            <div className="max-h-[500px] flex flex-col justify-center overflow-auto bg-[url('/dot-grid.svg')] bg-center">
                                <div className={cn(
                                    "@container grow border rounded-md bg-background max-h-full overflow-auto",
                                )}>
                                    {children}
                                </div>
                            </div>
                    </ResizablePanel>
                    <ResizableHandle className="w-1.5 h-8 ml-1.5 my-auto bg-muted-foreground rounded-full" />
                    <ResizablePanel defaultSize={0} />
                </ResizablePanelGroup>
            </CardContent>
        </Card>
    )
}