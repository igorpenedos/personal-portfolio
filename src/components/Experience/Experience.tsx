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
  index: number;
  isCurrentExp: boolean;
  updateCurrentExp: (expIndex: number) => void;
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
    index,
    isCurrentExp,
    updateCurrentExp,
  } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  useEffect(() => {
    if (isInView) updateCurrentExp(index);
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.div className="text-lg md:text-xl" ref={ref}>
      <div className="flex flex-col md:flex-row justify-between md:gap-12">
        <h2 className="text-3xl font-bold text-primary">{company}</h2>
        <h3>{startDate + " - " + endDate}</h3>
      </div>
      <h3>{position}</h3>
      <h3>{location}</h3>
      <motion.ul
        className="text-base md:text-lg list-disc text-accent ml-6"
        animate={isCurrentExp ? "visible" : "hidden"}
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
