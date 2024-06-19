import React from "react";

export const Name = () => {
  return (
    // <div className="relative h-full w-full">
    //   <video
    //     autoPlay
    //     muted
    //     loop
    //     className="w-full h-full"
    //   >
    //     <source src="./assets/ocean.mp4" type="video/mp4" />
    //   </video>
    //   <h1 className="absolute inset-0 grid place-items-center bg-background text-text font-bold text-9xl mix-blend-screen">
    //     Igor Penedos
    //   </h1>
    // </div>
    <h1 className="flex flex-row gap-12 text-9xl font-bold drop-shadow-xl flex-wrap">
      <span>Igor</span>
      <span className="text-primary">Penedos</span>
    </h1>
  );
};
