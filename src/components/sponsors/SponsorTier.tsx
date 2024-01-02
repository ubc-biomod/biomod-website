import React from "react";
import internal from "stream";

// properties of a sponsor tier
type Sponsor = {
  name: string;
  tier: number;
};

const SponsorTier: React.FC<Sponsor> = ({ name, tier }) => {
  return (
    <>
      <a
        className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          {/*<img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"></img>
           */}
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
        </div>
      </a>
    </>
  );
};

export default SponsorTier;
