export const HoverGridCode = `
import { 
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
}
`.trim();