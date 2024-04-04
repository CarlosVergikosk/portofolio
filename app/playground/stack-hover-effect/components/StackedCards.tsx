"use client";

import CardItem from "@/app/playground/stack-hover-effect/components/CardItem";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const transition = { duration: 0.3, type: "spring" };

export default function StackedCards(): JSX.Element {
  const [hover, setHover] = React.useState(false);

  return (
    <motion.div
      className="cursor-pointer"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <motion.div
        className="absolute z-30 h-[240px] w-[200px] cursor-pointer"
        transition={transition}
        animate={{
          y: hover ? 10 : 38,
          scale: hover ? 1 : 0.8,
          x: hover ? 122 : 0,
          rotate: hover ? 5 : 0,
          opacity: 0.8,
        }}
      >
        <CardItem
          title={"Design Discussion"}
          time={dayjs().add(1, "week").fromNow()}
          from={"14:30 PM"}
          to={"15:00 PM"}
          invited={2}
          accepted={2}
        />
      </motion.div>
      <motion.div
        className="absolute z-30 h-[240px] w-[200px] cursor-pointer"
        transition={transition}
        animate={{
          y: hover ? 10 : 20,
          scale: hover ? 1 : 0.9,
          x: hover ? -122 : 0,
          rotate: hover ? -5 : 0,
          opacity: 0.95,
        }}
      >
        <CardItem
          title={"Interview"}
          time={dayjs().add(1, "hour").fromNow()}
          from={"10:30 AM"}
          to={"11:00 AM"}
          invited={4}
          accepted={2}
        />
      </motion.div>
      <motion.div
        className="absolute z-30 h-[240px] w-[200px] cursor-pointer"
        transition={transition}
      >
        <CardItem
          title={"Design Session"}
          time={dayjs().add(3, "minutes").fromNow()}
          from={"11:30 AM"}
          to={"12:00 AM"}
          invited={4}
          accepted={4}
        />
      </motion.div>
    </motion.div>
  );
}
