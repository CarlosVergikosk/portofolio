import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion } from "framer-motion";
import { ChevronLeft, Moon, Watch } from "lucide-react";
import Image from "next/image";
import React from "react";

dayjs.extend(relativeTime);

const WidgetItem = ({ children }: { children: any }) => {
  const [effect, setEffect] = React.useState(false);

  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      className={`${
        effect && "animate-shake"
      } flex flex-row justify-start font-normal h-auto items-center py-3 gap-3`}
      onClick={() => {
        setEffect(true);
      }}
      onAnimationEnd={() => setEffect(false)}
    >
      {children}
    </Button>
  );
};

interface Props {
  onSelect: (page: string) => void;
}

export default function ActionBaseSmartPane({ onSelect }: Props) {
  return (
    <motion.div
      layout="position"
      className="box-content flex flex-col justify-start w-[450px]"
    >
      <div className="text-sm flex items-center justify-between p-2 text-muted-foreground">
        <span>{"Manage Widgets"}</span>
        <span className="font-semibold">{"Available in Pro"}</span>
      </div>
      <Separator className="my-1" />
      <div className="w-full h-56 flex flex-col overflow-hidden">
        <WidgetItem>
          <div className="h-10 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Moon size={24} fill={"#fff"} />
          </div>
          <div className="flex flex-col justify-start font-normal items-start gap-0.5 text-muted-foreground">
            <span className="text-primary">{"Weather"}</span>
            <span className="text-xs font-light text-muted-foreground">
              {"Display the current weather based on your location"}
            </span>
          </div>
        </WidgetItem>
        <WidgetItem>
          <div className="h-10 w-12 bg-gradient-to-r from-slate-500 to-stone-400 rounded-lg flex items-center justify-center">
            <Watch size={24} className=" text-stone-100" />
          </div>
          <div className="flex flex-col justify-start font-normal items-start gap-0.5 text-muted-foreground">
            <span className="text-primary">{"Watch"}</span>
            <span className="text-xs font-light text-muted-foreground">
              {"Connect your watch and track your time"}
            </span>
          </div>
        </WidgetItem>
        <WidgetItem>
          <div className="h-10 w-12 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center">
            <Image
              src="/spotify.svg"
              width={28}
              height={28}
              alt="Spotify logo"
            />
          </div>
          <div className="flex flex-col justify-start font-normal items-start gap-0.5 text-muted-foreground">
            <span className="text-primary">{"Connect to Spotify"}</span>
            <span className="text-xs font-light text-muted-foreground">
              {"Share your favorite songs and playlists"}
            </span>
          </div>
        </WidgetItem>
      </div>
      <Separator className="my-1" />
      <motion.div
        transition={{ duration: 0.3, type: "spring" }}
        className="flex flex-row justify-between items-center w-full"
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className={"rounded-xl text-muted-foreground"}
          onClick={() => {
            onSelect("main");
          }}
        >
          <ChevronLeft />
        </Button>
        <Button variant={"secondary"} className="rounded-xl py-2 h-auto">
          {"Upgrade to Pro"}
        </Button>
      </motion.div>
    </motion.div>
  );
}
