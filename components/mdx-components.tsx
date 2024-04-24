import { GluonDemo } from "@/components/gluon-demo";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
    GluonDemo,
}

interface MdxProps {
    code: string,
}

export const Mdx = ({
    code,
}: MdxProps) => {
    const Component = useMDXComponent(code)
    return (
        <div className="mdx">
            <Component components={components}/>
        </div>
    )
}