"use client";

import { motionConfig } from "@/app/playground/search-bar/motion/config";
import MinimizedActions from "@/app/playground/stack-hover-effect/components/CallWidget/components/MinimizedActions";
import { CallInfo } from "@/app/playground/stack-hover-effect/components/StackedCards/components/CardItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AnimatePresence, motion } from "framer-motion";
import {
  CameraOff,
  Mic,
  MicOff,
  Minimize2,
  MonitorUp,
  PhoneOff,
  Speaker,
  Tag,
  User,
  Video,
  VideoOff,
} from "lucide-react";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

dayjs.extend(relativeTime);

const padding = "p-2.5 sm:p-3";

export default function CallWidget({
  data,
  onDisconnect,
}: {
  data: CallInfo;
  onDisconnect: () => void;
}): JSX.Element {
  const isLaptop = useMediaQuery("(min-width: 640px)");
  const [visible, setVisible] = React.useState(true);
  const [mic, setMic] = React.useState(true);
  const [video, setVideo] = React.useState(true);
  const [duration, setDuration] = React.useState("00:00:00");
  const [startTime, setStartTime] = React.useState(new Date().getTime());
  const [minimized, setMinimized] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const durationInSeconds = Math.floor((Date.now() - startTime) / 1000);
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = durationInSeconds % 60;

      const formattedDuration = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      setDuration(formattedDuration);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const initial = React.useMemo(() => {
    return {
      width: isLaptop ? "13rem" : "9rem",
      height: isLaptop ? "15rem" : "11rem",
    };
  }, [isLaptop]);

  const size = React.useMemo(() => {
    if (minimized == true) {
      return {
        width: "20rem",
        height: isLaptop ? "4.3rem" : "3.8rem",
      };
    }

    return {
      width: isLaptop ? "25rem" : "17rem",
      height: isLaptop ? "20rem" : "19rem",
    };
  }, [isLaptop, minimized]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (data) {
          onDisconnect();
        }
      }}
    >
      {visible && (
        <motion.div
          layout
          className="cursor-pointer bg-background flex flex-col gap-2 sm:gap-4 rounded-2xl shadow-md border border-solid border-muted-foreground/10 h-full"
          initial={initial}
          transition={motionConfig.transition}
          animate={size}
          exit={{ opacity: 0 }}
        >
          <div>
            <div className={cn(padding, "flex flex-col")}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base text-primary font-semibold">
                    {data.title}
                  </span>
                  <span className="text-muted-foreground text-xs sm:text-sm">
                    {duration}
                  </span>
                </div>
                {minimized ? (
                  <MinimizedActions
                    mic={mic}
                    onMinimizeChange={setMinimized}
                    onDisconnect={() => {
                      setVisible(false);
                    }}
                    onMicChange={setMic}
                  />
                ) : (
                  <Button
                    size={"icon"}
                    variant={"secondary"}
                    className="rounded-full ml-auto"
                    onClick={() => {
                      setMinimized((prev) => !prev);
                    }}
                  >
                    <Minimize2 size={18} />
                  </Button>
                )}
              </div>
            </div>

            {!minimized && <Separator />}
          </div>

          {!minimized && (
            <motion.div
              className="w-full p-4 flex flex-row justify-center gap-8 items-center"
              transition={motionConfig.transition}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: minimized ? 0 : 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="flex items-center justify-center flex-col gap-2">
                <div className="bg-muted w-20 h-20 rounded-2xl border border-solid border-muted-foreground/10 flex items-center justify-center">
                  <User size={42} strokeWidth={1.5} />
                </div>
                <span className="text-sm text-muted-foreground">You</span>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <div className="bg-muted w-20 h-20 rounded-2xl border border-solid border-muted-foreground/10 flex items-center justify-center">
                  <User size={42} strokeWidth={1.5} />
                </div>
                <span className="text-sm text-muted-foreground">Jorge</span>
              </div>
            </motion.div>
          )}
          {!minimized && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              animate={{
                opacity: 1,
              }}
              className="mt-auto flex flex-col justify-between"
            >
              <Separator />
              <div
                className={cn(
                  padding,
                  "flex flex-row justify-evenly sm:justify-start gap-2 items-center"
                )}
              >
                <Button
                  size={"icon"}
                  variant={mic ? "default" : "secondary"}
                  className={cn(
                    mic ? "text-muted" : "text-muted-foreground",
                    "rounded-full"
                  )}
                  onClick={() => {
                    setMic((prev) => !prev);
                  }}
                >
                  {mic ? <Mic size={18} /> : <MicOff size={18} />}
                </Button>
                <Button
                  size={"icon"}
                  variant={video ? "default" : "secondary"}
                  className={cn(
                    video ? "text-muted" : "text-muted-foreground",
                    "rounded-full"
                  )}
                  onClick={() => {
                    setVideo((prev) => !prev);
                  }}
                >
                  {video ? <Video size={18} /> : <VideoOff size={18} />}
                </Button>
                <Button
                  size={"icon"}
                  className="rounded-full text-muted-foreground"
                  variant={"secondary"}
                >
                  <MonitorUp size={18} />
                </Button>
                <Button
                  variant={"destructive"}
                  size={!minimized && isLaptop ? "default" : "icon"}
                  className="rounded-full gap-2 sm:ml-auto"
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  <PhoneOff size={18} />
                  {!minimized && isLaptop && "Disconnect"}
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
