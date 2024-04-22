"use client";

import { Description } from "@/components/ui/description";
import { Title } from "@/components/ui/title";
import { ReactLenis } from "@/lib/react-lenis";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BerlinStory() {
  return (
    <ReactLenis root>
      <Title>Swiss Delegation at Hub Berlin 2022</Title>
      <Description>
        We were invited as part of the Swiss delegation to attend the Hub in
        Berlin. It was a great experience to meet other startups and to see the
        amazing projects that are being developed in the city.
      </Description>
      <div className="relative w-full h-[600px]">
        <motion.div
          className="z-10 absolute bottom-0 w-full"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              y: -20,
              scale: 0.97,
            },
            onscreen: {
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
              },
            },
          }}
        >
          <Image
            className="rounded-xl m-auto"
            alt="websummit_dinner"
            src={"/berlin/me_hub_berlin.jpg"}
            width={500}
            height={200}
          />
        </motion.div>
        <motion.div
          className="absolute top-0"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              x: 200,
              y: 100,
            },
            onscreen: {
              x: 200,
              y: 80,
              transition: {
                type: "spring",
                bounce: 0.4,
              },
            },
          }}
        >
          <Image
            className="rounded-xl"
            alt="websummit_dinner"
            src={"/berlin/boot.png"}
            width={400}
            height={100}
          />
        </motion.div>
        <motion.div
          className="absolute z-[9]"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              x: -50,
              y: 70,
              rotate: -2,
            },
            onscreen: {
              x: -50,
              y: 50,
              rotate: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
              },
            },
          }}
        >
          <Image
            className="rounded-xl"
            alt="train"
            src={"/berlin/metro.jpg"}
            width={300}
            height={200}
          />
        </motion.div>
      </div>
      <span className="text-center w-full text-sm mt-4 text-muted-foreground">
        Me in front of the Reichstag in Berlin.
      </span>
    </ReactLenis>
  );
}
