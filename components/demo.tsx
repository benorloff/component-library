import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import { DemoCode } from "./demo-code";
import { DemoPreview } from "./demo-preview";
import { PreviewToolbar } from "./preview-toolbar";

interface DemoProps {
    title: string,
    lang: string,
    lineNumbers: boolean,
    className: string,
    code: string,
    children: React.ReactNode
}

export const Demo = ({
    title,
    lang,
    lineNumbers,
    className,
    code,
    children,
}: DemoProps) => {
    return (
        <section className="flex h-full w-full py-10 m-auto items-start justify-start">
            <Tabs defaultValue="preview" className="w-full">
                <div className="flex items-center justify-between gap-4">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <PreviewToolbar copyText="Sidebar.tsx" />
                </div>
                <TabsContent value="preview">
                    <DemoPreview>
                        {children}
                    </DemoPreview>
                </TabsContent>
                <TabsContent value="code" className="w-full border rounded-md max-h-[500px] overflow-y-auto">
                    <DemoCode
                        title={title}
                        lang={lang}
                        code={code}
                        className={className}
                        lineNumbers={lineNumbers}
                    />
                </TabsContent>
            </Tabs>
        </section>
    )
}