import type { Meta, StoryObj } from "@storybook/react"

import {
    HoverGrid,
    HoverGridCell,
    HoverGridHeader,
    HoverGridLeader,
    HoverGridContent,
    HoverGridTitle,
    HoverGridDescription,
    HoverGridFooter,
} from "@/gluons/hover-grid"
import { ArrowUpRight } from "lucide-react"

/**
 * For sighted users to preview content available behind a link.
 */
const meta = {
  title: "block/HoverGrid",
  component: HoverGrid,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (args) => (
    <HoverGrid {...args}>
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
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverGrid>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the hover card.
 */
export const Default: Story = {}
