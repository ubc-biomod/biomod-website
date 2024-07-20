"use client";

import GetInvolved from "@/components/main-page/GetInvolved";
import Hero from "@/components/main-page/Hero";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("preline");
  }, []);

  return (
    <div className="flex flex-col gap-y-[3rem]">
      <Hero />
      <GetInvolved />
    </div>
  );
}
