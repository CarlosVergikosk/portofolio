"use client";

import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RestaurantStory() {
  return (
    <>
      <Title>
        Eating at the famous{" "}
        <Reference href="https://www.solardospresuntos.com/">
          Solar dos Presuntos
        </Reference>
      </Title>
      <Description>
        I had to bring the team to eat at the famous Solar dos Presuntos, a
        traditional Portuguese restaurant in Lisbon.
      </Description>
      <motion.div
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
          src={"/websummit/websummit_dinner.jpg"}
          width={500}
          height={200}
        />
      </motion.div>
      <span className="text-center w-full text-sm mt-4 text-muted-foreground">
        {
          "The team eating at the famous Solar dos Presuntos restaurant in Lisbon."
        }
      </span>
    </>
  );
}
