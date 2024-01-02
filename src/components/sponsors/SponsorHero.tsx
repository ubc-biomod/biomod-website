import React from "react";
import internal from "stream";

// properties of a sponsor
type SponsorProps = {
  progress: number;
};

const SponsorHero: React.FC<SponsorProps> = ({ progress }) => {
  return (
    <>
      <div className="bg-white">
        <div className="bg-gradient-to-b from-blue-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Thank you to our sponsors
              </h1>
            </div>

            <h4 className="text-center text-xl dark:text-black mt-4 mb-10 mx-9">
              The success of our previous years was only made possible due to
              generous sponsors like you.
            </h4>
            {/*
        <div>
        <div className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">25%</div>
        <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style="width: 25%"></div>
        </div>
        </div>
        */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorHero;
