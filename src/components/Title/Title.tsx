import React from "react";

interface Props {
  text: string;
}

export const Title = (props: Props) => {
  const { text } = props;
  return (
    <div className="flex w-full justify-center">
      <h1 className="flex flex-row text-4xl gap-2 mb-4 text-text font-semibold">
        {/* <div className="flex h-full w-1 bg-primary"></div> */}
        <span className="text-primary">&lt;</span>
        {text}
        <span className="text-primary">/&gt;</span>
      </h1>
    </div>
  );
};
