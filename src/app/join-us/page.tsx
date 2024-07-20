"use client";
import FAQ from "@/components/join-us/FAQ";
import JoinUsHero from "@/components/join-us/JoinUsHero";
import ReadyToApply from "@/components/join-us/ReadyToApply";
import TeamsGallery from "@/components/join-us/TeamsGallery";

export default function JoinUs() {
  return (
    <div className="flex flex-col gap-defaultMob lg:gap-default px-4 lg:px-12 bg-bg2 bg-no-repeat">
      <JoinUsHero />
      <TeamsGallery />
      <ReadyToApply />
      <FAQ />
    </div>
  );
}
