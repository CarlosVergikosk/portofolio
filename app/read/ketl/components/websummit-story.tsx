"use client";

import { Description } from "@/components/ui/description";
import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WebsummitStory() {
  return (
    <>
      <Title>Alpha Startup at WebSummit 2022</Title>
      <Description>
        In 2022, we had the opportunity to attend the WebSummit in Lisbon,
        Portugal. It was a great experience to present the capital of my country
        to the team and to show them the amazing food we have.
      </Description>  
      <motion.div
        className="z-10"
        initial="offscreen"
        whileInView="onscreen"
        variants={{
          offscreen: {
            y: 5,
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
          alt="websummit_group"
          src={"/websummit/websummit_group.jpg"}
          width={500}
          height={200}
        />
      </motion.div>

      <span className="text-center w-full text-sm mt-4 text-muted-foreground">
        {
          "The team at the Night Summit in Lisbon. (Yes, we were all super tired)"
        }
      </span>
    </>
  );
}
