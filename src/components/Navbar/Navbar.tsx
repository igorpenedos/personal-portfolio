import React, { useRef } from "react";
import { motion } from "framer-motion";
import { navbarContent } from "../../utils/navbar";

interface Props {
  view?: number;
  updateCurrentView: (view: number) => void;
}

export const Navbar = (props: Props) => {
  const { view, updateCurrentView } = props;
  const containerRef = useRef<any>(null);

  return (
    <motion.nav
      initial={{ top: -144, opacity: 0 }}
      animate={{ top: 24, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed list-none drop-shadow-lg rounded-full py-4 px-8 bg-white z-50"
    >
      <motion.div ref={containerRef} className="flex flex-row gap-6">
        {navbarContent.map((topic, index) => (
          <motion.li
            className={`cursor-pointer ${index === view ? "text-primary" : ""}`}
            key={index}
          >
            <a href={topic.href} onClick={() => updateCurrentView(index)}>
              {topic.name}
            </a>
          </motion.li>
        ))}
      </motion.div>
      <motion.div
        className={`absolute h-0.5 bg-primary bottom-4`}
        animate={{
          left: containerRef.current?.children[view ? view : 0].offsetLeft,
          width: containerRef.current?.children[view ? view : 0].offsetWidth,
        }}
      ></motion.div>
    </motion.nav>
  );
};
