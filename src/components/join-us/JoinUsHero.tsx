import React from "react";
import joinUs from "./join_us.jpeg";
import Image from "next/image";

function JoinUsHero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 space-y-2 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center py-8 md:px-4 text-center md:w-6/12">
        <h2 className="text-titleMob lg:text-titleReg font-bold text-primary">
          Join Our Team!
        </h2>
        <h3 className="mt-8 mb-8 md:mb-0 text-2xl text-subHeadingRegMob lg:text-subHeadingReg">
          Get involved with UBC BIOMOD →
        </h3>
      </div>
      <Image
        src={joinUs}
        alt="UBC BIOMOD"
        width="0"
        height="0"
        className="h-auto w-full md:w-1/3 object-cover rounded-3xl"
      />
    </div>
  );
}

export default JoinUsHero;
