"use client";

import PricingAnimated from "@/app/playground/pricing-switch/components/PricingAnimated";
import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";
import { cn } from "@/lib/utils";

const size = "h-44 w-40 sm:h-60 sm:w-52";

export default function StackHoverEffect() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper>
        <Title>Pricing Switch</Title>
        <Description>
          I use&nbsp;
          <Reference href="https://layers.to">layers</Reference>
          &nbsp;a lot, its one of my main sources of inspiration. I saw this
          switch animation on their pricing page and I really liked it, so I
          decided to try and recreate it.
          <br />
        </Description>
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
      </ContentWrapper>
    </div>
  );
}
