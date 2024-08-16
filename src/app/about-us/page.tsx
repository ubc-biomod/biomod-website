import Hero from "@/components/about-us/Hero";
import Team from "@/components/about-us/Team";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-y-defaultMob lg:gap-y-default px-4 lg:px-16 bg-bg2 bg-no-repeat">
      <Hero />
      <Team />
    </div>
  );
}
