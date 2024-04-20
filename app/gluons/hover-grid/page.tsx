import { 
    HoverGrid, 
    HoverGridCell, 
    HoverGridContent, 
    HoverGridDescription, 
    HoverGridFooter, 
    HoverGridHeader, 
    HoverGridLeader, 
    HoverGridTitle 
} from "@/components/gluons/hover-grid";
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
import { ArrowUpRight } from "lucide-react";

const HoverGridCode = 
`import { 
    HoverGrid, 
    HoverGridCell, 
    HoverGridContent, 
    HoverGridDescription, 
    HoverGridFooter, 
    HoverGridHeader, 
    HoverGridLeader, 
    HoverGridTitle 
} from "@/components/hover-grid";

export const HoverGridDemo = () => {
    return (
        <HoverGrid>
            <HoverGridCell>
                <HoverGridHeader>
                    <HoverGridLeader>
                        Leader1
                        <ArrowUpRight 
                            size={24} 
                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                        />
                    </HoverGridLeader>
                </HoverGridHeader>
                <HoverGridContent>
                    <HoverGridTitle>Lorem ipsum.</HoverGridTitle>
                    <HoverGridDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam.
                    </HoverGridDescription>
                </HoverGridContent>
                <HoverGridFooter>Footer 1</HoverGridFooter>
            </HoverGridCell>
            <HoverGridCell>
                <HoverGridHeader>
                    <HoverGridLeader>
                        Leader1
                        <ArrowUpRight 
                            size={24} 
                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                        />
                    </HoverGridLeader>
                </HoverGridHeader>
                <HoverGridContent>
                    <HoverGridTitle>Lorem ipsum.</HoverGridTitle>
                    <HoverGridDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam.
                    </HoverGridDescription>
                </HoverGridContent>
                <HoverGridFooter>Footer 1</HoverGridFooter>
            </HoverGridCell>
            <HoverGridCell>
                <HoverGridHeader>
                    <HoverGridLeader>
                        Leader1
                        <ArrowUpRight 
                            size={24} 
                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                        />
                    </HoverGridLeader>
                </HoverGridHeader>
                <HoverGridContent>
                    <HoverGridTitle>Lorem ipsum.</HoverGridTitle>
                    <HoverGridDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam.
                    </HoverGridDescription>
                </HoverGridContent>
                <HoverGridFooter>Footer 1</HoverGridFooter>
            </HoverGridCell>
        </HoverGrid>
    )
}`

const HoverGridPage = () => {
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
                <h1 className="text-4xl font-semibold">HoverGrid</h1>
            </section>
            <section className="flex h-full w-full py-10 m-auto items-center justify-start">
                <Tabs defaultValue="preview" className="w-full">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="w-full border rounded-md p-10">
                        <HoverGrid>
                            <HoverGridCell>
                                <HoverGridHeader>
                                    <HoverGridLeader>
                                        Leader1
                                        <ArrowUpRight 
                                            size={24} 
                                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                                        />
                                    </HoverGridLeader>
                                </HoverGridHeader>
                                <HoverGridContent>
                                    <HoverGridTitle>Lorem ipsum.</HoverGridTitle>
                                    <HoverGridDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam.
                                    </HoverGridDescription>
                                </HoverGridContent>
                                <HoverGridFooter>Footer 1</HoverGridFooter>
                            </HoverGridCell>
                            <HoverGridCell>
                                <HoverGridHeader>
                                    <HoverGridLeader>
                                        Leader1
                                        <ArrowUpRight 
                                            size={24} 
                                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                                        />
                                    </HoverGridLeader>
                                </HoverGridHeader>
                                <HoverGridContent>
                                    <HoverGridTitle>Lorem ipsum.</HoverGridTitle>
                                    <HoverGridDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam.
                                    </HoverGridDescription>
                                </HoverGridContent>
                                <HoverGridFooter>Footer 1</HoverGridFooter>
                            </HoverGridCell>
                            <HoverGridCell>
                                <HoverGridHeader>
                                    <HoverGridLeader>
                                        Leader1
                                        <ArrowUpRight 
                                            size={24} 
                                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                                        />
                                    </HoverGridLeader>
                                </HoverGridHeader>
                                <HoverGridContent>
                                    <HoverGridTitle>Lorem ipsum.</HoverGridTitle>
                                    <HoverGridDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam.
                                    </HoverGridDescription>
                                </HoverGridContent>
                                <HoverGridFooter>Footer 1</HoverGridFooter>
                            </HoverGridCell>
                        </HoverGrid>
                    </TabsContent>
                    <TabsContent value="code">
                        <Code 
                            lang="tsx"
                            title="HoverGrid.tsx"
                            lineNumbers
                            className="w-full border rounded-md"
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