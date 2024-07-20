import Budget from "@/components/support-us/Budget";
import Hero from "@/components/support-us/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[5rem]">
      <Hero />
      <Budget />
    </div>
  );
}
