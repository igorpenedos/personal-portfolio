import React from "react";
import { Title } from "../../components/Title/Title";
import { skills } from "../../utils/skills";
import { Skill } from "../../components/Skill/Skill";
import { HorizontalCarousel } from "../../components/HorizontalCarousel/HorizontalCarousel";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center mt-12 mx-96">
      <div className="w-full">
        <Title text="Skills" />
        <HorizontalCarousel>
          {skills.map((skill) => (
            <Skill name={skill} key={skill} />
          ))}
          {skills.map((skill) => (
            <Skill name={skill} key={skill} />
          ))}
        </HorizontalCarousel>
      </div>
    </div>
  );
}
