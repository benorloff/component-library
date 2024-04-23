import { Breadcrumbs } from "@/components/breadcrumbs";
import { Demo } from "@/components/demo";
import { ContentAccordion } from "@/components/gluons/content-accordion";
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
import { ContentAccordionPreview } from "./_demo/content-accordion-preview";
import { ContentAccordionCode } from "./_demo/content-accordion-code";

const ContentAccordionPage = () => {
    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumbs />
                <h1 className="text-4xl font-semibold">HoverGrid</h1>
            </section>
            <Demo
                title="HoverGrid.tsx"
                lang="tsx"
                code={ContentAccordionCode}
                lineNumbers={true}
                className="!my-0"
            >
                <ContentAccordionPreview />
            </Demo>
        </div>
    )
}

export default ContentAccordionPage;