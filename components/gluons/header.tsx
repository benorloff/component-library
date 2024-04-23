"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Head } from "react-day-picker";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

const Header = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) => (
    <header
        ref={ref}
        className={cn(
            "@container sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            className
        )}
        {...props}
    />

));
Header.displayName = "Header";

const HeaderContainer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "container flex flex-row items-center justify-between h-14 gap-4 py-0 @lg:py-2 mx-auto",
            className
        )}
        {...props}
    />
));
HeaderContainer.displayName = "HeaderContainer";

const HeaderLeft = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex-1 flex flex-row items-center justify-start h-full gap-4",
            className
        )}
        {...props}
    />
));
HeaderLeft.displayName = "HeaderLeft";

const headerCenterVariants = cva(
    "relative flex-1 hidden @lg:flex flex-row items-center justify-center h-full gap-4",
    {
        variants: {
            align: {
                left: "justify-start",
                center: "justify-center",
                right: "justify-end",
            }
        },
        defaultVariants: {
            align: "center",
        },
    }
);

export interface HeaderCenterProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerCenterVariants> {
        asChild?: boolean;
    }

const HeaderCenter = React.forwardRef<
    HTMLDivElement,
    HeaderCenterProps
>(({ className, align, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
        <Comp
            ref={ref}
            className={cn(headerCenterVariants({ align, className }))}
            {...props}
        />
    );
});
HeaderCenter.displayName = "HeaderCenter";

const HeaderRight = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex-1 flex flex-row items-center justify-end h-full gap-4",
            className
        )}
        {...props}
    />
));
HeaderRight.displayName = "HeaderRight";

const HeaderMobileMenuTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
    <Button
        ref={ref}
        size="icon"
        variant="ghost"
        className={cn(
            className
        )}
        {...props}
    >
        <AlignLeft />
    </Button>
));
HeaderMobileMenuTrigger.displayName = "HeaderMobileMenuTrigger";

const HeaderMobileMenu = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "absolute top-14 left-0 w-full h-[300px] bg-background",
            className
        )}
        {...props}
    />
));
HeaderMobileMenu.displayName = "HeaderMobileMenu";

export {
    Header,
    HeaderContainer,
    HeaderLeft,
    HeaderCenter,
    headerCenterVariants,
    HeaderRight,
    HeaderMobileMenuTrigger,
    HeaderMobileMenu,
};