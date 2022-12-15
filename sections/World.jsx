"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TitleText, TypingText } from "../components";
import { card } from "../constants";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| people on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="h-full w-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="h-full w-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="h-full w-full" />
        </div>
        {card.map((item, index) => (
          <div
            className={`absolute ${
              item.active ? "left-[265px] top-[190px]" : "right-[228px] top-10"
            } p-[6px] rounded-[24px]  bg-[#5d6680] w-[220px] h-[170px] sm:hidden min-[1250px]:flex min-[1250px]:flex-1 hidden `}
            key={index}
          >
            <img
              src={item.imgUrl}
              alt="card"
              className="h-full w-full rounded-[24px]"
            />
            <p
              className={`text-white absolute font-bold text-[18px] left-[25px] top-[128px] leading-6`}
            >
              {item.title}
            </p>
            <p className="absolute text-white font-normal text-[12px] leading-4 top-[100px] left-[75px]">
              + 264 has joined
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
