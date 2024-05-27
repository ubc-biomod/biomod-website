import Image from "next/image";
import blankImg from "@/assets/blankImage.png";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center
            xl:flex-row xl:gap-x-[3.5rem]"
    >
      <div className="flex flex-col justify-center items-center grow">
        <h1
          className="text-center text-titleMob text-primary
                    md:text-titleReg"
        >
          Support our Cause
        </h1>

        <h2
          className="text-center 
                    md:text-subHeadingReg"
        >
          We appreciate any help for innovations
        </h2>
      </div>

      <Image src={blankImg} alt="Image of our team!!" />
    </div>
  );
}
