import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="flex flex-col gap-y-6 w-full px-4 lg:px-16 items-center">
      <h1 className="text-primary font-bold text-center text-4xl md:text-6xl">
        Interested in Joining Us?
      </h1>
      <h2 className="text-primary text-xl md:text-2xl text-center">
        Become part of our talented team
      </h2>
      <Link href="/join-us" className="btn btn--primary">
        Learn More
      </Link>
    </div>
  );
}
