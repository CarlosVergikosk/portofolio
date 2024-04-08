"use client";

import ActionBaseCreatePane from "@/app/playground/search-bar/components/ActionBaseCreatePane";
import ActionBaseMainPane from "@/app/playground/search-bar/components/ActionBaseMainPane";
import ActionBaseSearchPane from "@/app/playground/search-bar/components/ActionBaseSearchPane";
import ActionBaseSmartPane from "@/app/playground/search-bar/components/ActionBaseSmartPane";
import { motionConfig } from "@/app/playground/search-bar/motion/config";
import { motion } from "framer-motion";
import React from "react";

const parentVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 1 } },
};

export default function AmieActionBar() {
  const [page, setPane] = React.useState("main");

  const content = React.useMemo(() => {
    switch (page) {
      case "smart": {
        return <ActionBaseSmartPane onSelect={setPane} />;
      }

      case "search": {
        return <ActionBaseSearchPane onSelect={setPane} />;
      }

      case "create": {
        return <ActionBaseCreatePane onSelect={setPane} />;
      }

      default:
        return <ActionBaseMainPane onSelect={setPane} />;
    }
  }, [page]);

  return (
    <motion.div
      layout
      style={{
        borderRadius: 16,
      }}
      transition={motionConfig.transition}
      className="bg-primary-foreground shadow-sm ring-[1px] ring-muted-foreground/10 p-1 overflow-hidden"
    >
      {content}
    </motion.div>
  );
}
