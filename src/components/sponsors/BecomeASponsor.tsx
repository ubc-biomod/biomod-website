import React from "react";
import Link from "next/link";
import Image from "next/image";
import becomeASponsor from "./become_a_sponsor.jpg";

function BecomeASponsor() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-titleMob lg:text-titleReg font-bold text-primary font-title">
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
          <div className="flex flex-row gap-x-6">
            <Link
              href="https://drive.google.com/file/d/15A3nlixAvMBReDsuk2gmMqtoEK0zBOxe/view"
              className="btn btn--primary"
            >
              Sponsorship Package
            </Link>
            <Link
              href="https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=Biomod+Team%20G1541"
              className="btn btn--primary"
            >
              Become a sponsor today!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeASponsor;
