import React from "react";
import Card from "./Card";
import helpOurTeam from "./help_our_team.jpg";

function HelpOurTeam() {
  return (
    <div className="relative flex flex-col items-center gap-8 lg:px-20 ">
      <h2
        className="text-headingRegMob text-center font-semibold text-primary
        lg:text-headingReg "
      >
        Ways you could help our team
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full">
        <Card
          className="md:row-span-2"
          title="Join our team"
          subtitle="Make an impact with us!"
          body="If you're excited by our projects, why don't you help contribute to the next one? We're always looking for people who are passionate about biology!"
          img={helpOurTeam.src}
          href="/join-us"
        />
        <Card
          title="Donate as an industry"
          subtitle="Support exciting research!"
          body="Do you represent a company looking to support the student research community? UBC BIOMOD relies on funding from companies like yours to create our projects!"
          href="#"
        />
        <Card
          title="Donate as an individual"
          subtitle="Every dollar makes a difference!"
          body="If you're an individual excited by our work and want to make a contribution, we would always appreciate the support, no matter the amount!"
          href="#"
        />
      </div>
    </div>
  );
}

export default HelpOurTeam;
