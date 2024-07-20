"use client";
import { IconContext, IconType } from "react-icons";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
type entryProp = {
  header: string;
  description: string;
  icon: IconType;
};
export default function Budget() {
  const stats = [
    {
      header: "50% Travel",
      description:
        "Flights, accommodations, and other expenses at competitions",
      icon: FaPlaneDeparture,
    },
    {
      header: "35% Operations",
      description:
        "Flights, accommodations, and other expenses at competitions",
      icon: FaGear,
    },
    {
      header: "15% Snacks",
      description:
        "Flights, accommodations, and other expenses at competitions",
      icon: IoFastFood,
    },
    {
      header: "5% Others",
      description:
        "Flights, accommodations, and other expenses at competitions",
      icon: TbGridDots,
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-headingReg text-primary text-center font-semibold lg:text-left">
        The division of budget
      </h2>
      <div
        className="grid grid-cols-1 grid-flow-row w-full gap-y-[2.2rem]
            lg:grid-cols-2 "
      >
        {stats.map((s) => {
          return <BudgetEntry {...s} key={s.header} />;
        })}
      </div>
    </div>
  );
}

function BudgetEntry(props: entryProp) {
  return (
    <div
      className="flex flex-row items-center justify-center gap-x-[2rem]
            lg:justify-start"
    >
      <IconContext.Provider
        value={{ className: "w-[120px] h-[120px] md:w-[3.5rem] md:h-[3.5rem]" }}
      >
        {<props.icon />}
      </IconContext.Provider>
      <div>
        <h4
          className="text-primary font-semibold text-subHeadingRegMob
                    lg:text-subHeadingReg"
        >
          {" "}
          {props.header}{" "}
        </h4>
        <p className="text-[1rem]"> {props.description} </p>
      </div>
    </div>
  );
}
