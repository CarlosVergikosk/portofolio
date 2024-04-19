"use client";

import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";
import Image from "next/image";

const group = "flex items-center flex-col my-12";

export default function ketl() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper>
        <Title>This is my story at Ketl</Title>
        <div className="flex flex-col gap-6 mb-16">
          <Description>
            The year is 2020, the Covid pandemic is in full swing, and I have
            just arrived in Geneva, Switzerland. Having just graduated high
            school, I do not speak French and have no real work experience. My
            goal was to find my first job.
          </Description>
          <Description>
            I embarked on a journey of job hunt with very little to back me up.
            I wasn't sure what I wanted to do or what I was good at. Back then,
            I was just a kid with a lot of dreams and ambitions.
          </Description>
          <Description>
            One day i stumbled upon a job offer from a company called Ketl. I
            was intrigued by the project, it was something related to using AI
            to organize documents. I decided to contact their CTO{" "}
            <Reference href="https://linkedin.com/in/nicolascasademont">
              Nicolas Casademont
            </Reference>{" "}
            on <Reference href="https://linkedin.com">LinkedIn</Reference>,
            little i know that this would be the start of an amazing journey.
          </Description>
          <Description>
            After a brief chat, i was invited for an interview at their Office
            in Carouge, Geneva. I was super nervous, it would be my first
            interview ever. I remember that i was wearing a nice chemise with
            some blue flowers on it.
          </Description>
          <Description>
            I was hired on the place, and i started the next day. I was super
            happy and super excited to start my first job.
          </Description>
          <Description>
            I was responsible for fixing bugs on the frontend and helping the
            team with new features. It was a long journey, i did that type of
            job for almost an year until i was invited to join the capital of
            the company.
          </Description>
          <Description>
            My entrepreneurial spirit and ambition to always do more led me to
            gain the trust of the team and to receive the responsibility of
            handling the frontend by myself. I also participated in marketing,
            product, and strategy discussions.
          </Description>
          <Description>After this, the rest is history.</Description>
        </div>

        <div className={group}>
          <Title>Alpha Startup at WebSummit 2022</Title>
          <Description>
            In 2022, we had the opportunity to attend the WebSummit in Lisbon,
            Portugal. It was a great experience to present the capital of my
            country to the team and to show them the amazing food we have.
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
              src={"/websummit_group.jpg"}
              width={500}
              height={200}
            />
          </motion.div>

          <span className="text-center w-full text-sm mt-4 text-muted-foreground">
            {
              "The team at the Night Summit in Lisbon. (Yes, we were all super tired)"
            }
          </span>
        </div>
        <div className={group}>
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
              src={"/websummit_dinner.jpg"}
              width={500}
              height={200}
            />
          </motion.div>
          <span className="text-center w-full text-sm mt-4 text-muted-foreground">
            {
              "The team eating at the famous Solar dos Presuntos restaurant in Lisbon."
            }
          </span>
        </div>
        <div className={group}>
          <Title>Swiss Delegation at Hub Berlin 2022</Title>
          <Description>
            We were invited as part of the Swiss delegation to attend the Hub in
            Berlin. It was a great experience to meet other startups and to see
            the amazing projects that are being developed in the city.
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
              src={"/me_hub_berlin.jpg"}
              width={500}
              height={200}
            />
          </motion.div>
          <span className="text-center w-full text-sm mt-4 text-muted-foreground">
            Me in front of the Reichstag in Berlin.
          </span>
        </div>
        <div className={group}>
          <Title>A trip to my home-town</Title>
          <Description>
            I had the opportunity to take the team to Baleal, a small village
            next to the ocean in Portugal.
          </Description>
          <Description className="mt-6">
            We took a car trip from Lisbon to Baleal and then we went to eat at
            my parent's place. It was a great experience to show them the place
            where i came from.
          </Description>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                y: 40,
                rotate: 0,
              },
              onscreen: {
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
              className="rounded-xl mt-12 shadow-2xl"
              alt="websummit_dinner"
              src={"/baleal/baleal_island.jpg"}
              width={480}
              height={200}
            />
          </motion.div>
          <motion.div
            className="z-10"
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
              className="rounded-xl -mt-2 shadow-2xl"
              alt="websummit_dinner"
              src={"/baleal/baleal_team.jpg"}
              width={540}
              height={200}
            />
          </motion.div>

          <span className="text-center w-full text-sm mt-4 text-muted-foreground">
            The team next to the ocean at Baleal.
          </span>
        </div>
      </ContentWrapper>
    </div>
  );
}
