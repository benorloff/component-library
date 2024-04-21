import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import { DemoCode } from "./demo-code";
import { DemoPreview } from "./demo-preview";

export const Demo = () => {
    return (
        <section className="flex h-full w-full py-10 m-auto items-start justify-start">
            <Tabs defaultValue="preview" className="w-full">
                <div className="flex items-center justify-between gap-4">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="preview">
                    <DemoPreview />
                </TabsContent>
                <TabsContent value="code" className="w-full border rounded-md max-h-[500px] overflow-y-auto">
                    <DemoCode />
                </TabsContent>
            </Tabs>
        </section>
    )
}