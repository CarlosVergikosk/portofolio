import Header from "@/components/header";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <div className="mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <main className="mx-auto flex w-full flex-col px-5 items-center justify-center leading-relaxed">
        <div>
          <Title>About</Title>
          <Description>
            I'm a Product / Lead Frontend at&nbsp;
            <Reference href="https://ketl.io/">ketl</Reference>. I craft &amp;
            build interfaces that are fluid, make people feel something and
            serve as extensions of real life in the digital world.
          </Description>
          <div className="mt-16 flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-8">
            <a
              href="mailto:j@kbo.sk"
              target="_blank"
              rel="noreferrer"
              className="font-normal underline decoration-2 transition-all duration-200 ease-in-out decoration-muted hover:decoration-foreground"
            >
              carlos.vergikosk@gmail.com
            </a>
            <a
              href="https://twitter.com/carlkosk"
              target="_blank"
              rel="noreferrer"
              className="font-normal underline decoration-2 transition-all duration-200 ease-in-out decoration-muted hover:decoration-foreground"
            >
              Twitter
            </a>
            <a
              href="https://read.cv/carlosvergikosk"
              target="_blank"
              rel="noreferrer"
              className="font-normal underline decoration-2 transition-all duration-200 ease-in-out decoration-muted hover:decoration-foreground"
            >
              read.cv
            </a>
            <a
              href="https://github.com/CarlosVergikosk"
              target="_blank"
              rel="noreferrer"
              className="font-normal underline decoration-2 transition-all duration-200 ease-in-out decoration-muted hover:decoration-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-16 w-full sm:mt-24">
          <Title>Components</Title>
          <div className="flex flex-col gap-y-2">
            <a
              href="/playground/search-bar"
              target="_self"
              rel=""
              className="group -mx-4 flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-muted/30"
            >
              <span className="flex items-center font-normal">
                Amie Action Bar
              </span>
              <span className="text-muted-foreground">
                Recreation of the Amie action bar.
              </span>
            </a>
            <a
              href="/playground/globe"
              target="_self"
              rel=""
              className="group -mx-4 flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-muted/30"
            >
              <span className="flex items-center font-normal">
                GitHub Globe
              </span>
              <span className="text-muted-foreground">
                A globe similar to the one on GitHub.
              </span>
            </a>
            <a
              href="/playground/stack-hover-effect"
              target="_self"
              rel=""
              className="group -mx-4 flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-muted/30"
            >
              <span className="flex items-center font-normal">
                Stacked Event Cards
              </span>
              <span className="text-muted-foreground">
                A set of animated calendar cards.
              </span>
            </a>
            <a
              href="/playground/pricing-switch"
              target="_self"
              rel=""
              className="group -mx-4 flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-muted/30"
            >
              <span className="flex items-center font-normal">
                Pricing Switch
              </span>
              <span className="text-muted-foreground">
                Recreation of Layers.to pricing switch.
              </span>
            </a>
          </div>
        </div>
        <Separator className="mt-16 mb-6 w-full" />
        <div className="flex flex-wrap justify-between items-start gap-2 w-full ">
          <span className="text-muted-foreground text-xs">
            {`© ${new Date().getFullYear()} Carlos Vergikosk. All Rights Reserved.`}
          </span>
          <span className="text-muted-foreground text-xs">
            {`Website built using Next.js & TailwindCSS `}
            <Reference
              href="https://github.com/CarlosVergikosk/portofolio"
              className="decoration-1"
            >
              {"(source code)"}
            </Reference>
          </span>
        </div>
      </main>
    </div>
  );
}
