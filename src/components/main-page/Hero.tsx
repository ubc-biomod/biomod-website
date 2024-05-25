import CellImage from "@/assets/cell.png";
import Image from "next/image";

export default function Hero() {
  return (
    // Landing hero
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
  );
}
