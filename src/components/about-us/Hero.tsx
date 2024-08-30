import bg from "./about-us-bg.png";
import bgMobile from "./about-us-bg-mobile.png";
import aboutUsHero1 from "./about_us_hero_1.jpg";
import aboutUsHero2 from "./about_us_hero_2.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16 items-center gap-12">
      <div className="flex flex-col gap-8 items-center lg:basis-2/3">
        <h1 className="text-primary font-bold text-4xl md:text-6xl">
          About Us
        </h1>
        <h2 className="text-primary text-xl md:text-2xl text-center">
          UBC BIOMOD strives to create innovative solutions to tackle various
          medical issues by merging technology and biology.
        </h2>
      </div>
      <div className="flex items-center">
        <Image
          className="w-36 h-48 md:w-52 md:h-72 bg-[#EDE6E6] rounded-xl -mr-20 z-10 shadow-md"
          src={aboutUsHero2}
          alt=""
        />
        <Image
          className="w-48 h-60 md:w-72 md:h-96 bg-[#D9D9D9] rounded-xl shadow-md"
          src={aboutUsHero1}
          alt=""
        />
      </div>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bg.src}
          alt="Background"
          className="hidden md:block absolute -z-10 left-0 top-0 md:ml-8 md:mt-8"
        />
      }
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bgMobile.src}
          alt="Background"
          className="absolute md:hidden -z-10 left-0 top-0 -mt-16"
        />
      }
    </div>
  );
}

export default Hero;
