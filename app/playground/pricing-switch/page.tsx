"use client";

import PricingAnimated from "@/app/playground/pricing-switch/components/PricingAnimated";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const size = "h-44 w-40 sm:h-60 sm:w-52";

export default function StackHoverEffect() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] px-5 py-5 antialiased sm:my-16 sm:px-6 sm:py-0 overflow-hidden">
      <Header />
      <main className="mx-auto flex w-full flex-col items-center justify-center leading-relaxed">
        <div className="mb-3 w-full items-center justify-center font-medium leading-loose">
          Pricing Switch
        </div>
        <p className="w-full text-muted-foreground">
          I use&nbsp;
          <a
            className="underline decoration-light-mode-primary/15 decoration-2 transition-all duration-200 ease-in-out font-normal decoration-muted hover:decoration-muted-foreground"
            href="https://layers.to"
            target="_blank"
            rel="noreferrer"
          >
            layers
          </a>
          &nbsp;a lot, its one of my main sources of inspiration. I saw this
          switch animation on their pricing page and I really liked it, so I
          decided to try and recreate it.
          <br />
        </p>
        <div className="mt-8 w-full">
          <div className="relative container flex w-full items-end justify-center whitespace-nowrap rounded-xl border-[1px] border-muted-foreground/20 bg-card h-96 sm:w-full py-10">
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div
                  className={cn(
                    size,
                    "absolute z-30 flex cursor-pointer flex-col justify-between rounded-2xl transition-all duration-[250] ease-out"
                  )}
                >
                  <PricingAnimated />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
