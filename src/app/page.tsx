"use client";

import Hero from "@/components/main-page/Hero";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("preline");
  }, []);

  return <Hero />;
}
