import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import { Code } from "bright";

const ContentAccordionPage = () => {
    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Gluons</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-4xl font-semibold">ContentAccordion</h1>
            </section>
            <section className="flex h-full w-full py-10 m-auto items-center justify-start">
                <Tabs defaultValue="preview" className="w-full">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="w-full border rounded-md p-10">
                        preview
                    </TabsContent>
                    <TabsContent value="code">
                        <Code 
                            lang="tsx"
                            title="HoverGrid.tsx"
                            lineNumbers
                            className="w-full border rounded-md"
                        >
                            {`import React from "react";`}
                        </Code>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    )
}

export default ContentAccordionPage;