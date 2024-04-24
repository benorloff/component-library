import { cn } from "@/lib/utils"
import { Resizable } from "./resizable"

export const DemoPreviewContainer = ({
    devicePreview,
    children,
    className,
}: {
    devicePreview: "desktop" | "tablet" | "smartphone" | undefined,
    className?: string,
    children: React.ReactNode,
}) => {
    return (
        <Resizable devicePreview={devicePreview}>
            <div className={cn(
                "@container grow border rounded-md bg-background max-h-full overflow-auto",
            )}>
                {children}
            </div>
        </Resizable>
    )
}