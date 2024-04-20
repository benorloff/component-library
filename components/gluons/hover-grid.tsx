import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react"
import React from "react";

const HoverGrid = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn(
            "grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y w-full",
            className
        )}
        {...props}
    />

));
HoverGrid.displayName = "HoverGrid";

const HoverGridCell = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col bg-background group gap-4 hover:gap-2 p-8 hover:bg-muted/40", 
            "justify-between transition-all ease-in-out outline outline-1 duration-500",
            className
        )}
        {...props}
    />
));
HoverGridCell.displayName = "HoverGridCell";

const HoverGridHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-row items-center justify-between", className)}
        {...props}
    />
));
HoverGridHeader.displayName = "HoverGridHeader";

const HoverGridLeader = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("uppercase text-sm pb-8 w-full flex flex-row items-center justify-between transition-all ease-in-out duration-500", className)}
        {...props}
    >
        {children}
    </div>
));
HoverGridLeader.displayName = "HoverGridLeader";

const HoverGridContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col grow gap-4 group-hover:gap-2 group-hover:pb-6 transition-all ease-in-out duration-500 justify-end", className)}
        {...props}
    />
));
HoverGridContent.displayName = "HoverGridContent";

const HoverGridTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-3xl", className)}
        {...props}
    />
));
HoverGridTitle.displayName = "HoverGridTitle";

const HoverGridDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-muted-foreground group-hover:text-primary transition-colors duration-500 ease-in-out", className)}
        {...props}
    />
));
HoverGridDescription.displayName = "HoverGridDescription";

const HoverGridFooter = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-muted-foreground font-semibold text-lg group-hover:text-primary transition-colors duration-500 ease-in-out", className)}
        {...props}
    />
));
HoverGridFooter.displayName = "HoverGridFooter";


export {
    HoverGrid,
    HoverGridCell,
    HoverGridHeader,
    HoverGridLeader,
    HoverGridContent,
    HoverGridTitle,
    HoverGridDescription,
    HoverGridFooter,
};