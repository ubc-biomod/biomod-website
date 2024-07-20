import Link from "next/link";
import Image from "next/image";
import getInvolved from "./get_involved.jpg";

export default function GetInvolved() {
  return (
    <div
      className="flex flex-col-reverse gap-y-[1.5rem] justify-center items-center
            lg:flex-row lg:gap-x-[3rem] px-4 lg:px-20"
    >
      <div className="flex flex-col items-center text-center gap-4 lg:gap-8">
        <h3 className="text-primary text-headingRegMob font-semibold lg:text-headingReg">
          Get Involved
        </h3>
        <div className="flex flex-col items-center text-center">
          <p className="text-subHeadingRegMob lg:text-subHeadingReg">
            Want to get involved with UBC BIOMOD? Check our Instagram for
            upcoming events!
          </p>
          <Link href="https://www.instagram.com/ubcbiomod/" target="_blank">
            <div
              className="text-white bg-primary px-[2.5rem] py-[1rem] rounded-[0.75rem]
                          mt-[1.5rem]"
            >
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <Image
        className="w-full rounded-xl"
        src={getInvolved}
        alt="Team & events Image"
      />
    </div>
  );
}
