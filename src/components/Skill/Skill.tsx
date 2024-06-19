import React from "react";
import { Icon } from "../Icon/Icon";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaGolang,
  FaJava,
  FaJs,
  FaC,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaGit,
} from "react-icons/fa6";
import {
  SiNestjs,
  SiTypescript,
  SiCplusplus,
  SiCsharp,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

interface Props {
  name: string;
}
export const Skill = (props: Props) => {
  const { name } = props;

  return (
    <div className="hover:text-primary">
      <Icon text={name} href="">
        {(() => {
          switch (name) {
            case "React":
              return <FaReact size="36px" />;
            case "Vue":
              return <FaVuejs size="36px" />;
            case "Node":
              return <FaNodeJs size="36px" />;
            case "Nest":
              return <SiNestjs size="36px" />;
            case "Golang":
              return <FaGolang size="36px" />;
            case "Python":
              return <FaPython size="36px" />;
            case "Java":
              return <FaJava size="36px" />;
            case "JavaScript":
              return <FaJs size="36px" />;
            case "TypeScript":
              return <SiTypescript size="36px" />;
            case "C":
              return <FaC size="36px" />;
            case "C++":
              return <SiCplusplus size="36px" />;
            case "C#":
              return <SiCsharp size="36px" />;
            case "PHP":
              return <FaPhp size="36px" />;
            case "HTML":
              return <FaHtml5 size="36px" />;
            case "CSS":
              return <FaCss3 size="36px" />;
            case "SQL":
              return <SiMysql size="36px" />;
            case "MongoDB":
              return <SiMongodb size="36px" />;
            case "Git":
              return <FaGit size="36px" />;
            default:
              <div></div>;
          }
        })()}
      </Icon>
    </div>
  );
};
