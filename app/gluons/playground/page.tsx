import { Button } from "@/components/ui/button";
import { Demo } from "@/components/demo";
import { LayoutDashboard } from "lucide-react";
import { Sidebar, SidebarItem, SidebarLink, SidebarList } from "@/components/gluons/sidebar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

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
                <div className="relative w-full h-full flex flex-col bg-background">
                    <div className="h-full w-full">
                        <div className="absolute top-0 left-0 h-full p-6 flex flex-col gap-2 w-16 @4xl:w-48 bg-background border-r">
                            <Button variant="ghost" className="flex items-center gap-x-2">
                                <LayoutDashboard className="h-4 w-4"/>
                                Dashboard
                            </Button>
                            <Button variant="ghost" className="flex items-center gap-x-2">
                                <LayoutDashboard className="h-4 w-4"/>
                                Dashboard
                            </Button>
                            <Button variant="ghost" className="flex items-center gap-x-2">
                                <LayoutDashboard className="h-4 w-4"/>
                                Dashboard
                            </Button>
                        </div>
                        <div className="h-full w-auto p-8 ml-16 @lg:ml-48 space-y-4 overflow-scroll">
                            <div className="h-12 flex-1 bg-muted rounded-md"/>
                            <div className="h-96 flex-1 bg-muted rounded-md"/>
                            <div className="flex flex-row flex-wrap gap-4">
                                <div className="flex-1 h-48 bg-muted rounded-md"/>
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