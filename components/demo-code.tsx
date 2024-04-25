"use server"

import { Code, BrightProps} from "bright";

interface DemoCodeProps {
    title?: string;
    lang?: string;
    lineNumbers?: boolean;
    className?: string;
    code: string;
}

export const DemoCode = ({
    title,
    lang,
    lineNumbers,
    className,
    code,
}: DemoCodeProps) => {
    return (
        <Code 
            title={title}
            lang={lang}
            lineNumbers={lineNumbers}
            className={className}
        >
            {code}
        </Code>
    )
}