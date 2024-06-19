import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  list: Array<string>;
}

export const VerticalCarousel = (props: Props) => {
  const { list } = props;
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === list.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [index, list.length]);

  return (
    <div className="relative overflow-hidden flex h-12">
      <AnimatePresence initial={false}>
        <motion.div
          className="absolute"
          key={index}
          initial={{ top: "100%", opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          exit={{ top: "-100%", opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {list[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
