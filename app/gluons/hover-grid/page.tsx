import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import { Code } from "bright";
import { HoverGridPreview } from "./_demo/hover-grid-preview";
import { HoverGridCode } from "./_demo/hover-grid-code";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PreviewToolbar } from "@/components/preview-toolbar";
import { Demo } from "@/components/demo";

Code.theme = "dark-plus"

const HoverGridPage = () => {
    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumbs />
                <h1 className="text-4xl font-semibold">HoverGrid</h1>
            </section>
            <Demo
                title="HoverGrid.tsx"
                lang="tsx"
                code={HoverGridCode}
                lineNumbers={true}
                className="!my-0"
            >
                <HoverGridPreview />
            </Demo>
        </div>
    )
}

export default HoverGridPage;