import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

interface Props {
  name: string;
  languages: string[];
  description: string;
  points: string[];
  photo: string;
  link: string;
  position: "next" | "current" | "previous" | "start" | "exit";
}

export const Project = (props: Props) => {
  const { name, languages, description, photo, link, position } = props;

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
      zIndex: 30,
      translateX: "50%",
      opacity: 1,
    },
    current: {
      rotate: "0deg",
      translateY: "5%",
      zIndex: 50,
      translateX: "0%",
      opacity: 1,
    },
    previous: {
      rotate: "-15deg",
      translateY: "25%",
      zIndex: 30,
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
    <motion.a
      className={`absolute flex flex-col h-full w-2/3 sm:w-1/3 border rounded-3xl bg-background text-text gap-2 drop-shadow-${
        position === "current" ? "2xl" : "lg"
      } left-0 right-0 mx-auto origin-bottom`}
      animate={position}
      transition={{ duration: 1 }}
      variants={variants}
      href={link}
      target="_blank"
    >
      {/* <div className="relative w-full h-full"> */}
      {/* <img
          className="absolute h-full w-full object-cover rounded-3xl -z-10"
          src={`./assets/${photo}`}
          alt={name}
        />
        <div className="p-6">
          <h3 className="text-6xl font-semibold text-center text-stroke">
            {name}
          </h3>
        </div> */}
      {/* <div className="p-6 bg-gradient-to-b from-background text-text from-50% to-transparent">
          <h3 className="text-4xl font-semibold">{name}</h3>
          <motion.div className="text-base text-accent">
            {description}
          </motion.div>
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
        </div> */}
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-semibold">{name}</h3>
        <motion.div className="text-sm sm:text-base text-accent">
          {description}
        </motion.div>
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
      {/* </div> */}
    </motion.a>
  );
};
