"use client";

import ActionBaseCreatePane from "@/app/playground/search-bar/components/ActionBaseCreatePane";
import ActionBaseMainPane from "@/app/playground/search-bar/components/ActionBaseMainPane";
import { motion } from "framer-motion";
import React from "react";

const animate = {
  ["main"]: {
    width: 200,
    height: 48,
  },
  ["create"]: {
    width: 500,
    height: 150,
  },
};

export default function AmieActionBar() {
  const [page, setPane] = React.useState("main");

  const content = React.useMemo(() => {
    switch (page) {
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
      transition={{
        type: "spring",
        duration: 0.3,
      }}
      className="flex items-center justify-end rounded-2xl bg-primary-foreground shadow-sm ring-[1px] ring-muted-foreground/10 backdrop-blur p-2 overflow-hidden"
    >
      <motion.div layout="position">{content}</motion.div>
    </motion.div>
  );
}
