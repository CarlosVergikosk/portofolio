import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, Ellipsis, UsersRound, Video } from "lucide-react";
import { motion } from "framer-motion";

const custom = "rounded-xl text-muted-foreground";

interface Props {
  onSelect: (page: string) => void;
}

export default function ActionBaseCreatePane({ onSelect }: Props) {
  return (
    <AnimatePresence mode={"wait"}>
      <div className="box-content flex flex-col items-center justify-start w-96">
        <div className="flex flex-row justify-start items-center w-full">
          <Video className="m-2" size={20} />
          <span className="text-sm">Add location or call</span>
        </div>
        <Separator />
        <div className="flex flex-row h-16 w-full items-start p-2">
          <div className="text-sm flex flex-row gap-2">
            <UsersRound size={18} />
            <Input
              type="email"
              placeholder="Add guests"
              variant={"ghost"}
              className="p-0 h-auto"
            />
          </div>
        </div>
        <Separator className="my-1" />
        <motion.div
          transition={{ duration: 0.3, type: "spring" }}
          className="flex flex-row justify-between items-center w-full"
        >
          <Button
            variant={"ghost"}
            size={"icon"}
            className={custom}
            onClick={() => {
              onSelect("main");
            }}
          >
            <ChevronLeft />
          </Button>
          <Button variant={"ghost"} size={"icon"} className={custom}>
            <Ellipsis />
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
