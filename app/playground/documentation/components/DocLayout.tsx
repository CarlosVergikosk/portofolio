"use client"

import DocListItem from "@/app/playground/documentation/components/DocListItem"
import {
  findCategoryByPath,
  type DocCategory,
} from "@/app/playground/documentation/lib/data"
import type { OgMetadata } from "@/app/playground/documentation/lib/og"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

interface Props {
  categories: DocCategory[]
}

function SkeletonRow() {
  return (
    <div className="-mx-2 flex items-start gap-3 rounded-lg px-2 py-3">
      <div className="mt-0.5 h-8 w-8 shrink-0 animate-pulse rounded-md bg-muted" />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 py-0.5">
        <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
        <div className="h-3 w-3/4 animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}

export default function DocLayout({ categories }: Props) {
  const [path, setPath] = useState<string[]>([])
  const [metadata, setMetadata] = useState<Record<string, OgMetadata>>({})

  // Mirror metadata in a ref so the fetch effect can check what's already
  // cached without re-running every time the cache fills in.
  const metadataRef = useRef(metadata)
  metadataRef.current = metadata

  const current = useMemo(
    () => findCategoryByPath(categories, path),
    [categories, path]
  )

  const visibleCategories: DocCategory[] | null = !current
    ? categories
    : current.children ?? null
  const visibleUrls = current?.urls ?? null

  // When a leaf category is opened, lazily fetch OG metadata for just its
  // links. Results accumulate in `metadata` so re-opening a category is instant.
  useEffect(() => {
    if (!visibleUrls || visibleUrls.length === 0) return
    const missing = visibleUrls.filter((u) => !metadataRef.current[u])
    if (missing.length === 0) return

    const controller = new AbortController()
    const params = new URLSearchParams()
    for (const url of missing) params.append("u", url)

    fetch(`/playground/documentation/api/og?${params.toString()}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? (res.json() as Promise<OgMetadata[]>) : []))
      .then((items) => {
        if (controller.signal.aborted || items.length === 0) return
        setMetadata((prev) => {
          const next = { ...prev }
          for (const item of items) next[item.url] = item
          return next
        })
      })
      .catch(() => {})

    return () => controller.abort()
  }, [visibleUrls])

  const trail: { name: string; depth: number }[] = []
  let cursor: DocCategory | undefined
  for (let i = 0; i < path.length; i++) {
    const next: DocCategory | undefined = (cursor?.children ?? categories).find(
      (c) => c.id === path[i]
    )
    if (!next) break
    trail.push({ name: next.name, depth: i + 1 })
    cursor = next
  }

  const goBack = () => setPath((p) => p.slice(0, -1))
  const goInto = (id: string) => setPath((p) => [...p, id])

  const viewKey = path.join("/") || "root"

  return (
    <div className="mt-8 w-full">
      <div className="mb-4 flex items-center gap-2 text-sm">
        {path.length > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ChevronLeft size={14} />
            Back
          </button>
        ) : (
          <span className="px-2 py-1 font-medium text-foreground">
            Categories
          </span>
        )}
        {trail.length > 0 && (
          <div className="flex items-center gap-1 text-muted-foreground">
            {trail.map((t, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="text-muted-foreground/50">/</span>
                <span
                  className={cn(
                    i === trail.length - 1 && "font-medium text-foreground"
                  )}
                >
                  {t.name}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={viewKey}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {visibleCategories && (
              <ul className="flex flex-col gap-1">
                {visibleCategories.map((category) => {
                  const count = category.children
                    ? category.children.length
                    : category.urls?.length ?? 0
                  const countLabel = category.children
                    ? `${count} ${
                        count === 1 ? "subcategory" : "subcategories"
                      }`
                    : `${count} ${count === 1 ? "link" : "links"}`
                  return (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => goInto(category.id)}
                        className="group -mx-2 flex w-full items-center justify-between gap-3 rounded-lg px-2 py-3 text-left transition-colors hover:bg-muted"
                      >
                        <div className="flex min-w-0 flex-col">
                          <span className="font-medium text-foreground">
                            {category.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {countLabel}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}

            {visibleUrls && (
              <ul className="flex flex-col gap-1">
                {visibleUrls.map((url) => {
                  const data = metadata[url]
                  return (
                    <li key={url}>
                      {data ? <DocListItem data={data} /> : <SkeletonRow />}
                    </li>
                  )
                })}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
