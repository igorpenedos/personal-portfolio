import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import { projects } from "../../utils/projects";
import { Project } from "../../components/Project/Project";
import { AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const projectLength = projects.length;
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [previousProject, setPreviousProject] = useState<number>(
    projectLength - 1
  );
  const [nextProject, setNextProject] = useState<number>(1);
  const [exitProject, setExitProject] = useState<number>(projectLength - 2);

  useEffect(() => {
    const prev =
      (((currentProject - 1) % projectLength) + projectLength) % projectLength;
    const next =
      (((currentProject + 1) % projectLength) + projectLength) % projectLength;
    const exit =
      (((currentProject - 2) % projectLength) + projectLength) % projectLength;

    setPreviousProject(prev);
    setNextProject(next);
    setExitProject(exit);
    // eslint-disable-next-line
  }, [currentProject]);

  const goToNextProject = () => {
    currentProject + 1 > projectLength - 1
      ? setCurrentProject(0)
      : setCurrentProject(currentProject + 1);
  };

  const goToPreviousProject = () => {
    currentProject - 1 < 0
      ? setCurrentProject(projectLength - 1)
      : setCurrentProject(currentProject - 1);
  };

  const checkPosition = (index: number) => {
    let position: "next" | "current" | "previous" | "start" | "exit" = "start";

    switch (index) {
      case previousProject:
        position = "previous";
        break;
      case currentProject:
        position = "current";
        break;
      case nextProject:
        position = "next";
        break;
      case exitProject:
        position = "exit";
        break;
      default:
        position = "start";
    }

    return position;
  };

  return (
    <div className="flex flex-col items-center mt-12 text-2xl mx-10 md:mx-24 lg:mx-32 xl:mx-96 h-[50vh] overflow-hidden">
      <div className="h-full w-full">
        <Title text="Projects" />
        <div className="relative h-full w-full overflow-hidden">
          <button
            className="cursor-pointer hover:scale-110 h-full absolute left-0 z-50"
            onClick={goToPreviousProject}
          >
            <FaArrowLeft>Previous</FaArrowLeft>
          </button>
          <button
            className="cursor-pointer hover:scale-110 h-full absolute right-0 z-50"
            onClick={goToNextProject}
          >
            <FaArrowRight>Next</FaArrowRight>
          </button>
          <AnimatePresence initial={false}>
            {projects.map((project, index) => (
              <Project
                name={project.name}
                languages={project.languages}
                description={project.description}
                points={project.points}
                photo={project.photo}
                link={project.link}
                position={checkPosition(index)}
                key={project.name}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
