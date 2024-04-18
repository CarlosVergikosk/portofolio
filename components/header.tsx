"use client";

import { motionConfig } from "@/app/playground/search-bar/motion/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <header className="mx auto mb-16 sm:mb-16 w-full">
      <link rel="icon" type="image/x-icon" href="/cvk.ico" />
      <div className="flex flex-row items-center gap-2 w-full">
        <a
          href="/"
          className="flex flex-row items-center gap-4 hover:bg-muted/30 rounded-lg p-4 w-full"
        >
          <motion.div
            initial={{
              display: isRoot ? "none" : "flex",
            }}
            transition={motionConfig.transition}
            animate={{
              display: isRoot ? "none" : "flex",
            }}
            exit={{
              display: "none",
            }}
          >
            <ChevronLeft size={24} />
          </motion.div>
          <Avatar className="h-10 w-10">
            <AvatarImage asChild src="/cvk.svg">
              <Image src="/cvk.svg" alt="logo" width={40} height={40} />
            </AvatarImage>
            <AvatarFallback>CV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="flex items-center font-medium text-primary">
              Carlos Vergikosk
            </span>
            <span className="text-muted-foreground font-normal text-sm sm:text-base">
              Frontend Developer / UI Designer
            </span>
          </div>
        </a>
      </div>
    </header>
  );
}
