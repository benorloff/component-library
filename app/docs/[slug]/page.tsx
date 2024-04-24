import { allDocs } from 'contentlayer/generated'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Mdx } from '@/components/mdx-components'

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

    return (
        <div>
            <section className="w-full space-y-2">
                <Breadcrumbs />
                <h1 className="text-4xl font-semibold">
                    {doc.title}
                </h1>
                <p className="text-muted-foreground">
                    {doc.description}
                </p>
                <Mdx code={doc.body.code}/>
            </section>
        </div>
    )
}

export default DocPage;