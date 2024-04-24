import { cn } from "@/lib/utils"

export const DemoPreviewContainer = ({
    devicePreview,
    children,
    className,
}: {
    devicePreview: "desktop" | "tablet" | "smartphone",
    className?: string,
    children: React.ReactNode,
}) => {
    return (
        <div className={cn(
            "@container grow border rounded-md bg-background max-h-full overflow-auto",
            devicePreview === "desktop" && "w-full",
            devicePreview === "tablet" && "max-w-lg",
            devicePreview === "smartphone" && "max-w-sm",
        )}>
            {children}
        </div>
    )
}