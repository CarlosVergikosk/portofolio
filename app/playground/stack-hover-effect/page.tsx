"use client";

import CardViewSwitcher from "@/app/playground/stack-hover-effect/components/CardViewSwitcher";
import Header from "@/components/header";

export default function StackHoverEffect() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] px-5 py-5 antialiased sm:my-16 sm:px-6 sm:py-0 overflow-hidden">
      <Header />
      <main className="mx-auto flex w-full flex-col items-center justify-center leading-relaxed">
        <div className="mb-3 w-full items-center justify-center font-medium leading-loose">
          Stacked Event Cards
        </div>
        <p className="w-full text-muted-foreground">
          I recently viewed a couple of stacked-cards on&nbsp;
          <a
            className="underline decoration-light-mode-primary/15 decoration-2 transition-all duration-200 ease-in-out font-normal decoration-muted hover:decoration-muted-foreground"
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          , it made me think about what's behind it and how to build something
          like that.
          <br />
        </p>
        <div className="mt-8 w-full">
          <div className="relative container flex w-full items-end justify-center whitespace-nowrap rounded-xl border-[1px] border-muted-foreground/20 bg-card h-96 sm:w-full py-10">
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative flex items-center justify-center">
                <CardViewSwitcher />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
