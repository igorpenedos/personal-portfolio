import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  text: string;
  href?: string;
}

export const Icon = (props: Props) => {
  const { children, text, href } = props;
  return href ? (
    <motion.a
      className="relative text-xl flex justify-center cursor-pointer"
      whileHover="hover"
      href={href}
      target="_blank"
    >
      {children}
      <motion.div
        className="absolute text-primary text-base -z-10"
        initial={{ opacity: 0, scale: 0, top: 0 }}
        variants={{
          default: { opacity: 0, scale: 0, top: 0 },
          hover: { opacity: 1, scale: 1, top: "100%" },
        }}
      >
        {text}
      </motion.div>
    </motion.a>
  ) : (
    <motion.div
      className="relative text-xl flex justify-center cursor-pointer select-none"
      whileHover="hover"
    >
      {children}
      <motion.div
        className="absolute text-primary text-base -z-10"
        initial={{ opacity: 0, scale: 0, top: 0 }}
        variants={{
          default: { opacity: 0, scale: 0, top: 0 },
          hover: { opacity: 1, scale: 1, top: "100%" },
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
