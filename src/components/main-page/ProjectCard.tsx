import React from "react";

type ProjectCardProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  year: string;
  startActivated?: boolean;
};

const ProjectCard = ({
  className = "",
  children,
  year,
  startActivated = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-primary h-full flex justify-center items-center rounded-lg lg:rounded-xl ${className}`}
    >
      {children}
      {year}
    </div>
  );
};

export default ProjectCard;
