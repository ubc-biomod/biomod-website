"use client";

import GetInvolved from "@/components/main-page/GetInvolved";
import Hero from "@/components/main-page/Hero";
import ProjectsDisplay from "@/components/main-page/ProjectsDisplay";
import Sponsors from "@/components/main-page/Sponsors";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("preline");
  }, []);

  return (
    <div className="flex flex-col gap-y-defaultMob lg:gap-y-default bg-bg bg-repeat-x bg-[center_top_50%] px-4 lg:px-10">
      <Hero />
      <ProjectsDisplay />
      <GetInvolved />
      <Sponsors />
    </div>
  );
}
