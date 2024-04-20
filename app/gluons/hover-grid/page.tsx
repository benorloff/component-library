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

Code.theme = "dark-plus"

const HoverGridPage = () => {
    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumbs />
                <h1 className="text-4xl font-semibold">HoverGrid</h1>
            </section>
            <section className="flex h-full w-full py-10 m-auto items-center justify-start">
                <Tabs defaultValue="preview" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <TabsList>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="code">Code</TabsTrigger>
                        </TabsList>
                        <PreviewToolbar copyText={HoverGridCode} />
                    </div>
                    <TabsContent value="preview" className="w-full border rounded-md p-10">
                        <HoverGridPreview />
                    </TabsContent>
                    <TabsContent value="code" className="w-full border rounded-md max-h-[500px] overflow-y-auto">
                        <Code 
                            lang="tsx"
                            title="HoverGrid.tsx"
                            lineNumbers
                            className="!my-0"
                        >
                            {HoverGridCode}
                        </Code>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    )
}

export default HoverGridPage;