import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

export const Resizable = ({
    devicePreview,
    children,
}: {
    devicePreview: "desktop" | "tablet" | "smartphone" | undefined,
    children: React.ReactNode,
}) => {
    return (
        <ResizablePanelGroup 
            direction="horizontal"
            className={cn(
                "items-center min-w-96",
                devicePreview === "desktop" && "w-full",
                devicePreview === "tablet" && "max-w-lg",
                devicePreview === "smartphone" && "max-w-sm",
            
            )}
        >
            <ResizablePanel defaultSize={100} className="min-w-96">
                    <div className="max-h-[500px] flex flex-col justify-center overflow-auto bg-[url('/dot-grid.svg')] bg-center">
                        {children}
                    </div>
            </ResizablePanel>
            <ResizableHandle className="w-1.5 h-8 ml-1.5 my-auto bg-muted-foreground rounded-full" />
            <ResizablePanel className="w-[1px] min-w-[1px]" />
        </ResizablePanelGroup>
    )
}