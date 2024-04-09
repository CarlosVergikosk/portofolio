import AmieActionBar from "@/app/playground/search-bar/components/AmieActionBar";
import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Title } from "@/components/ui/title";

export default function SearchBar() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper>
        <Title>Amie inspired search bar</Title>
        <Description>
          When I first used&nbsp;
          <a
            className="underline decoration-light-mode-primary/15 decoration-2 transition-all duration-200 ease-in-out font-normal decoration-muted hover:decoration-muted-foreground"
            href="https://www.amie.so/"
            target="_blank"
            rel="noreferrer"
          >
            Amie
          </a>
          , I instantly noticed the action bar on the bottom. It seemed like a
          nice way to interact with the app, instead of using a regular
          navigation bar.
          <br />
          <br />I really enjoyed the animations and transition as well, so I
          decided to recreate some aspects of it and also add a bit more motion.
        </Description>
        <div className="mt-8 w-full">
          <div className="container flex w-full items-end justify-center whitespace-nowrap rounded-xl border-[1px] border-muted-foreground/20 bg-card h-96 sm:w-full py-10">
            <AmieActionBar />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
