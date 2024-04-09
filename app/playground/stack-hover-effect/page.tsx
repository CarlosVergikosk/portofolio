"use client";

import CardViewSwitcher from "@/app/playground/stack-hover-effect/components/CardViewSwitcher";
import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";

export default function StackHoverEffect() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper>
        <Title>Stacked Event Cards</Title>
        <Description>
          I recently viewed a couple of stacked-cards on&nbsp;
          <Reference href="https://www.twitter.com/">Twitter</Reference>
          , it made me think about what's behind it and how to build something
          like that.
          <br />
        </Description>
        <div className="mt-8 w-full">
          <div className="relative container flex w-full items-end justify-center whitespace-nowrap rounded-xl border-[1px] border-muted-foreground/20 bg-card h-96 sm:w-full py-10">
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative flex items-center justify-center">
                <CardViewSwitcher />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
