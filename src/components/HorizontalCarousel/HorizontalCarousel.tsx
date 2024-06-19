import React from "react";
import "./HorizontalCarousel.css";

interface Props {
  children: React.ReactNode;
}

export const HorizontalCarousel = (props: Props) => {
  const { children } = props;

  return (
    <div className="relative overflow-hidden h-14 w-full">
      <div className="absolute top-0 left-0 w-[100px] h-full z-10 bg-gradient-to-l from-transparent to-background"></div>
      <div className="absolute top-0 right-0 w-[100px] h-full z-10 bg-gradient-to-r from-transparent to-background"></div>
      <div className="absolute left-0 flex flex-row pause gap-6 animate-slide inner">
        {children}
      </div>
    </div>
  );
};
