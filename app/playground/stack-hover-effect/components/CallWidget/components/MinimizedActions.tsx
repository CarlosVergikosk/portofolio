"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Maximize2, Mic, MicOff, PhoneOff } from "lucide-react";
import React from "react";

dayjs.extend(relativeTime);

export default function MinimizedActions({
  mic,
  onMicChange,
  onMinimizeChange,
  onDisconnect,
}: {
  mic: boolean;
  onMicChange: React.Dispatch<React.SetStateAction<boolean>>;
  onMinimizeChange: React.Dispatch<React.SetStateAction<boolean>>;
  onDisconnect: () => void;
}): JSX.Element {
  return (
    <div className="flex flex-row gap-2">
      <Button
        size={"icon"}
        variant={mic ? "default" : "secondary"}
        className={cn(
          mic ? "text-muted" : "text-muted-foreground",
          "rounded-full"
        )}
        onClick={() => {
          onMicChange((prev) => !prev);
        }}
      >
        {mic ? <Mic size={18} /> : <MicOff size={18} />}
      </Button>
      <Button
        variant={"destructive"}
        size={"icon"}
        className="rounded-full gap-2 ml-auto"
        onClick={() => {
          onDisconnect();
        }}
      >
        <PhoneOff size={18} />
      </Button>
      <Button
        size={"icon"}
        variant={"secondary"}
        className="rounded-full ml-auto"
        onClick={() => {
          onMinimizeChange((prev) => !prev);
        }}
      >
        <Maximize2 size={18} />
      </Button>
    </div>
  );
}
