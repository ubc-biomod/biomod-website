"use client";

import BecomeASponsor from "@/components/sponsors/BecomeASponsor";
import PastSponsors from "@/components/sponsors/PastSponsors";
import SponsorHero from "@/components/sponsors/SponsorHero";
import SponsorsTier from "@/components/sponsors/SponsorsTier";

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center gap-y-defaultMob lg:gap-y-default px-4 lg:px-16 bg-bg2 bg-no-repeat">
      <SponsorHero />
      <SponsorsTier />
      <BecomeASponsor />
      <PastSponsors />
    </div>
  );
}
