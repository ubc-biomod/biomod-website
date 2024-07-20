import Image from "next/image";
import heroImg from "@/components/support-us/hero_photo.jpg";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center w-full justify-center gap-y-[2rem]
            xl:flex-row xl:gap-x-[10rem]"
    >
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-center text-titleMob text-primary font-semibold
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

      <Image
        src={heroImg}
        alt="Image of our team!!"
        className="w-[90%] xl:w-[40%] rounded-xl"
      />
    </div>
  );
}
