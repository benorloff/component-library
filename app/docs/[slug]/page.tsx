import { format, parseISO } from 'date-fns'
import { allDocs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Demo } from '@/components/demo'
import { HoverGridCode } from '@/app/gluons/hover-grid/_demo/hover-grid-code'
import { HoverGridPreview } from '@/app/gluons/hover-grid/_demo/hover-grid-preview'

interface DocPageProps {
    params: {
        slug: string,
    }
}

export async function generateStaticParams(): Promise<
    DocPageProps["params"][]
> { 
    return allDocs.map((doc) => ({ 
        slug: doc._raw.flattenedPath 
    }))
}

export const generateMetadata = ({ 
    params, 
}: DocPageProps) => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) {
    return {}
  }
  return { title: doc.title }
}

const DocPage = ({
    params,
}: { 
    params: { slug: string }
}) => {
    const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)

    if (!doc) throw new Error(`doc not found for slug: ${params.slug}`)

    const Content = getMDXComponent(doc.body.code)

    if (!doc) throw new Error(`doc not found for slug: ${params.slug}`)

    const previewCodeTitle = doc.title.toLowerCase().replace(/\s/g, '-')

    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumbs />
                <h1 className="text-4xl font-semibold">{doc.title}</h1>
                <p className="text-muted-foreground">{doc.description}</p>
            </section>
            <Demo
                title={`${previewCodeTitle}.tsx`}
                lang="tsx"
                code={HoverGridCode}
                lineNumbers={true}
                className="!my-0"
            >
                <HoverGridPreview />
            </Demo>
        </div>
    )
}

export default DocPage;