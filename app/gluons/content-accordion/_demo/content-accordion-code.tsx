export const ContentAccordionCode = `
"use client"

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "@/components/ui/accordion";

export const ContentAccordion = () => {
    const [active, setActive] = useState<number | null>(1);

    return (
        <div className="@container grid grid-cols-3 items-stretch">
            <div className="col-span-3 @lg:col-span-2">
                {active === 1 && (
                    <Image
                        src="/unsplash-abstract-1.jpeg"
                        alt="placeholder"
                        width={1920}
                        height={1080}
                        className={cn(
                            active === 1 ? "opacity-100" : "opacity-0",
                            "transition-opacity duration-500 ease-in-out",
                        )}
                    />
                )}
                {active === 2 && (
                    <Image
                        src="/unsplash-abstract-2.jpeg"
                        alt="placeholder"
                        width={1920}
                        height={1080}
                        className={cn(
                            active === 2 ? "opacity-100" : "opacity-0",
                            "transition-opacity duration-500 ease-in-out",
                        )}
                    />
                )}
                {active === 3 && (
                <Image
                    src="/unsplash-abstract-3.jpeg"
                    alt="placeholder"
                    width={1920}
                    height={1080}
                    className={cn(
                        active === 3 ? "opacity-100" : "opacity-0",
                        "transition-opacity duration-500 ease-in-out",
                    )}
                />
                )}
            </div>
            <div className="col-span-3 @lg:col-span-1">
                <Accordion type="single" defaultValue="1" className="flex flex-col items-stretch h-full border-t border-x">
                    <AccordionItem 
                        value="1"
                        className={cn(
                            "relative grow text-lg group before:content[''] before:w-[2px] before:absolute before:top-0 before:left-0 before:bg-foreground before:transition-all before:ease-in-out before:duration-300 ",
                            active === 1 
                                ? "before:h-full before:opacity-100"
                                : "before:h-0 before:opacity-0"
                        )}
                    >
                        <AccordionTrigger
                            onClick={() => setActive(1)}
                            className="text-muted-foreground data-[state=open]:text-foreground p-6 group-hover:text-foreground !no-underline transition-colors ease-in-out duration-300"
                        >
                            Accordion 1
                        </AccordionTrigger>
                        <AccordionContent
                            className="p-6 pt-0"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem 
                        value="2"
                        className={cn(
                            "relative grow text-lg group before:content[''] before:w-[2px] before:absolute before:top-0 before:left-0 before:bg-foreground before:transition-all before:ease-in-out before:duration-300 ",
                            active === 2 
                                ? "before:h-full before:opacity-100"
                                : "before:h-0 before:opacity-0"
                        )}
                    >
                        <AccordionTrigger
                            onClick={() => setActive(2)}
                            className="text-muted-foreground data-[state=open]:text-foreground p-6 group-hover:text-foreground !no-underline transition-colors ease-in-out duration-300"
                        >
                            Accordion 2
                        </AccordionTrigger>
                        <AccordionContent
                            className="p-6 pt-0"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem 
                        value="3"
                        className={cn(
                            "relative grow text-lg group before:content[''] before:w-[2px] before:absolute before:top-0 before:left-0 before:bg-foreground before:transition-all before:ease-in-out before:duration-300 ",
                            active === 3 
                                ? "before:h-full before:opacity-100"
                                : "before:h-0 before:opacity-0"
                        )}
                    >
                        <AccordionTrigger
                            onClick={() => setActive(3)}
                            className="text-muted-foreground data-[state=open]:text-foreground p-6 group-hover:text-foreground !no-underline transition-colors ease-in-out duration-300"
                        >
                            Accordion 3
                        </AccordionTrigger>
                        <AccordionContent
                            className="p-6 pt-0"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}`.trim();