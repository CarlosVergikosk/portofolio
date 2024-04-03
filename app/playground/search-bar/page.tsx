import AmieActionBar from "@/app/playground/search-bar/components/AmieActionBar";
import Header from "@/components/header";

export default function SearchBar() {
  return (
    <div className="bg-background-rgb mx-auto my-8 h-full max-w-[692px] px-5 py-5 antialiased sm:my-16 sm:px-6 sm:py-0 overflow-hidden">
      <Header />
      <main className="mx-auto flex w-full flex-col items-center justify-center leading-relaxed">
        <div className="mb-3 w-full items-center justify-center font-medium leading-loose">
          Amie inspired search bar
        </div>
        <p className="w-full text-muted-foreground">
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
        </p>
        <div className="mt-8 w-full">
          <div className="container flex w-full items-end justify-center whitespace-nowrap rounded-xl border-[1px] border-primary-foreground bg-card h-96 sm:w-full py-12">
            <AmieActionBar />
          </div>
        </div>
      </main>
    </div>
  );
}
