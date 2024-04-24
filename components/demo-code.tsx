"use server"

import { Code, BrightProps} from "bright";

interface DemoCodeProps {
    title?: BrightProps["title"];
    lang?: BrightProps["lang"];
    lineNumbers?: BrightProps["lineNumbers"];
    className?: BrightProps["className"];
    code: BrightProps["code"];
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