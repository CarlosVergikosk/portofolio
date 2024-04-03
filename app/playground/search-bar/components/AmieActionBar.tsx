import { Plus, Search, Settings, Sparkles } from "lucide-react";

const Button = ({ children }) => {
  return (
    <div className="cursor-pointer hover:bg-muted-foreground/10 hover:text-accent-foreground text-muted-foreground flex items-center justify-center gap-[2px] rounded-lg px-2 py-2 transition-all duration-150 ease-in-out">
      {children}
    </div>
  );
};

export default function AmieActionBar() {
  return (
    <div className="w-auto box-content flex h-[36px] flex-row items-center justify-center gap-1 rounded-2xl bg-primary-foreground p-2 shadow-sm ring-[1px] ring-muted-foreground/10 backdrop-blur">
      <div className="flex flex-row items-center">
        <Button>
          <Sparkles strokeWidth={1.6} />
        </Button>
        <hr className="mx-1 h-4 w-px shrink-0 border-none bg-primary/10"></hr>
        <Button>
          <Search />
        </Button>
        <Button>
          <Plus />
        </Button>
        <Button>
          <Settings />
        </Button>
      </div>
    </div>
  );
}
