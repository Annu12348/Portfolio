import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { GoArrowDown } from "react-icons/go";

const Home = () => {
  
  return (
    <div className="bg-zinc-900 p-[1px] w-full min-h-screen relative ">
      <Navigation />
      <div className="w-full min-h-[91.9vh] md:p-0 p-3  bg-zinc-900 flex flex-col items-center justify-center  mt-14 ">
        <h1 className="text-white text-center  capitalize md:text-8xl text-4xl tracking-tight leading-none font-semibold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-t md:inline block md:text-8xl text-6xl md:mt-0 -mt-1   from-red-900 text-red-900  to-blue-500 bg-clip-text md:text-transparent">
            annu Singh
          </span>
        </h1>
        <h1 className="text-white md:mt-6 mt-3 text-center md:text-4xl text-2xl capitalize font-semibold ">
          a{" "}
          <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent">
            mern stack Developer.
          </span>
        </h1>
        <p className="text-white text-md font-semibold text-center md:w-[48%] md:mt-8 mt-6">
          Frontend-focused Full Stack JavaScript Developer skilled in building
          responsive, real-time apps using React.js, Node.js, MongoDB, and
          WebRTC. Experienced in GSAP, Locomotive, REST APIs, and deploying via
          Vercel & Render.
        </p>
        <div className="mt-8 md:flex items-center justify-center w-full gap-15">
          <Link
            to="/about"
            className="text-md md:w-[10%] w-full px-8 py-3 flex items-center rounded-4xl  hover:shadow-[0_0_70px_1px_rgba(218,88,160,0.7)] justify-center gap-1.5 bg-gradient-to-r from-[#DA58A0] to-[#63C1CE] bg-amber-50 capitalize text-white text-xl font-semibold"
          >
            <span className="">
              <CiUser />
            </span>
            about
          </Link>

          <Link
            to="/skill"
            className="text-md md:w-[10%] w-full md:mt-0 mt-5 px-8 py-3 flex items-center rounded-4xl    justify-center gap-1.5 border hover:border-red-300 capitalize text-white text-xl font-semibold"
          >
            <span className="mt-1"><IoMdLink /></span>
            skills
          </Link>
        </div>
        <Link to="/about">
          <span className="text-zinc-500 text-xl absolute top-[95%] left-[50%]  ">
            <GoArrowDown />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;

//bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent
//shadow-[0_0_20px_5px_rgba(218,88,160,0.7)]
