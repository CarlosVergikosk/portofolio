"use client";

import CardItem from "@/app/playground/stack-hover-effect/components/CardItem";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { motionConfig } from "@/app/playground/search-bar/motion/config";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function PricingAnimated(): JSX.Element {
  const [yearly, setYearly] = React.useState(false);

  return (
    <motion.div className="overflow-hidden flex flex-col items-center">
      <div
        className="flex items-center z-10 bg-primary-foreground justify-center gap-3 border border-solid border-muted-foreground/15 rounded-lg cursor-pointer select-none p-3 overflow-hidden"
        onClick={() => {
          setYearly((prev) => !prev);
        }}
      >
        <Switch id="yearly" onCheckedChange={setYearly} checked={yearly} />
        <Label htmlFor="yearly" className="text-base">
          Yearly
        </Label>
      </div>
      <div className="relative text-7xl flex items-center justify-center p-4 w-60 pt-16 z-0 overflow-hidden gap-1 font-medium text-primary">
        <motion.div
          layout
          className="text-lg right-10 text-orange-400 font-semibold"
          initial={{ opacity: 0, display: "none" }}
          transition={{
            rotate: {
              type: "spring",
              stiffness: 300,
              damping: 6,
              duration: 0.1,
            },
            y: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 0.2,
            },
          }}
          animate={{
            display: "flex",
            position: "absolute",
            opacity: yearly ? 1 : 0,
            y: yearly ? -45 : -50,
            rotate: yearly ? 16 : 20,
          }}
        >
          <motion.span layout>33% off!</motion.span>
        </motion.div>
        <span>$</span>
        <motion.span
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 0.2,
            delay: 0.08,
          }}
          initial={{ rotate: yearly ? 0 : 180 }}
          animate={{ rotate: yearly ? 0 : 180 }}
        >
          6
        </motion.span>
      </div>
      <span className="text-muted-foreground text-lg">per month</span>
    </motion.div>
  );
}
