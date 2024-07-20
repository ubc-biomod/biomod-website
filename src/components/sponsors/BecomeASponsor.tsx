import React from "react";
import Link from "next/link";
import Image from "next/image";
import becomeASponsor from "./become_a_sponsor.jpg";

function BecomeASponsor() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-titleMob lg:text-titleReg font-bold text-primary">
        Become a sponsor
      </h1>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
        <Image
          src={becomeASponsor}
          alt="Photo of UBC BIOMOD 2023 Team"
          className="lg:w-1/2 rounded-xl"
        />
        <div className="basis-1/2 flex flex-col items-center gap-8 text-center">
          <p>
            Want to support our cause? Become a sponsor! Our strong performances
            in previous BIOMOD competitions wouldn&apos;t be possible without
            sponsors like you.
          </p>
          <Link href="#" className="btn btn--primary">
            Become a sponsor today!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BecomeASponsor;
