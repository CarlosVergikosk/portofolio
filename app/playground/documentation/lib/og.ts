import "server-only";

export interface OgMetadata {
  url: string;
  title: string;
  description: string;
  image: string | null;
  siteName: string | null;
}

const META_REGEX =
  /<meta\s+[^>]*?(?:property|name)\s*=\s*["']([^"']+)["'][^>]*?content\s*=\s*["']([^"']*)["'][^>]*>/gi;
const META_REGEX_REVERSED =
  /<meta\s+[^>]*?content\s*=\s*["']([^"']*)["'][^>]*?(?:property|name)\s*=\s*["']([^"']+)["'][^>]*>/gi;
const TITLE_REGEX = /<title[^>]*>([^<]*)<\/title>/i;

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function absoluteUrl(maybeRelative: string, base: string): string {
  try {
    return new URL(maybeRelative, base).toString();
  } catch {
    return maybeRelative;
  }
}

function extractMeta(html: string): Map<string, string> {
  const tags = new Map<string, string>();
  for (const re of [META_REGEX, META_REGEX_REVERSED]) {
    re.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = re.exec(html)) !== null) {
      const [key, value] =
        re === META_REGEX ? [match[1], match[2]] : [match[2], match[1]];
      if (!tags.has(key.toLowerCase())) {
        tags.set(key.toLowerCase(), decodeEntities(value));
      }
    }
  }
  return tags;
}

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; PortfolioOGBot/1.0; +https://example.com)",
        accept: "text/html,application/xhtml+xml",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    return new TextDecoder("utf-8").decode(buffer.slice(0, 200_000));
  } catch {
    return null;
  }
}

export async function fetchOgMetadata(url: string): Promise<OgMetadata> {
  const fallback: OgMetadata = {
    url,
    title: hostnameOf(url),
    description: url,
    image: null,
    siteName: null,
  };

  const html = await fetchHtml(url);
  if (!html) return fallback;

  const meta = extractMeta(html);
  const titleTag = TITLE_REGEX.exec(html)?.[1];

  const title =
    meta.get("og:title") ||
    meta.get("twitter:title") ||
    (titleTag ? decodeEntities(titleTag).trim() : "") ||
    fallback.title;

  const description =
    meta.get("og:description") ||
    meta.get("twitter:description") ||
    meta.get("description") ||
    fallback.description;

  const rawImage =
    meta.get("og:image") ||
    meta.get("og:image:url") ||
    meta.get("twitter:image") ||
    meta.get("twitter:image:src") ||
    null;

  return {
    url,
    title,
    description,
    image: rawImage ? absoluteUrl(rawImage, url) : null,
    siteName: meta.get("og:site_name") || hostnameOf(url),
  };
}

export async function fetchAllMetadata(
  urls: readonly string[]
): Promise<OgMetadata[]> {
  return Promise.all(urls.map((url) => fetchOgMetadata(url)));
}
