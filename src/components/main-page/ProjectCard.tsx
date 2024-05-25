import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectCardProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  yearElement: React.ReactNode | React.ReactNode[];
  startOverlayActivated?: boolean;
};

const ProjectCard = ({
  className = "",
  children,
  yearElement,
  startOverlayActivated = false,
}: ProjectCardProps) => {
  const [yearOverlayActive, setYearOverlayActive] = useState(
    startOverlayActivated
  );

  const handleKeyPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      setYearOverlayActive((prev) => !prev);
    }
  };

  return (
    <div
      className={`bg-primary relative h-full flex justify-center items-center rounded-lg lg:rounded-xl ${className}`}
      onMouseEnter={() => setYearOverlayActive(true)}
      onMouseLeave={() => setYearOverlayActive(false)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <AnimatePresence>
        {yearOverlayActive && (
          <motion.div
            className="absolute flex justify-center items-center w-full h-full rounded-lg lg:rounded-xl bg-secondary text-3xl lg:text-6xl font-semibold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {yearElement}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="">{children}</div>
      {/* {!yearOverlayActive && 
        children
      }
      {yearOverlayActive && (
        
      )} */}
    </div>
  );
};

export default ProjectCard;
