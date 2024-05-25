import ProjectCard from "./ProjectCard";

const ProjectsDisplay = () => {
  return (
    <div className="flex flex-col items-center w-full px-6 lg:px-12 py-8 gap-6 lg:gap-8">
      <h2>Check out our past projects</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-6 lg:grid-rows-3 w-full h-[calc((100dvw-3rem)*6/2)] lg:h-[calc((100dvw-6rem)*3/4)] gap-2 lg:gap-8">
        <ProjectCard className="col-span-2" year="2023">
          display
        </ProjectCard>
        <ProjectCard className="col-span-2 lg:row-start-2" year="2022">
          display
        </ProjectCard>
        <ProjectCard className="" year="2021">
          display
        </ProjectCard>
        <ProjectCard className="row-span-2" year="2020">
          display
        </ProjectCard>
        <ProjectCard className="row-span-2" year="2019">
          display
        </ProjectCard>
        <ProjectCard className="lg:col-start-4" year="2018">
          display
        </ProjectCard>
        <ProjectCard className="col-span-2 lg:row-start-3" year="2024">
          display
        </ProjectCard>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
