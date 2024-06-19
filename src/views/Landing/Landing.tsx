import React, { useEffect, useRef } from "react";
import { Name } from "../../components/Name/Name";
import { motion, useInView } from "framer-motion";
import { VerticalCarousel } from "../../components/VerticalCarousel/VerticalCarousel";
import { Links } from "../../utils/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Icon } from "../../components/Icon/Icon";
import { GoArrowRight } from "react-icons/go";

interface Props {
  updateCurrentView: (view: number) => void;
}

const Attributes = [
  "Software Developer",
  "Full-stack Developer",
  "Web Developer",
];

export default function Landing(props: Props) {
  const { updateCurrentView } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) updateCurrentView(0);
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <div
      className="text-2xl h-screen flex flex-col justify-center items-center"
      ref={ref}
      id="about"
    >
      <div>
        <h2>Hey visitor, I am</h2>
        <Name />
        <br className="mt-24" />
        <div className="text-4xl text-primary">
          <VerticalCarousel list={Attributes} />
        </div>
        <h2>Toronto, ON</h2>

        <div className="mt-2 flex flex-row gap-6">
          <Icon text="Github" href={Links.github}>
            <FaGithub className="hover:text-primary" size={32} />
          </Icon>
          <Icon text="LinkedIn" href={Links.linkedin}>
            <FaLinkedin className="hover:text-primary" size={32} />
          </Icon>
        </div>
        
        <br/>

        <motion.div
          className="relative overflow-hidden align-middle text-center bg-text px-6 py-2 w-max rounded-full cursor-pointer text-lg"
          whileHover="hover"
        >
          {/* Background Element */}
          <motion.div
            className="absolute flex h-full top-0 left-0 rounded-xl bg-primary"
            initial={{ width: 0 }}
            variants={{
              default: { width: 0 },
              hover: { width: 150 },
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-row gap-2"
            initial={{ color: "#F8F8F8" }}
            variants={{
              default: { color: "#F8F8F8" },
              hover: { color: "#1A1A1B" },
            }}
          >
            <motion.div className="z-10">Resume</motion.div>

            <motion.div
              variants={{ default: { rotate: 0 }, hover: { rotate: 360 } }}
              transition={{ duration: 0.5 }}
            >
              <GoArrowRight size={28} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
