import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export const Resizable = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <ResizablePanelGroup 
            direction="horizontal"
            className="w-full"
        >
            <ResizablePanel defaultSize={100} className="min-w-96">
                    <div className="h-[500px] flex flex-col justify-center overflow-auto border border-foreground bg-[url('/dot-grid.svg')] bg-center">
                        {children}
                    </div>
            </ResizablePanel>
            <ResizableHandle className="w-1.5 h-8 ml-1.5 my-auto bg-muted-foreground rounded-full" />
            <ResizablePanel className="w-[1px] min-w-[1px]">
                <div />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}