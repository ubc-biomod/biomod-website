import React from "react";
import Link from "next/link";

function BecomeASponsor() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-5xl md:text-7xl font-bold text-primary">
        Become a sponsor
      </h1>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
        <div className="bg-slate-500 h-[9rem] w-full md:h-[20rem] md:w-[50rem] rounded-2xl"></div>
        <div className="basis-1/2 flex flex-col items-center gap-8 text-center">
          <p>
            Want to support our cause? Become a sponsor! Our strong performances
            in previous BIOMOD competitions wouldn&apos;t be possible without
            sponsors like you.
          </p>
          <Link
            href="#"
            className="text-center text-white bg-primary hover:opacity-80 py-4 px-8 rounded-2xl"
          >
            Become a sponsor today!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BecomeASponsor;
