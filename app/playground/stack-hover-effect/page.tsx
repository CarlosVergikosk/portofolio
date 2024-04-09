"use client";

import CardViewSwitcher from "@/app/playground/stack-hover-effect/components/CardViewSwitcher";
import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";
import React from "react";

export default function StackHoverEffect() {
  const [view, setView] = React.useState(0);

  return React.useMemo(
    () => (
      <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
        <Header />
        <ContentWrapper>
          <Title>Stacked Event Cards</Title>
          <Description>
            So, I just scrolled through&nbsp;
            <Reference href="https://www.twitter.com/">Twitter</Reference>
            &nbsp;and came across these neat little cards packed with event
            details. Got me pondering about the mechanics behind them and got me
            all hyped up to try my hand at building something similar.
            <br />
          </Description>
          <div className="mt-8 w-full flex flex-col">
            <div className="relative container flex w-full items-end justify-center whitespace-nowrap rounded-xl border-[1px] border-muted-foreground/20 bg-card h-96 sm:w-full py-10">
              <div className="flex h-full w-full items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <CardViewSwitcher onViewChange={setView} />
                </div>
              </div>
            </div>
            <span
              className="text-center w-full text-sm mt-4 text-muted-foreground data-[hidden=true]:invisible"
              data-hidden={view !== 0}
            >
              {"Tip: Click in Join Meeting to join the event!"}
            </span>
          </div>
        </ContentWrapper>
      </div>
    ),
    [view]
  );
}
