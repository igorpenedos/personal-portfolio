import React, { useState } from "react";
import { motion } from "framer-motion";
import { Title } from "../../components/Title/Title";
import { experiences } from "../../utils/experiences";
import { Experience } from "../../components/Experience/Experience";

export default function Experiences() {
  const [currentLogo, setCurrentLogo] = useState<string>("coveo_logo.jpg");

  const updateCurrentLogo = (newLogo: string) => {
    setCurrentLogo(newLogo);
  };

  return (
    <div
      className="flex flex-col justify-center items-center mt-12 text-2xl mx-10 md:mx-24 lg:mx-32 xl:mx-96"
      id="experiences"
    >
      <div>
        <Title text="Experiences" />
        <div className="relative flex flex-row gap-12 h-full mt-6">
          <div className="flex justify-center w-0.5 min-h-full bg-text rounded-xl mt-[18px]">
            <motion.div className="sticky h-max top-1/2 -translate-y-1/2">
              <motion.img
                className="w-16 h-16 rounded-full max-w-16 border-2 border-text"
                src={`./assets/${currentLogo}`}
                key={currentLogo}
                alt="Current Logo"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-2">
            {experiences.map((experience, index) => (
              <Experience
                company={experience.company}
                position={experience.position}
                startDate={experience.startDate}
                endDate={experience.endDate}
                location={experience.location}
                points={experience.points}
                logo={experience.logo}
                key={index}
                updateCurrentLogo={updateCurrentLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
