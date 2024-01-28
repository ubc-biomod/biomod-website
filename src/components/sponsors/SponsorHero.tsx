import React, { useState } from "react";

// state variable
// const [color, setColor] = useState("#fffffff");

// const setStyle = (color) => {
//     setColor(color);
// }

const SponsorHero: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:text-sky-700">
              <strong>Thank you to our sponsors</strong>
            </h1>
          </div>

          <h4 className="text-center text-xl dark:text-black mt-10 mb-10 mx-9">
            The success of our previous years was only made possible due to
            generous sponsors like you.
          </h4>
        </div>
      </div>
    </>
  );
};

export default SponsorHero;
