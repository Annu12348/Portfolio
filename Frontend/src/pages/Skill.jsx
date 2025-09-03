import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";

const Skill = () => {
  const buttons = [
    { name: "all skills" },
    { name: "frontend" },
    { name: "backend" },
    { name: "language" },
    { name: "tool" },
  ];

  const skills = [
    {
      skill: "html5",
      icon: <FaHtml5 />,
      description: "Semantic markup and structure for web pages",
      category: "frontend",
    },
    {
      skill: "css3",
      icon: <FaCss3Alt />,
      description: "Adaptive layouts, seamless multi-device experience.",
      category: "frontend",
    },
    {
      skill: "JavaScript",
      icon: <IoLogoJavascript />,
      description: "Dynamic, interactive, responsive client-side scripting.",
      category: "language",
    },
    {
      skill: "React.JS",
      icon: <FaReact />,
      description: "Component-based UI, adaptive layouts, seamless experience.",
      category: "frontend",
    },
    {
      skill: "express.JS",
      icon: <SiExpress />,
      description: "Node.js web application framework, backend services.",
      category: "backend",
    },
    {
      skill: "mongoDB",
      icon: <DiMongodb />,
      description: "NoSQL document database, scalable backend services.",
      category: "backend",
    },
    {
      skill: "vs code",
      icon: <VscVscode />,
      description: "Code editor with powerful extensions, backend tools.",
      category: "tool",
    },
    {
      skill: "gitHub",
      icon: <FiGithub />,
      description: "Backend, version control, collaboration.",
      category: "tool",
    },
    {
      skill: "chatGpt",
      icon: <IoChatbubblesOutline />,
      description:
        "AI assistant for programming tasks and problem solving in ChatGPT.",
      category: "tool",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filterSkills =
    activeCategory === "all skills"
      ? skills
      : skills.filter((sk) => sk.category === activeCategory);

  return (
    <div className="bg-zinc-900 p-[1px] w-full min-h-screen">
      <Navigation />
      <div className="w-full min-h-[91.9vh] p-3 bg-zinc-900 flex flex-col items-center justify-center mt-14">
        <h1 className="text-white  text-4xl font-semibold tracking-tight leading-none">
          My{" "}
          <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-zinc-400 text-center text-md tracking-tight font-semibold leading-none mt-8">
          Technical proficiencies and tools I use to build modern web applications
        </p>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(btn.name)}
              className={`text-md py-2 px-5 ${
                activeCategory === btn.name ? "bg-zinc-500" : "bg-zinc-800"
              } rounded-4xl capitalize text-white font-semibold `}
            >
              {btn.name}
            </button>
          ))}
        </div>
        <div className="w-full mt-16 flex flex-wrap md:px-30 items-center justify-center gap-6">
          {filterSkills.map((sk, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="bg-[#2d3443] relative flex flex-nowrap gap-3 items-center justify-center flex-col hover:border-white border-1 shadow-lg border-[#23252c] md:w-[17%] w-[44%]   rounded-lg h-[16vh] p-1"
            >
              <span className="text-[#409cb5] text-6xl">{sk.icon}</span>
              <h1 className="text-white font-semibold tracking-tight leading-none uppercase text-md">
                {sk.skill}
              </h1>
              {hoveredSkill === index && (
                <div className="w-[44vh]  hidden md:flex gap-5  items-start h-[20vh]  rounded-lg z-40 absolute -bottom-[129%] p-3 bg-[#2d3443]">
                  <span className="mt-1 text-[#409cb5] text-3xl ">
                    {sk.icon}
                  </span>
                  <div>
                    <h1 className="text-white font-semibold text-xl uppercase tracking-tight">
                      {sk.skill}
                    </h1>
                    <p className="text-zinc-300  tracking-tight leading-none mt-2">
                      {sk.description}
                    </p>
                    <button className="mt-4 px-4 capitalize text-zinc-300 py-1 bg-zinc-800 rounded-full">
                      {sk.category}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
//bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent
