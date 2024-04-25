import { GluonDemo } from "@/components/gluon-demo";
import { Carousel } from "@/gluons/carousel";
import CarouselDemo from "@/gluons/demo/carousel-demo";
import { useMDXComponent } from "next-contentlayer/hooks";
import { DemoPreview } from "./demo-preview";
import { DemoCode } from "./demo-code";
import HoverGridDemo from "@/gluons/demo/hover-grid-demo";
import { HoverGrid, HoverGridCell } from "@/gluons/hover-grid";
import { cn } from "@/lib/utils";
import { Header, HeaderCenter, HeaderContainer, HeaderLeft, HeaderMobileMenuTrigger, HeaderRight } from "@/gluons/header";

const components = {
    GluonDemo,
    CarouselDemo,
    Carousel,
    DemoCode,
    DemoPreview,
    Header: ({ className, ...props }: React.ComponentProps<typeof Header>) => (
        <Header
            className={cn(
                "@container sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                className
            )}
            {...props}
        />
    ),
    HeaderContainer: ({ className, ...props }: React.ComponentProps<typeof HeaderContainer>) => (
        <HeaderContainer
            className={cn(
                "container flex flex-row items-center justify-between h-14 gap-4 py-0 @lg:py-2 mx-auto",
                className
            )}
            {...props}
        />
    ),
    HeaderLeft: ({ className, ...props }: React.ComponentProps<typeof HeaderLeft>) => (
        <HeaderLeft
            className={cn(
                "relative flex-1 flex flex-row items-center justify-start h-full gap-4",
                className
            )}
            {...props}
        />
    ),
    HeaderCenter: ({ className, ...props }: React.ComponentProps<typeof HeaderCenter>) => (
        <HeaderCenter
            className={cn(
                "relative flex-1 hidden @lg:flex flex-row items-center justify-center h-full gap-4",
                className
            )}
            {...props}
        />
    ),
    HeaderRight: ({ className, ...props }: React.ComponentProps<typeof HeaderRight>) => (
        <HeaderRight
            className={cn(
                "relative flex-1 flex flex-row items-center justify-end h-full gap-4",
                className
            )}
            {...props}
        />
    ),
    HeaderMobileMenuTrigger: ({ className, ...props }: React.ComponentProps<typeof HeaderMobileMenuTrigger>) => (
        <HeaderMobileMenuTrigger
            className={cn(
                "@lg:hidden",
                className
            )}
            {...props}
        />
    ),
    HoverGrid: ({ className, ...props }: React.ComponentProps<typeof HoverGrid>) => (
        <HoverGrid
            className={cn(
                "grid grid-flow-row grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 divide-x divide-y w-full",
                className
            )}
            {...props}
        />
    ),
    HoverGridCell: ({ className, ...props }: React.ComponentProps<typeof HoverGridCell>) => (
        <HoverGridCell
            className={cn(
                "flex flex-col bg-background group gap-4 hover:gap-2 p-8 hover:bg-muted/40", 
                "justify-between transition-all ease-in-out outline outline-1 duration-500",
                "@md:col-span-1 @lg:col-span-1",
                className
            )}
            {...props}
        />
    ),
}

interface MdxProps {
    code: string,
}

export const Mdx = ({
    code,
}: MdxProps) => {
    const Component = useMDXComponent(code)
    return (
        <div className="mdx">
            <Component components={components}/>
        </div>
    )
}