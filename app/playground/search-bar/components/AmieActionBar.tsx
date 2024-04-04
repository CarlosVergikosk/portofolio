"use client";

import ActionBaseCreatePane from "@/app/playground/search-bar/components/ActionBaseCreatePane";
import ActionBaseMainPane from "@/app/playground/search-bar/components/ActionBaseMainPane";
import ActionBaseSearchPane from "@/app/playground/search-bar/components/ActionBaseSearchPane";
import ActionBaseSmartPane from "@/app/playground/search-bar/components/ActionBaseSmartPane";
import { motion } from "framer-motion";
import React from "react";

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
      style={{ borderRadius: 16 }}
      transition={{
        layout: {
          type: "spring",
          duration: 0.22,
          bounce: 0.16,
        },
      }}
      className="flex items-center justify-end bg-primary-foreground shadow-sm ring-[1px] ring-muted-foreground/10 backdrop-blur p-1 overflow-hidden"
    >
      {content}
    </motion.div>
  );
}
