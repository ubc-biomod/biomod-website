import React from "react";

type ProjectCardProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  yearElement: React.ReactNode | React.ReactNode[];
  startActivated?: boolean;
};

const ProjectCard = ({
  className = "",
  children,
  yearElement: year,
  startActivated = true,
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-secondary h-full flex justify-center items-center rounded-lg lg:rounded-xl ${className}`}
    >
      {!startActivated && children}
      {startActivated && (
        <div>
          <div className="text-3xl lg:text-6xl font-semibold text-primary">
            {year}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
