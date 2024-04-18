import Header from "@/components/header";
import ComponentItem from "@/components/ui/component-item";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <div className="mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0 h-full">
      <Header />
      <main className="mx-auto flex w-full flex-col items-center h-auto leading-relaxed">
        <div className="px-5">
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
        <div className="mt-16 w-full sm:mt-24 px-5">
          <Title>Components</Title>
          <div className="flex flex-col gap-y-2">
            <ComponentItem
              href="/playground/search-bar"
              title={"Amie Action Bar"}
              description="Recreation of the Amie action bar"
            />
            <ComponentItem
              href="/playground/globe"
              title={"GitHub Globe"}
              description="A globe similar to the one on GitHub"
            />
            <ComponentItem
              href="/playground/stack-hover-effect"
              title={"Stacked Event Cards"}
              description="A set of animated calendar cards"
            />
            <ComponentItem
              href="/playground/pricing-switch"
              title={"Pricing Switch"}
              description="Recreation of Layers.to pricing switch"
            />
            <ComponentItem
              href="/playground/image-enhancer"
              title={"Image Enhancer"}
              description="Image enhancer with a slider"
            />
          </div>
        </div>
      </main>
      <footer className="px-5 pt-16 mt-auto pb-6 sm:pb-8">
        <Separator className="my-4 w-full" />
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
      </footer>
    </div>
  );
}
