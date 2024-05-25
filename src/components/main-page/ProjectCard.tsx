import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectCardProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  yearElement: React.ReactNode | React.ReactNode[];
  startOverlayActivated?: boolean;
  href: string;
};

const ProjectCard = ({
  className = "",
  children,
  yearElement,
  startOverlayActivated = false,
  href,
}: ProjectCardProps) => {
  const [yearOverlayActive, setYearOverlayActive] = useState(
    startOverlayActivated
  );

  const handleKeyPress: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      setYearOverlayActive((prev) => !prev);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      className={`relative h-full w-full flex justify-center items-center rounded-xl ${className}`}
      onMouseEnter={() => setYearOverlayActive(true)}
      onMouseLeave={() => setYearOverlayActive(false)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <AnimatePresence>
        {yearOverlayActive && (
          <motion.div
            className="absolute z-20 flex justify-center items-center w-full h-full rounded-xl bg-secondary text-3xl md:text-5xl lg:text-6xl font-semibold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {yearElement}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center items-center w-full h-full rounded-xl">
        {children}
      </div>
    </a>
  );
};

export default ProjectCard;
