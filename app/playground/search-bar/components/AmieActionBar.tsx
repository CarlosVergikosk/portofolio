import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Settings />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-primary-foreground rounded-lg"
            align="start"
            side="top"
          >
            <DropdownMenuItem>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://pbs.twimg.com/profile_images/1714017504111005696/EbGiokeR_400x400.jpg" />
                <AvatarFallback>CV</AvatarFallback>
              </Avatar>
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium text-sm">Carlos Vergikosk</span>
                <span className="font-light text-xs text-muted-foreground">
                  All settings
                </span>
              </DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="font-light">
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="font-light">
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-light">
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
