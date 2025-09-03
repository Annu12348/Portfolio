import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { CiShare1 } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Project = () => {
  const project = [
    {
      image: "./public/LMS.png",
      name: "learning management system",
      description:
        "Full-stack LMS with React, Redux, Node.js, Express, MongoDB; secure authentication, course management, role-based access, and interactive learning.",
      code: "https://github.com/Annu12348/LMS",
      link: "https://lms-ncrk.onrender.com/",
      category: "full stack",
    },
    {
      image: "./public/visionary-architect.png",
      description:
        "A responsive frontend architecture studio site using HTML, CSS, JS with Lenis smooth scroll, GSAP animations, and locomotive interactivity.",
      name: "visionary architecture",
      link: "https://visionary-architect.vercel.app/",
      code: "https://github.com/Annu12348/Visionary--Architect",
      category: "frontend",
    },
    {
      image: "./public/omegle.png",
      description:
        "Real-time anonymous chat using Node, Express, MongoDB, EJS templating, and Socket.io for seamless user pairing and messaging.",
      name: "omegle clone",
      link: "https://omegle-clones.onrender.com/",
      code: "https://github.com/Annu12348/Omegle-Clones",
      category: "full stack",
    },
  ];

  return (
    <div className="bg-zinc-900 p-[1px]  w-full min-h-screen  ">
      <Navigation />
      <div className="w-full min-h-[91.9vh]  md:p-3 p-2  bg-zinc-900 flex flex-col items-center justify-center  mt-14 ">
        <h1 className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent capitalize text-4xl tracking-tight font-semibold">
          <span className="text-white ">my</span> Projects
        </h1>
        <div className="w-full hidden flex-wrap md:px-20 md:flex gap-5 items-center justify-center  p-1 mt-8 ">
          {project.map((projects, index) => (
            <div key={index} className=" md:w-[49%] h-[43vh] w-full  hover:border-white relative hover:border-1  rounded-lg overflow-hidden group">
              <img
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-105 "
                src={projects.image}
              />
              <div className="absolute top-[40%] md:top-[60%] left-4.5 ">
                <h1 className="text-xl tracking-tight capitalize font-semibold  text-white top-0">
                  {projects.name}
                </h1>
                <p className=" mt-1 text-zinc-300 tracking-tight ">
                  {projects.description}
                </p>
                <div className="flex gap-6 mt-2">
                  <Link
                    target="_blank"
                    to={projects.link}
                    className="flex gap-2 capitalize font-semibold text-red-700 tracking-tight "
                  >
                    <span className="text-red-700 mt-0.5 text-xl font-semibold">
                      <CiShare1 />
                    </span>
                    <h1>live demo</h1>
                  </Link>
                  <Link
                    target="_blank"
                    to={projects.code}
                    className="flex gap-2"
                  >
                    <span className="text-blue-200 mt-0.5 text-xl font-semibold">
                      <FiGithub />
                    </span>
                    <h1 className="text-blue-200 capitalize font-semibold">
                      code
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full   md:hidden ">
          {project.map((pro, index) => (
            <div key={index} className="w-full mt-7 pb-4 bg-zinc-600 rounded-lg ">
              <div className="w-full h-[24vh]  rounded-t-lg overflow-hidden ">
                <img
                  className="w-full h-full object-cover object-[center-70%] "
                  src={pro.image}
                />
              </div>
              <h1 className="px-2  mt-3 font-bold text-white capitalize tracking-tight leading-none">
                {pro.name}
              </h1>
              <p className="px-2 tracking-tight leading-5 font-semibold mt-3 text-zinc-400">
                {pro.description}
              </p>
              <div className="px-2 flex items-center mt-4 justify-between">
                <button className="text-white font-semibold capitalize px-6 bg-blue-950 py-3 rounded">
                  {pro.category}
                </button>
                <Link
                  target="_blank"
                  className="flex text-md text-red-400 font-semibold capitalize items-center gap-1 justify-center"
                  to={pro.link}
                >
                  <span>
                    <CiShare1 />
                  </span>
                  live demo
                </Link>
                <Link
                  target="_blank"
                  className="flex text-md text-blue-200 font-semibold capitalize items-center gap-1 justify-center"
                  to={pro.code}
                >
                  <span>
                    <FiGithub />
                  </span>
                  live demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
