import Link from "next/link";
import Image from "next/image";
import blankImage from "@/assets/blankImage.png";

export default function GetInvolved() {
  return (
    <div
      className="flex flex-col-reverse gap-y-[1.5rem] justify-center items-center
            md:flex-row md:gap-x-[3rem]"
    >
      <div className="flex flex-col items-center text-center">
        <h3
          className="text-primary text-headingRegMob bold
                    md:text-headingReg"
        >
          Get Involved
        </h3>
        <p
          className="text-subHeadingRegMob
                    md:text-subHeadingReg"
        >
          Want to get involved with UBC BIOMOD? Check our Instagram for upcoming
          events!
        </p>
        <Link href={"/join-us"}>
          <div
            className="text-white bg-primary px-[2.5rem] py-[1rem] rounded-[0.75rem]
                        mt-[1.5rem]"
          >
            Learn More
          </div>
        </Link>
      </div>
      <Image className="w-full" src={blankImage} alt="Team & events Image" />
    </div>
  );
}
