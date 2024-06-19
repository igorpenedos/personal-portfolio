import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  points: string[];
  logo: string;
  updateCurrentLogo: (newLogo: string) => void;
}

export const Experience = (props: Props) => {
  const {
    company,
    position,
    startDate,
    endDate,
    location,
    points,
    logo,
    updateCurrentLogo,
  } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  useEffect(() => {
    if (isInView) updateCurrentLogo(logo);
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.div
      className="text-xl"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50% 0% -50% 0%" }}
    >
      <div className="flex flex-row justify-between gap-12">
        <h2 className="text-3xl font-bold text-primary">{company}</h2>
        <h3>{startDate + " - " + endDate}</h3>
      </div>
      <h3>{position}</h3>
      <h3>{location}</h3>
      <motion.ul
        className="text-lg list-disc text-accent ml-6"
        variants={{
          visible: {
            opacity: 1,
            maxHeight: 1000,
          },
          hidden: {
            opacity: 0,
            maxHeight: 0,
          },
        }}
        transition={{ duration: 1 }}
      >
        {points.map((point, index) => (
          <li className="list-outside" key={index}>
            {point}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
