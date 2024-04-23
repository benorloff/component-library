export const CarouselCode = `
"use client"

import React, { useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { cn } from "@/lib/utils"

import Image from "next/image";

const CarouselSlide = ({
    number,
    title,
    description
}: {
    number: number;
    title: string;
    description: string;
}) => {
      
    return (
        <div id="Feature" data-key={number} className="min-w-full h-fit snap-start grid grid-cols-1 items-center gap-16 px-4 @lg:px-8">
            <div className="grid grid-cols-1 @lg:grid-cols-2 items-center gap-8">
                <div>
                    <div className="text-4xl">{title}</div>
                </div>
                <div>
                    {description}
                </div>
            </div>
            <div className="grid grid-cols-1 @lg:grid-cols-2 items-center gap-8">
                <div className="grid grid-cols-1 items-start gap-8">
                    <div className="space-y-4">
                        <div className="font-semibold @lg:pr-8">Lorem ipsum.</div>
                        <div className="text-muted-foreground @lg:pr-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="font-semibold @lg:pr-8">Lorem ipsum.</div>
                        <div className="text-muted-foreground @lg:pr-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="relative order-first @lg:order-last h-full min-h-[350px] w-full">
                    <Image 
                        src={\`/unsplash-abstract-\${number}.jpeg\`}
                        alt={\`Feature \${number}\`}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export const Carousel = () => {
    
    const [activeFeature, setActiveFeature] = useDebounceValue(1, 50)
    const [scrollProgress, setScrollProgress] = useState(0)

    let featureTrack: HTMLElement | null = null;
    let featureTrackScrollWidth: number = 0;
    let featureEl: HTMLElement | null = null;
    let featureElClientWidth: number = 0;

    if (typeof document !== 'undefined') {
        featureTrack = document.getElementById("FeatureCarouselTrack");
        featureTrackScrollWidth = featureTrack?.scrollWidth as number;
        featureEl = document.getElementById("Feature");
        featureElClientWidth = featureEl?.clientWidth as number;
    }

    const onTrackScroll = (e: React.UIEvent<HTMLElement>) => {
        let progress = Number(( e.currentTarget.scrollLeft / e.currentTarget.scrollWidth ).toPrecision(2)) * 100;
        setScrollProgress(progress);
    }

    useEffect(() => {
        switch (true) {
            case scrollProgress < 33:
                setActiveFeature(1);
                break;
            case scrollProgress >= 33 && scrollProgress < 66:
                setActiveFeature(2);
                break;
            case scrollProgress >= 66 && scrollProgress < 100:
                setActiveFeature(3);
                break;
            default:
                setActiveFeature(1);
                break;
        }
    }, [scrollProgress])

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e, '<== e clicked')
        let id = parseInt(e.currentTarget.dataset.id as string);
        let n: number = 0;
        n = ( id - 1 ) * featureElClientWidth;
        
        featureTrack?.scrollTo( { left: n , top: 0, behavior: 'smooth' } )
    }

    return (
        <div 
            id="FeatureCarouselContainer" 
            className="max-w-screen-xl mx-auto px-4 space-y-8"
        >
            <div 
                id="FeatureCarouselTrack" 
                onScroll={onTrackScroll} 
                className="flex flex-row snap-x snap-mandatory overflow-x-scroll [scrollbar-width:none] overscroll-x-contain py-8"
            >
                {Array.from({ length: 3 }).map((_, i) => (
                    <CarouselSlide 
                        key={i + 1}
                        number={i + 1} 
                        title={\`Feature \${i + 1}\`} 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    />
                ))}
            </div>
            <div 
                className="relative grid grid-cols-3 w-full text-center border-collapse overflow-clip"
            >
                <div 
                    className="absolute top-0 w-1/3 h-[1px] bg-primary ease-linear"
                    style={{ left: \`\${scrollProgress}%\` }} 
                />
                {Array.from({ length: 3 }).map((_, i) => (
                    <div 
                        key={i + 1}
                        data-id={i + 1}
                        role="button"
                        className={cn(
                            "border-t border-dashed border-muted py-8 px-2 text-muted-foreground",
                            activeFeature === (i + 1) && "text-primary"
                        )}
                        onClick={(e) => handleClick(e)}
                    >
                        Feature {i + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}`.trim();