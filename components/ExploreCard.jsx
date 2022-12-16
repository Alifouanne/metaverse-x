"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, active, heandleClick, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.6, 0.8)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex justify-center items-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => heandleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="im"
      width="3624"
      height="1689"
      placeholder="blur"
      blurDataURL="/planet-01.png"
      className="absolute w-full h-full rounded-[24px] object-cover"
    />
    {active !== id ? (
      <h3 className="sm:text-[26px] text-[18px] font-semibold text-white z-0 absolute lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src="/headset.svg"
            alt="headset"
            width="60"
            height="60"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Enter the Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
