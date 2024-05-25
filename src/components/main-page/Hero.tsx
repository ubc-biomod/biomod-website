import CellImage from "@/assets/cell.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Landing hero
    <div>
      <div
        className="flex flex-row flex-wrap items-center justify-center
                lg:flex-nowrap "
      >
        <Image
          className="lg:w-[50rem] lg:h-[50rem]"
          src={CellImage}
          alt="Hand-drawn Image of Cell"
        />
        <div
          className="flex flex-col w-fit items-center gap-y-[1.0rem]
                    lg:items-start lg:gap-y-[2.25rem]"
        >
          <h1
            className="text-primary text-[3.5rem] text-center
                        md:text-[6rem] lg:text-left"
          >
            UBC BIOMOD
          </h1>
          <h2
            className="text-center text-subHeadingRegMob
                        md:text-subHeadingReg lg:text-left"
          >
            This is gonna say something so super duper cool about biomod that
            everyone will freak and scroll through the entire website!
          </h2>
          <div
            className="bg-accent grow-0 px-[2.5rem] py-[1rem] rounded-[0.75rem]
                        mt-[1.4rem] text-white cursor-pointer hover:opacity-80"
          >
            Discover
          </div>
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
  return (
    <div className="flex flex-col text-center">
      <span
        className="text-primary 
                text-[6rem]"
      >
        {" "}
        {props.num}{" "}
      </span>
      <span
        className="text-subHeadingRegMob 
                md:text-subHeadingReg"
      >
        {props.description}
      </span>
    </div>
  );
}
