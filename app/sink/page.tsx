import { Container } from "@/components/container";
import { GluonDemo } from "@/components/gluon-demo";
import { Resizable } from "@/components/resizable";
import { Sidebar } from "@/components/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import CarouselDemo from "@/gluons/demo/carousel-demo";
import ContentAccordionDemo from "@/gluons/demo/content-accordion-demo";
import HeaderDemo from "@/gluons/demo/header-demo";
import SidebarDemo from "@/gluons/demo/sidebar-demo";
import { GripVertical } from "lucide-react";

const SinkPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold">
                Sink
            </h1>
            <div className="py-8">
                <h3 className="text-2xl font-semibold pb-4">
                    Content Accordion
                </h3>
                <Resizable>
                    <ContentAccordionDemo />
                </Resizable>
            </div>
            <div className="py-8">
                <h3 className="text-2xl font-semibold pb-4">
                    Carousel
                </h3>
                <Resizable>
                    <CarouselDemo />
                </Resizable>
            </div>
            <div className="py-8">
                <h3 className="text-2xl font-semibold pb-4">
                    Header
                </h3>
                <Resizable>
                    <HeaderDemo />
                </Resizable>
            </div>
            <div className="py-8">
                <h3 className="text-2xl font-semibold pb-4">
                    Sidebar
                </h3>
                <Resizable>
                    <SidebarDemo />
                </Resizable>
            </div>
        </div>
    )
}

export default SinkPage;