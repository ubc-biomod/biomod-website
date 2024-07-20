"use client";
import Budget from "@/components/support-us/Budget";
import Hero from "@/components/support-us/Hero";
import PhaseBudget from "@/components/support-us/PhaseBudget";
import HelpOurTeam from "@/components/support-us/HelpOurTeam";

export default function Home() {
  return (
    <div className="flex flex-col gap-defaultMob lg:gap-default px-4 lg:px-12 bg-bg2 bg-no-repeat">
      <Hero />
      <Budget />
      <PhaseBudget />
      <HelpOurTeam />
    </div>
  );
}
