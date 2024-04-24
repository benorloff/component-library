"use client"

import { 
    HoverGrid, 
    HoverGridCell, 
    HoverGridContent, 
    HoverGridDescription, 
    HoverGridFooter, 
    HoverGridHeader, 
    HoverGridLeader, 
    HoverGridTitle 
} from "@/gluons/hover-grid";
import { ArrowUpRight } from "lucide-react";

export const HoverGridDemo = () => {
    return (
        <HoverGrid className="@md:grid-cols-2 @lg:grid-cols-3">
            <HoverGridCell className="col-span-3 @lg:col-span-1">
                <HoverGridHeader>
                    <HoverGridLeader>
                        01
                        <ArrowUpRight 
                            size={24} 
                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                        />
                    </HoverGridLeader>
                </HoverGridHeader>
                <HoverGridContent>
                    <HoverGridTitle>Seamless Integration.</HoverGridTitle>
                    <HoverGridDescription>
                        Effortlessly connect our platform with your existing tools and workflows. Our API and pre-built integrations make it easy to get started and maximize efficiency.
                    </HoverGridDescription>
                </HoverGridContent>
                <HoverGridFooter>Learn more</HoverGridFooter>
            </HoverGridCell>
            <HoverGridCell className="col-span-3 @lg:col-span-1">
                <HoverGridHeader>
                    <HoverGridLeader>
                        02
                        <ArrowUpRight 
                            size={24} 
                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                        />
                    </HoverGridLeader>
                </HoverGridHeader>
                <HoverGridContent>
                    <HoverGridTitle>Customizable Dashboard</HoverGridTitle>
                    <HoverGridDescription>
                        Create a personalized dashboard that fits your unique needs and preferences. Drag and drop widgets, custom alerts, and real-time data.
                    </HoverGridDescription>
                </HoverGridContent>
                <HoverGridFooter>Explore features</HoverGridFooter>
            </HoverGridCell>
            <HoverGridCell className="col-span-3 @lg:col-span-1">
                <HoverGridHeader>
                    <HoverGridLeader>
                        03
                        <ArrowUpRight 
                            size={24} 
                            className="opacity-0 group-hover:opacity-100 translate-y-4 
                            group-hover:translate-y-0 transition-all ease-in-out duration-500"
                        />
                    </HoverGridLeader>
                </HoverGridHeader>
                <HoverGridContent>
                    <HoverGridTitle>Collaborative Workspaces.</HoverGridTitle>
                    <HoverGridDescription>
                        Foster teamwork and streamline communication with our collaborative workspaces. Share files, assign tasks, and discuss projects in real-time.
                    </HoverGridDescription>
                </HoverGridContent>
                <HoverGridFooter>Discover workspaces</HoverGridFooter>
            </HoverGridCell>
        </HoverGrid>
    )
}

export default HoverGridDemo;