"use client";

import { motionConfig } from "@/app/playground/search-bar/motion/config";
import CardItem, {
  CallInfo,
} from "@/app/playground/stack-hover-effect/components/StackedCards/components/CardItem";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

dayjs.extend(relativeTime);

const size = "h-44 w-36 sm:h-60 sm:w-52";

const events = [
  {
    key: "aadbc2u3a",
    title: "Design Discussion",
    time: dayjs().add(1, "week").fromNow(),
    from: "14:30 PM",
    to: "15:00 PM",
    invited: 2,
    accepted: 2,
    position: {
      y: (y: number, hover: boolean) => (hover ? 10 : y * 2),
      scale: 0.8,
      x: (x: number) => x,
      rotate: (rotate: number) => rotate,
      opacity: 0.8,
    },
  },
  {
    key: "aadbc2u3b",
    title: "Interview",
    time: dayjs().add(1, "hour").fromNow(),
    from: "10:30 AM",
    to: "11:00 AM",
    invited: 4,
    accepted: 2,
    position: {
      y: (y: number, hover: boolean) => (hover ? 10 : y),
      scale: 0.9,
      x: (x: number) => -x,
      rotate: (rotate: number) => -rotate,
      opacity: 0.95,
    },
  },
  {
    key: "aadbc2u3c",
    title: "Design Session",
    time: dayjs().add(3, "minutes").fromNow(),
    from: "11:30 AM",
    to: "12:00 AM",
    invited: 4,
    accepted: 4,
  },
];

export default function StackedCards({
  onJoin,
}: {
  onJoin: (data: CallInfo) => void;
}): JSX.Element {
  const [hover, setHover] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [data, setData] = React.useState<CallInfo | undefined>(undefined);

  const isSmall = useMediaQuery("(min-width: 640px)");
  const x = isSmall ? 122 : 70;
  const y = isSmall ? 20 : 16;

  return (
    <div
      className={cn(
        size,
        "absolute z-30 flex cursor-pointer flex-col justify-between rounded-2xl transition-all duration-[250] ease-out"
      )}
    >
      <AnimatePresence
        onExitComplete={() => {
          if (data) {
            onJoin(data);
          }
        }}
      >
        {visible && (
          <motion.div
            className="cursor-pointer"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.key}
                className={cn(size, "absolute cursor-pointer")}
                transition={motionConfig.transition}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  y: event.position?.y(y, hover),
                  scale: hover ? 1 : event.position?.scale || 1,
                  x: hover ? event.position?.x(x) : 0,
                  rotate: hover ? event.position?.rotate(5) : 0,
                  opacity: event.position?.opacity || 1,
                }}
                exit={{
                  y: event.position?.y(y, false),
                  scale: event.position?.scale || 1,
                  x: 0,
                  rotate: 0,
                  opacity: index === events.length - 1 ? 1 : 0,
                }}
              >
                <div className="bg-background rounded-2xl shadow-md border border-solid border-muted-foreground/10 h-full">
                  <motion.div
                    className="flex flex-col gap-2 sm:gap-4 p-2.5 sm:p-3 h-full"
                    transition={{
                      delay: 0.1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    <CardItem
                      title={event.title}
                      time={event.time}
                      from={event.from}
                      to={event.to}
                      invited={event.invited}
                      accepted={event.accepted}
                      onJoin={() => {
                        setData(event);
                        setVisible(false);
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
