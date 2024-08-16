"use client";
import CallToAction from "@/components/about-us/CallToAction";
import Hero from "@/components/about-us/Hero";
import Stories from "@/components/about-us/Stories";
import Team from "@/components/about-us/Team";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-y-defaultMob lg:gap-y-default bg-bg2 bg-no-repeat">
      <Hero />
      <Team />
      <Stories />
      <CallToAction />
    </div>
  );
}
