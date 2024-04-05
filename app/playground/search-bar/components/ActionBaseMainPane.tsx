import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Search, Settings, Shapes, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const custom = "rounded-xl text-muted-foreground";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.16,
    },
  },
};

const size = 22;

interface Props {
  onSelect: (page: string) => void;
}

export default function ActionBaseMainPane({ onSelect }: Props) {
  return (
    <motion.div
      layout="position"
      className="h-[40px] w-auto flex flex-row items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <Button
        variant={"ghost"}
        size={"icon"}
        className={custom}
        onClick={() => {
          onSelect("smart");
        }}
      >
        <Shapes strokeWidth={1.6} size={size} fill="currentColor" />
      </Button>
      <hr className="mx-2 h-4 w-px shrink-0 border-none bg-muted"></hr>
      <Button
        variant={"ghost"}
        size={"icon"}
        className={custom}
        onClick={() => {
          onSelect("search");
        }}
      >
        <Search size={size} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        className={custom}
        onClick={() => {
          onSelect("create");
        }}
      >
        <Plus size={size} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className={custom}>
            <Settings size={size} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start" side="top">
          <DropdownMenuItem>
            <Avatar className="h-8 w-8">
              <AvatarImage asChild src="/cvk.svg">
                <Image src="/cvk.svg" alt="logo" width={32} height={32} />
              </AvatarImage>
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
    </motion.div>
  );
}
