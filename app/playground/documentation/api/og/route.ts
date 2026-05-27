import {
  collectUrls,
  docCategories,
} from "@/app/playground/documentation/lib/data"
import { fetchAllMetadata } from "@/app/playground/documentation/lib/og"

// Only URLs that appear in the curated category tree may be fetched. This keeps
// the handler from being turned into an open server-side fetch proxy (SSRF).
const ALLOWED_URLS = new Set(docCategories.flatMap(collectUrls))

export const maxDuration = 30

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const urls = searchParams.getAll("u").filter((u) => ALLOWED_URLS.has(u))

  const metadata = urls.length > 0 ? await fetchAllMetadata(urls) : []

  return Response.json(metadata, {
    headers: {
      // Cache the response at the CDN for 30 days; individual upstream HTML
      // fetches are additionally deduped by the Next data cache.
      "cache-control":
        "public, max-age=3600, s-maxage=2592000, stale-while-revalidate=86400",
    },
  })
}
