"use client";

import ImageFrame from "@/app/playground/image-enhancer/components/ImageFrame";
import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";

export default function ImageEditor() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper>
        <Title>Image Editor</Title>
        <Description>
          Im a big fan of&nbsp;
          <Reference href="https://OpenPurpose.com">OpenPurpose</Reference>
          &nbsp;work — they recently released a tool that lets you enhance
          pictures. I thought it was pretty cool and decided to give it a shot
          myself. Here's my take on it!
          <br />
        </Description>
        <div className="mt-8 w-full">
          <div className="relative flex w-full items-end justify-center whitespace-nowrap rounded-3xl border-[1px] border-muted-foreground/20 bg-card h-[28rem] sm:w-full overflow-hidden shadow-sm p-2">
            <ImageFrame />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
