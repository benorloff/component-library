"use server"

import { Code, BrightProps} from "bright";
import { useTheme } from "next-themes";

interface DemoCodeProps {
    title?: BrightProps["title"];
    lang?: BrightProps["lang"];
    lineNumbers?: BrightProps["lineNumbers"];
    className?: string;
    code: string;
}

Code.theme = {
    dark: 'dark-plus',
    light: 'light-plus',
    lightSelector: 'html.light',
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