import React from "react";
import joinUs from "./join_us.jpeg";
import Image from "next/image";

function JoinUsHero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6">
      <div className="flex flex-col items-center text-center basis-1/2">
        <h2 className="text-titleMob lg:text-titleReg font-semibold text-primary">
          Join Our Team!
        </h2>
        <h3 className="text-subHeadingRegMob lg:text-subHeadingReg">
          Get involved with UBC BIOMOD →
        </h3>
      </div>
      <Image
        src={joinUs}
        alt="UBC BIOMOD"
        width="0"
        height="0"
        className="h-full w-full lg:w-[40%] object-cover rounded-3xl"
      />
    </div>
  );
}

export default JoinUsHero;
