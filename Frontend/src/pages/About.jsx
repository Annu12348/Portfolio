import React from "react";
import Navigation from "../components/Navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { CiUser } from "react-icons/ci";

const About = () => {
  return (
    <div className="bg-zinc-90 p-[1px]  w-full min-h-screen  ">
      <Navigation />
      <div className="w-full min-h-[91.9vh]  p-3  bg-zinc-90 flex flex-col items-center justify-center  mt-14 ">
        <h1 className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent text-4xl capitalize font-semibold ">
          about <span className="text-white">me</span>
        </h1>
        <div className="w-full md:flex mt-10 gap-10 items-start justify-center">
          <div className="p-5  bg-[#111d38] md:w-[22%] w-full rounded flex flex-col items-center justify-center shadow-[0_0_10px_1px_rgba(218,88,160,0.7)] hover:shadow-[0_0_8px_4px_rgba(218,88,160,0.7)] ">
            <div className="w-[26vh] h-[26vh] rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover object-[center_19%] object"
                src="/annusinghImage.jpg"
                alt="Annu Singh"
              />
            </div>
            <h1 className="text-xl capitalize text-white font-semibold mt-6 leading-none tracking-tight">
              annu singh
            </h1>
            <p className="text-md capitalize text-zinc-400 font-semibold mt-3 leading-none tracking-tight">
              bTech CSE(AIML) student
            </p>
            <h1 className="text-md capitalize flex items-center gap-2.5 text-zinc-400 font-semibold mt-5.5 leading-none tracking-tight">
              <span className="text-zinc-600 text-md">
                <FaMapMarkerAlt />
              </span>
              Rewa, madhy pradesh, 214642
            </h1>
            <h1 className="text-md capitalize flex items-center gap-2.5 text-zinc-400 font-semibold mt-2.5 leading-none tracking-tight">
              <span className="text-zinc-600 text-md">
                <MdCastForEducation />
              </span>
              RGPV university, bhopal (M.P.)
            </h1>
          </div>
          <div className="py-5 md:mt-0 mt-9 px-5 bg-[#111d38] md:w-[53%] w-full rounded">
            <h1 className="text-[#EE489A] text-2xl font-semibold tracking-tight leading-none ">
              Who I Am
            </h1>
            <p className="text-zinc-400 text-[17px] font-normal mt-5 tracking-tight ">
              I'm passout BTech 2024 batch CSE(AIML) student specializing in
              Artificial Intelligence and Machine Learning. As an aspiring MERN
              stack developer, I'm focused on building modern, responsive
              websites with clean UI/UX.
            </p>
            <p className="text-zinc-400 text-[17px] font-normal mt-6 tracking-tight ">
              Currently sharpening my skills in the MERN stack and Data
              Structures using JavaScript, I'm constantly learning and growing
              as a developer. With a love for learning and a dream to work at
              FAANG, I'm on a mission to turn ideas into impactful projects.
            </p>
            <h1 className="text-[#EE489A] text-2xl font-semibold mt-7 tracking-tight leading-none ">
              What I Do
            </h1>
            <div className="w-full mt-5.5 md:flex items-center justify-between">
              <div className="md:w-[47%] w-full flex items-start gap-4 ">
                <span className="flex py-4 px-2.5 rounded w-fit bg-[#3F1F3C] text-[#EE489A] ">
                  <SlArrowLeft />
                  <SlArrowRight />
                </span>
                <div>
                  <h1 className="text-xl text-white font-semibold tracking-tight leading-none ">
                    Web Development
                  </h1>
                  <p className="text-[16px] tracking-tight text-zinc-400 mt-3 ">
                    Creating responsive websites with modern technologies and
                    clean UI/UX principles.
                  </p>
                </div>
              </div>
              <div className="md:w-[47%] w-full flex items-start gap-4 ">
                <span className="flex py-3.5 px-3.5 text-xl text-zinc-400 rounded bg-[#1B3F4A]  ">
                  <CiUser />
                </span>
                <div>
                  <h1 className="text-xl text-white font-semibold tracking-tight leading-none ">
                    Problem Solving
                  </h1>
                  <p className="text-[16px] tracking-tight text-zinc-400 mt-3 ">
                    Developing efficient solutions using data structures and
                    algorithms in JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//shadow-[0_0_20px_5px_rgba(218,88,160,0.7)]
