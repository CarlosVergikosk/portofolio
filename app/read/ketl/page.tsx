"use client";

import BalealStory from "@/app/read/ketl/components/baleal-story";
import BerlinStory from "@/app/read/ketl/components/berlin-story";
import RestaurantStory from "@/app/read/ketl/components/restaurant-story";
import WebsummitStory from "@/app/read/ketl/components/websummit-story";
import Header from "@/components/header";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Description } from "@/components/ui/description";
import { Reference } from "@/components/ui/reference";
import { Title } from "@/components/ui/title";

const group = "flex items-center flex-col my-12 sm:my-28";

export default function Ketl() {
  return (
    <div className="bg-background-rgb mx-auto my-8 max-w-[692px] py-5 antialiased sm:my-16 sm:px-6 sm:py-0">
      <Header />
      <ContentWrapper>
        <Title>This is my story at Ketl</Title>
        <div className="flex flex-col gap-6 mb-32">
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
          <Title>My first year</Title>
          <Description>
            During the first year i mostly worked on bug-fixing and overall
            improvements of the app. I consider this period as my learning
            phase, i learned a lot about software development and how to work in
            a team. It was key to my growth as a developer.
          </Description>
          <Description>
            I was also relatively new to the whole React eco-system, and
            thankfully i had enough space to learn more about the framework and
            to explore many of its libraries.
          </Description>

          <Title>The stake</Title>
          <Description>
            Its normal for startups to motivate their early employees with
            access to stock options - and Ketl was no exception. I was given the
            opportunity to own a small part of the company after the first year.
            This was a huge milestone for me, and it was a great motivation to
            make me take the next step. I was now a stakeholder in the company.
          </Description>

          <Title>It was a hell of an adventure.</Title>
          <Description>
            All good things have an end, and unfortunately Ketl wasn't meant to
            be. Down below you can find some of my best memories from this
            project, it was a pleasure to be part of this team.
          </Description>
        </div>

        <div className={group}>
          <WebsummitStory />
        </div>
        <div className={group}>
          <RestaurantStory />
        </div>
        <div className={group}>
          <BerlinStory />
        </div>
        <div className={group}>
          <BalealStory />
        </div>
      </ContentWrapper>
    </div>
  );
}
