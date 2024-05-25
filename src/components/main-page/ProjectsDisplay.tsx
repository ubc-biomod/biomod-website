import Image from "next/image";
import ProjectCard from "./ProjectCard";
import project_2024 from "@/assets/project_2024.gif";

const ProjectsDisplay = () => {
  return (
    <div className="flex flex-col items-center w-full px-6 lg:px-12 py-8 gap-6 lg:gap-16">
      <h2 className="text-4xl lg:text-6xl font-bold text-primary text-center">
        Check out our past projects
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-6 lg:grid-rows-3 w-full h-[calc((100dvw-3rem)*6/2)] lg:h-[calc((100dvw-6rem)*3/4)] gap-2 lg:gap-8">
        <ProjectCard
          href="https://ubcbiomod2023.netlify.app/"
          className="col-span-2"
          yearElement="2023"
        >
          <div className="flex w-full h-full items-center bg-black text-white text-center rounded-xl p-4">
            <Image
              src={project_2024}
              alt="2024 Project animation"
              className="w-1/2"
            />
            <div className="flex flex-col gap-2">
              <div className="text-sm md:text-2xl lg:text-3xl">
                A BIOMODular Enzyme Delivery Vehicle to Target Biofilms
              </div>
              <div className="text-[0.5rem] md:text-sm lg:text-base">
                From the tiniest building blocks of life to a grand vision of
                combatting bacterial biofilms, our team explores it all.
              </div>
            </div>
          </div>
        </ProjectCard>
        <ProjectCard
          href="#"
          className="col-span-2 lg:row-start-2"
          yearElement="2022"
        >
          display
        </ProjectCard>
        <ProjectCard href="#" className="" yearElement="2021">
          display
        </ProjectCard>
        <ProjectCard href="#" className="row-span-2" yearElement="2020">
          display
        </ProjectCard>
        <ProjectCard href="#" className="row-span-2" yearElement="2019">
          display
        </ProjectCard>
        <ProjectCard href="#" className="lg:col-start-4" yearElement="2018">
          display
        </ProjectCard>
        <ProjectCard
          href="#"
          className="col-span-2 lg:row-start-3"
          yearElement={
            <div className="bg-primary flex flex-col w-full h-full rounded-lg lg:rounded-xl justify-center items-center gap-4">
              <span className="text-white">2024</span>
              <span className="text-white text-base lg:text-xl">
                coming soon
              </span>
            </div>
          }
        >
          display
        </ProjectCard>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
