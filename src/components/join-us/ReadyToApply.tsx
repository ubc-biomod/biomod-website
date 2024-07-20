import Image from "next/image";
import Link from "next/link";
import blankImg from "@/assets/blankImage.png";
import { useState } from "react";

export default function ReadyToApply() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row gap-x-[7rem] items-center">
      <Image
        src={blankImg}
        alt="Image of our team!!"
        className="lg:w-[60%] h-[20rem] lg:h-[30rem]"
      />
      {!isApplicationOpen ? (
        <div className="flex flex-col items-center basis-1/2 gap-y-4 lg:gap-y-10 text-center">
          <h1
            className="text-headingRegMob text-primary font-semibold
                    lg:text-headingReg"
          >
            Ready to apply?
          </h1>
          <p>
            Applications are currently closed, but keep an eye out! We accept
            new members every term, so follow our Instagram to get the latest
            news!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center basis-1/2 gap-y-4 lg:gap-y-10 text-center">
          <h1
            className="text-headingRegMob text-primary font-semibold
                    lg:text-headingReg"
          >
            Apply now!!!
          </h1>
          <p>Applications are currently open until June 19th, 2024.</p>
          <Link
            href={"/about"}
            className="bg-accent grow-0 px-[2.5rem] py-[1rem] rounded-[0.75rem]
                        mt-[1.4rem] text-white cursor-pointer hover:opacity-80"
          >
            Apply
          </Link>
        </div>
      )}
    </div>
  );
}