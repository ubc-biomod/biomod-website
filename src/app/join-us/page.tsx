"use client";
import FAQ from "@/components/join-us/FAQ";
import JoinUsHero from "@/components/join-us/JoinUsHero";
import TeamsGallery from "@/components/join-us/TeamsGallery";

export default function JoinUs() {
  return (
    <div className="flex flex-col gap-defaultMob lg:gap-default">
      <JoinUsHero />
      <TeamsGallery />
      <FAQ />
    </div>
  );
}
