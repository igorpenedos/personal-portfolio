import React from "react";

interface Props {
  text: string;
}

export const Title = (props: Props) => {
  const { text } = props;
  return (
    <div className="flex">
      <h1 className="flex flex-row text-4xl gap-2 mb-4 text-text font-semibold">
        <div className="flex h-full w-1 bg-primary"></div>
        {text}
      </h1>
    </div>
  );
};
