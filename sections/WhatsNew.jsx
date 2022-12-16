"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaverse-X</>} />
        <div className="mt-[48px] flex-wrap flex justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        initial="hidden"
        whileInView="show"
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/whats-new.png"
          alt="whats-new"
          width="1403"
          height="1404"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
