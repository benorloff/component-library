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
import { CarouselPreview } from "./_demo/carousel-preview";
import { CarouselCode } from "./_demo/carousel-code";

const CarouselPage = () => {
    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumbs />
                <h1 className="text-4xl font-semibold">Carousel</h1>
            </section>
            <Demo
                title="Carousel.tsx"
                lang="tsx"
                code={CarouselCode}
                lineNumbers={true}
                className="!my-0"
            >
                <CarouselPreview />
            </Demo>
        </div>
    )
}

export default CarouselPage;