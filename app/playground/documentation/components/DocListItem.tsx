"use client";

import type { OgMetadata } from "@/app/playground/documentation/lib/og";
import { useState } from "react";

interface Props {
  data: OgMetadata;
}

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function faviconFor(url: string): string {
  return `https://www.google.com/s2/favicons?domain=${hostnameOf(url)}&sz=64`;
}

export default function DocListItem({ data }: Props) {
  const [errored, setErrored] = useState(false);
  const host = hostnameOf(data.url);

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noreferrer"
      className="group -mx-2 flex items-start gap-3 rounded-lg px-2 py-3 no-underline transition-colors hover:bg-muted"
    >
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-muted-foreground/20 bg-card">
        {errored ? (
          <span className="text-xs font-medium text-muted-foreground">
            {host.slice(0, 1).toUpperCase()}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={faviconFor(data.url)}
            alt=""
            width={20}
            height={20}
            onError={() => setErrored(true)}
            className="h-5 w-5"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="truncate font-medium text-foreground">
          {data.title}
        </span>
        <span className="line-clamp-2 text-sm text-muted-foreground">
          {data.description}
        </span>
        <span className="mt-0.5 truncate text-xs text-muted-foreground/70">
          {host}
        </span>
      </div>
    </a>
  );
}
