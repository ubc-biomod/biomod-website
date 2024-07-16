import React from "react";
import HeroPlaceholder from "@/assets/sponsors/hero_placeholder.jpg";

type StaticImageData = {
  src: string;
};

export const JoinUsHero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center py-8 md:px-4 text-center md:w-6/12">
        <h2 className="text-5xl font-bold text-primary">Join Our Team!</h2>
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 mb-8 md:mb-0 text-2xl"
        >
          Get involved with UBC BIOMOD →
        </a>
      </div>
      <div className="flex items-center justify-center w-full md:w-[515px] md:h-[322px] h-64">
        <img
          src={(HeroPlaceholder as StaticImageData).src}
          alt="UBC BIOMOD"
          className="w-[515px] h-[322px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default JoinUsHero;
