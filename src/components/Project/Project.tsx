import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../Icon/Icon";
import { Links } from "../../utils/link";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { useDrag } from "react-use-gesture";

interface Props {
  name: string;
  languages: string[];
  description: string;
  points: string[];
  photo: string;
  link: string;
  position: "next" | "current" | "previous" | "start" | "exit";
  goToNextProject: () => void;
  goToPreviousProject: () => void;
}

export const Project = (props: Props) => {
  const {
    name,
    languages,
    description,
    photo,
    link,
    position,
    goToNextProject,
    goToPreviousProject,
  } = props;

  const bind = useDrag((state) => {
    if (state.last === true && state.axis === "x" && state.distance > 0) {
      state.direction[0] > 0 ? goToPreviousProject() : goToNextProject();
    }
  });

  const variants = {
    start: {
      rotate: "90deg",
      translateY: "25%",
      zIndex: 10,
      translateX: "75%",
      opacity: 0,
    },
    next: {
      rotate: "15deg",
      translateY: "25%",
      zIndex: 20,
      translateX: "50%",
      opacity: 1,
    },
    current: {
      rotate: "0deg",
      translateY: "5%",
      zIndex: 30,
      translateX: "0%",
      opacity: 1,
    },
    previous: {
      rotate: "-15deg",
      translateY: "25%",
      zIndex: 20,
      translateX: "-50%",
      opacity: 1,
    },
    exit: {
      translateY: "25%",
      rotate: "-90deg",
      zIndex: 10,
      translateX: "-75%",
      opacity: 0,
    },
  };

  return (
    <div {...bind()}>
      <motion.a
        className={`absolute flex flex-col h-full w-3/4 md:w-1/2 lg:w-1/3 border rounded-3xl bg-background text-text gap-2 drop-shadow-${
          position === "current" ? "2xl" : "lg"
        } left-0 right-0 mx-auto origin-bottom`}
        animate={position}
        transition={{ duration: 1 }}
        variants={variants}
        href={link}
        target="_blank"
      >
        <div className="relative w-full h-full">
          <div className="p-6 flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-semibold">{name}</h3>
            {/* <motion.img
              className="absolute h-full w-full object-cover left-0 top-0 brightness-50 rounded-3xl"
              src={`./assets/${photo}`}
              alt={name}
            /> */}
            <div className="text-sm sm:text-base text-accent">
              {description}
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              {languages.map((language: string) => (
                <div
                  className="text-xs py-1 px-4 bg-primary text-background rounded-full w-max"
                  key={language}
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};
