import fs from "fs";
import { Index } from "@/gluons/demo";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import React from "react";
import { DemoCode } from "@/components/demo-code";
import { DemoPreview } from "@/components/demo-preview";
import { PreviewToolbar } from "@/components/preview-toolbar";
import path from "path";

interface GluonDemoProps{
    name: string,
}

export const GluonDemo = async ({
    name,
}: GluonDemoProps) => {
    
    const Preview = React.useMemo(() => {
        const Component = Index["demo"][name].component

        if (!Component) {
            return (
                <p className="text-muted-foreground">
                    Component{" "}
                    <code className="relative rounded bg-muted p-1 font-mono">
                        {name}
                    </code>{" "}
                    not found.
                </p>
            )
        }

        return <Component />
    }, [name])

    let Code;

    try {
        const src = Index["demo"][name].files[0]
        const filePath = path.join(process.cwd(), src)
        Code = fs.readFileSync(filePath, "utf8")
    } catch (error) {
        console.error(error)
    }

    return (
        <div className="flex h-full w-full py-10 m-auto items-start justify-start">
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
                        {Preview}
                    </DemoPreview>
                </TabsContent>
                <TabsContent value="code" className="w-full border rounded-md max-h-[500px] overflow-y-auto">
                    <DemoCode
                        title={`${name}.tsx`}
                        lang="tsx"
                        code={Code || "Failed to load code"}
                        lineNumbers={true}
                        className="!my-0"
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}
