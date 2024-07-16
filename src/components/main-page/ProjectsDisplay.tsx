import Image from "next/image";
import ProjectCard from "./ProjectCard";
import project2024 from "@/assets/project_2024.gif";
import project2022 from "@/assets/project_2022.gif";
import project2019 from "@/assets/project_2019.jpg";
import project2018 from "@/assets/project_2018.png";
import project2017 from "@/assets/project_2017.png";
import project2016 from "@/assets/project_2016.png";

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
              src={project2024}
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
          href="https://www.ubcbiomod.com/2022/"
          className="col-span-2 lg:row-start-2"
          yearElement="2022"
        >
          <div className="h-full w-full bg-black rounded-xl">
            <Image
              src={project2022}
              alt="2022 Project animation"
              className="h-full rounded-xl"
            />
          </div>
        </ProjectCard>
        <ProjectCard
          href="https://ubcbiomod.com/2019/"
          className=""
          yearElement="2019"
          startOverlayActivated={true}
        >
          <Image
            src={project2019}
            alt="2019 Project"
            className="w-full h-full rounded-xl"
          />
        </ProjectCard>
        <ProjectCard
          href="https://ubcbiomod.com/2018/"
          className="row-span-2"
          yearElement="2018"
        >
          <div className="relative w-full h-full rounded-xl">
            <Image
              src={project2018}
              alt="2018 Project"
              className="w-full h-full rounded-xl"
            />
            <div className="absolute z-10 left-0 top-0 h-full w-full flex justify-center items-center">
              <span className="p-4 md:p-8 lg:p-12 text-center text-white text-base md:text-2xl lg:text-3xl">
                Targeted Therapy for Acute Myeloid Leukemia with a DNA
                Tetrahedron
              </span>
            </div>
          </div>
        </ProjectCard>
        <ProjectCard
          href="https://ubcbiomod.com/2017"
          className="row-span-2"
          yearElement="2017"
        >
          <div className="relative w-full h-full rounded-xl border-2 border-primary">
            <Image
              src={project2017}
              alt="2017 Project"
              className="w-full h-full rounded-xl"
            />
            <div className="absolute z-10 left-0 top-0 h-full w-full flex justify-center items-center">
              <span className="p-4 md:p-8 lg:p-12 text-center text-base md:text-2xl lg:text-3xl">
                Find out how UBerCoolercular is making cancer more detectable
              </span>
            </div>
          </div>
        </ProjectCard>
        <ProjectCard
          href="https://biomod2016.gitlab.io/ubc/"
          className="lg:col-start-4"
          yearElement="2016"
        >
          <Image
            src={project2016}
            alt="2016 Project"
            className="w-full rounded-xl"
          />
        </ProjectCard>
        <ProjectCard
          className="bg-primary col-span-2 lg:row-start-3"
          yearElement={
            <span className="text-2xl lg:text-5xl">coming soon!</span>
          }
        >
          <div className="font-semibold text-white text-3xl md:text-5xl lg:text-6xl">
            2024
          </div>
        </ProjectCard>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
