"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const ContentAccordion = () => {
    const [active, setActive] = useState<number | null>(1);

    return (
        <>
        <div className="grid grid-cols-3 items-stretch">
            <div className="col-span-3 lg:col-span-2">
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
            <div className="col-span-3 lg:col-span-1">
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
        {/* <div className="flex flex-row flex-wrap items-stretch">
                <div className="relative grow bg-red-500 p-10 h-64">
                    <div 
                        className={cn(
                            "absolute top-0 left-0 transition-opacity duration-500 ease-in-out",
                            active === 1 ? "opacity-100" : "opacity-0"
                        )}
                    >
                        Image 1
                    </div>
                    <div 
                        className={cn(
                            "absolute top-0 left-0 transition-opacity duration-500 ease-in-out",
                            active === 2 ? "opacity-100" : "opacity-0"
                        )}
                    >
                        Image 2
                    </div>
                    <div 
                        className={cn(
                            "absolute top-0 left-0 transition-opacity duration-500 ease-in-out",
                            active === 3 ? "opacity-100" : "opacity-0"
                        )}
                    >
                        Image 3
                    </div>
                </div>
                <div className="w-full lg:w-80 bg-blue-500 p-10">
                    Image
                </div>
            </div> */}
        </>
    )
}