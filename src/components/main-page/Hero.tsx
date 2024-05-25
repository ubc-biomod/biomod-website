import CellImage from "@/assets/cell.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  return (
    // Landing hero
    <div>
      <div
        className="flex flex-row flex-wrap items-center justify-center
                xl:flex-nowrap "
      >
        <Image
          className="xl:w-[50rem] xl:h-[50rem]"
          src={CellImage}
          alt="Hand-drawn Image of Cell"
        />
        <div
          className="flex flex-col w-fit items-center gap-y-[1.0rem]
                    xl:items-start xl:gap-y-[2.25rem]"
        >
          <h1
            className="text-primary text-[3.5rem] text-center
                        md:text-[6rem] xl:text-left"
          >
            UBC BIOMOD
          </h1>
          <h2
            className="text-center text-subHeadingRegMob
                        md:text-subHeadingReg xl:text-left"
          >
            This is gonna say something so super duper cool about biomod that
            everyone will freak and scroll through the entire website!
          </h2>
          <Link
            href={"/about"}
            className="bg-accent grow-0 px-[2.5rem] py-[1rem] rounded-[0.75rem]
                        mt-[1.4rem] text-white cursor-pointer hover:opacity-80"
          >
            Discover
          </Link>
        </div>
      </div>

      <Statistics />
    </div>
  );
}

function Statistics() {
  return (
    <div
      className="flex flex-col justify-center items-center
            gap-y-[1.5rem]
            md:flex-row md:gap-x-[5rem] lg:gap-x-[8rem]"
    >
      <Number num={12} description="years running" />
      <Number num={10} description="projects made" />
      <Number num={6} description="first place wins" />
    </div>
  );
}

function Number(props: { num: number; description: string }) {
  const [currNum, setCurrNum] = useState(0);
  const currNumRef = useRef(0);
  const increaseCount = async () => {
    await new Promise((r) => setTimeout(r, 4));
    if (currNumRef.current == props.num) return;

    currNumRef.current += 1;
    setCurrNum(currNumRef.current);
  };
  return (
    <div className="flex flex-col text-center">
      <div className="relative flex flex-row justify-center">
        <AnimatePresence>
          <motion.span
            key={"description" + currNumRef.current}
            className="text-primary text-[6rem] absolute z-0"
            initial={{ opacity: 0, position: "absolute", top: "-100px" }}
            animate={{ opacity: 1, position: "relative", top: "0px" }}
            exit={{ opacity: 0, position: "absolute", top: "100px" }}
            transition={{ ease: "circInOut", duration: 0.4 }}
            onAnimationComplete={increaseCount}
          >
            {currNum}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="text-subHeadingRegMob z-10
                md:text-subHeadingReg"
      >
        {props.description}
      </span>
    </div>
  );
}
