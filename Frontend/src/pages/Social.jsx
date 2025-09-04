import React, { useEffect, useRef } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import CountUp from "react-countup";
import { MdGroup } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Social = () => {
  const socialBoxRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  
  

  return (
    <div className="w-full bg-zinc-900 md:px-0 px-4 flex items-center justify-center min-h-screen p-1  flex-col">
      <h1 className="text-white md:text-3xl font-semibold">
        My{" "}
        <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent">
          Social Media
        </span>{" "}
        Presence
      </h1>
      <div ref={socialBoxRef} className="bg-[#111725]  shadow hover:border-1 hover:border-red-100 p-4 rounded-lg w-full md:w-[80%] mt-10 ">
        <h1 className="bg-gradient-to-t gap-4 flex   items-center from-red-900 to-blue-500 bg-clip-text text-transparent font-semibold text-2xl">
          <span className="text-blue-500 mb-1 text-4xl">
            <TiSocialLinkedin />
          </span>
          LinkedIn Presence
        </h1>

        <div className="w-full mt-4 flex-wrap flex gap-10">
          <div className="md:w-[22%] w-[43%] hover:shadow-amber-800 bg-zinc-700 rounded-lg shadow p-3 flex items-center justify-center flex-col ">
            <span className="text-red-900 text-3xl">
              <MdGroup />
            </span>
            <span className="text-md mt-1 font-semibold text-white">
              <CountUp end={700} /> +
            </span>
            <h1 className="text-md mt-0.5 capitalize text-white font-semibold">
              connections
            </h1>
          </div>
          <div className="md:w-[22%] w-[43%] hover:shadow-amber-800 bg-zinc-700 rounded-lg shadow p-3 flex items-center justify-center flex-col ">
            <span className="text-red-900 text-3xl">
              <MdGroup />
            </span>
            <span className="text-md mt-1 font-semibold text-white">
              <CountUp end={600} /> +
            </span>
            <h1 className="text-md mt-0.5 capitalize text-white font-semibold">
              followers
            </h1>
          </div>
          <div className="md:w-[22%] w-[43%] hover:shadow-amber-800 bg-zinc-700 rounded-lg shadow p-3 flex items-center justify-center flex-col ">
            <span className="text-red-900 text-3xl">
              <MdGroup />
            </span>
            <span className="text-md mt-1 font-semibold text-white">
              <CountUp end={4} /> +
            </span>
            <h1 className="text-md mt-0.5 capitalize text-white font-semibold">
              Certifications
            </h1>
          </div>
          <div className="md:w-[22%] w-[43%] hover:shadow-amber-800 bg-zinc-700 rounded-lg shadow p-3 flex items-center justify-center flex-col ">
            <span className="text-red-900 text-3xl">
              <MdGroup />
            </span>
            <span className="text-md mt-1 font-semibold text-white">
              <CountUp end={20} /> +
            </span>
            <h1 className="text-md mt-0.5 capitalize text-center text-white font-semibold">
              Skills Endorsed
            </h1>
          </div>
        </div>
        <div className="w-full  py-5 px-3 md:flex mt-10 items-center justify-center gap-19">
          <h1 className="flex items-center md:m-0 m-auto gap-2 mt-4 bg-blue-500 w-fit px-5 py-2 shadow-red-700 hover:shadow-2xl text-white font-semibold capitalize rounded-full justify-center">
            <span className="text-white text-3xl">
              <TiSocialLinkedin />
            </span>
            connect on LinkedIn
          </h1>
          <h1 className="flex items-center md:m-0 m-auto gap-2 mt-4 bg-gradient-to-r shadow-red-700 hover:shadow-2xl from-red-300 to-blue-500 w-fit px-5 py-2 text-white font-semibold capitalize rounded-full justify-center">
            <span className="text-white text-3xl">
              <FaInstagram />
            </span>
            follow on Instagram
          </h1>
          <h1 className="flex items-center gap-2 mt-4 md:m-0 m-auto bg-blue-500 w-fit px-5 py-2 shadow-red-700 hover:shadow-2xl text-white font-semibold capitalize rounded-full justify-center">
            <span className="text-white text-3xl">
              <LuGithub />
            </span>
            follow on GitHub
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Social;

//bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent
