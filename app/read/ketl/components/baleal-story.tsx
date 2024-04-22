"use client";

import { Description } from "@/components/ui/description";
import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BalealStory() {
  return (
    <>
      <Title>A trip to my home-town</Title>
      <Description>
        I had the opportunity to take the team to Baleal, a small village next
        to the ocean in Portugal.
      </Description>
      <Description className="mt-6">
        We took a car trip from Lisbon to Baleal and then we went to eat at my
        parent's place. It was a great experience to show them the place where i
        came from.
      </Description>
      <div className="relative h-[48rem] w-full mt-16">
        <motion.div
          className="w-full"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              height: 400,
              y: 40,
              rotate: 0,
            },
            onscreen: {
              height: 400,
              y: 20,
              rotate: -2,
              transition: {
                type: "spring",
                bounce: 0.2,
              },
            },
          }}
        >
          <Image
            className="rounded-xl shadow-2xl m-auto"
            alt="websummit_dinner"
            src={"/baleal/baleal_island.jpg"}
            width={480}
            height={200}
          />
        </motion.div>
        <motion.div
          className="z-10 absolute bottom-0 w-full"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              y: 5,
              rotate: 1,
            },
            onscreen: {
              y: 0,
              rotate: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
              },
            },
          }}
        >
          <Image
            className="rounded-xl shadow-2xl m-auto"
            alt="websummit_dinner"
            src={"/baleal/baleal_team.jpg"}
            width={540}
            height={200}
          />
        </motion.div>
      </div>
      <span className="text-center w-full text-sm mt-4 text-muted-foreground">
        The team next to the ocean at Baleal.
      </span>
    </>
  );
}
