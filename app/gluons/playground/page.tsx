import { Demo } from "@/components/demo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LayoutDashboard, Menu } from "lucide-react";
import Image from "next/image";

const PlaygroundPage = () => {
    return (
        <>
            <Demo
                title="Sidebar.tsx"
                lang="tsx"
                code={`import { Sidebar } from "@/components/gluons/sidebar";`}
                className="!my-0"
                lineNumbers={true}
            >
                <div className="w-full h-full flex flex-col bg-background">
                    <div className="absolute h-14 w-full flex items-center justify-between gap-4 px-8 bg-background border-b">
                        <div className="flex items-center gap-2">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button size="icon" variant="ghost">
                                        <Menu className="h-6 w-6"/>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left">
                                    <SheetHeader>
                                        <SheetTitle>Glui</SheetTitle>
                                        <SheetDescription>Component library built on shadcn/ui</SheetDescription>
                                    </SheetHeader>
                                    <div>Docs</div>
                                    <div>Docs</div>
                                    <div>Docs</div>
                                    <div>Docs</div>
                                </SheetContent>
                            </Sheet>
                            <Image src="/logoipsum.svg" width={100} height={30} alt="Logo" className="brightness-150"/>
                        </div>
                        <div className="h-6 w-32 bg-muted rounded-md" />
                    </div>
                    <div className="relative mt-14 h-full w-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full p-8 @lg:flex flex-col gap-4 hidden @4xl:w-48 bg-background border-r">
                            <div className="flex gap-2 items-center justify-start">
                                <LayoutDashboard className="h-4 w-4"/>
                                Dashboard
                            </div>
                            <div className="flex gap-2 items-center justify-start">
                                <LayoutDashboard className="h-4 w-4"/>
                                Dashboard
                            </div>
                            <div className="flex gap-2 items-center justify-start">
                                <LayoutDashboard className="h-4 w-4"/>
                                Dashboard
                            </div>
                        </div>
                        <div className="h-full w-auto p-8 @lg:ml-48 space-y-4 overflow-scroll">
                            <div className="h-12 flex-1 bg-muted rounded-md"/>
                            <div className="h-96 flex-1 bg-muted rounded-md"/>
                            <div className="flex flex-row flex-wrap gap-4">
                                <div className="flex-1 h-48 bg-muted rounded-md"/>
                                <div className="flex-1 h-48 bg-muted rounded-md"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Demo>
        </>
    )
}

export default PlaygroundPage;