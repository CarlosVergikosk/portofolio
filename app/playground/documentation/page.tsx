import DocLayout from "@/app/playground/documentation/components/DocLayout"
import {
  collectUrls,
  docCategories,
} from "@/app/playground/documentation/lib/data"
import {
  fetchAllMetadata,
  type OgMetadata,
} from "@/app/playground/documentation/lib/og"
import Header from "@/components/header"
import { ContentWrapper } from "@/components/ui/content-wrapper"
import { Description } from "@/components/ui/description"
import { Title } from "@/components/ui/title"

export const revalidate = 60 * 60 * 24

export default async function DocumentationPage() {
  const allUrls = Array.from(new Set(docCategories.flatMap(collectUrls)))
  const fetched = await fetchAllMetadata(allUrls)
  const metadata: Record<string, OgMetadata> = Object.fromEntries(
    fetched.map((m) => [m.url, m])
  )

  return (
    <div className="mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper className="pb-8">
        <Title>Documentation</Title>
        <Description>
          A categorized library of links. Pick a category to drill in &mdash;
          each result row shows the site&apos;s favicon, title and description
          fetched from its Open Graph metadata.
        </Description>
        <DocLayout categories={docCategories} metadata={metadata} />
      </ContentWrapper>
    </div>
  )
}
