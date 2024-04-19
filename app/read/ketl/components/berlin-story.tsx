"use client";

import { Description } from "@/components/ui/description";
import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BerlinStory() {
  return (
    <>
      <Title>Swiss Delegation at Hub Berlin 2022</Title>
      <Description>
        We were invited as part of the Swiss delegation to attend the Hub in
        Berlin. It was a great experience to meet other startups and to see the
        amazing projects that are being developed in the city.
      </Description>
      <motion.div
        className="z-10"
        initial="offscreen"
        whileInView="onscreen"
        variants={{
          offscreen: {
            y: 20,
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
          className="rounded-xl mt-12"
          alt="websummit_dinner"
          src={"/berlin/me_hub_berlin.jpg"}
          width={500}
          height={200}
        />
      </motion.div>
      <span className="text-center w-full text-sm mt-4 text-muted-foreground">
        Me in front of the Reichstag in Berlin.
      </span>
    </>
  );
}
