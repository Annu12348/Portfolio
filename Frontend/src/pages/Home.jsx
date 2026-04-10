import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { GoArrowDown } from "react-icons/go";

/**
 * Home - 100% production, industrial standard, only animate if truly valuable.
 */
const Home = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full flex flex-col relative">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center w-full md:px-0 px-3 mt-14">
        <header className="w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-center capitalize md:text-8xl text-4xl font-bold tracking-tight leading-none">
            Hi, I'm{" "}
            <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent md:inline block md:text-8xl text-6xl md:mt-0 -mt-1">
              Annu Singh
            </span>
          </h1>
          <h2 className="text-white md:mt-6 mt-3 text-center md:text-4xl text-2xl capitalize font-semibold">
            a{" "}
            <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent">
              MERN Stack Developer.
            </span>
          </h2>
        </header>
        <section className="w-full flex flex-col items-center mt-6 md:mt-8">
          <p className="text-white text-md font-medium text-center md:w-1/2">
            Frontend-focused Full Stack JavaScript Developer experienced in building responsive, real-time web apps using React.js, Node.js, MongoDB, and WebRTC. Experienced with GSAP, Locomotive, REST APIs, and modern deployment via Vercel &amp; Render.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full mt-8">
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-3xl font-semibold text-xl bg-gradient-to-r from-[#DA58A0] to-[#63C1CE] text-white shadow hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-pink-400 md:w-auto w-full capitalize"
            >
              <CiUser className="text-2xl" />
              About
            </Link>
            <Link
              to="/skill"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-3xl font-semibold text-xl border border-zinc-300 hover:border-red-300 text-white md:w-auto w-full mt-5 md:mt-0 capitalize transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <IoMdLink className="text-2xl" />
              Skills
            </Link>
          </div>
        </section>
        <div className="w-full flex justify-center items-center mt-16">
          <Link
            to="/about"
            className="flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Scroll down to About"
          >
            <span className="text-zinc-500 text-2xl group-hover:text-blue-500 transition">
              <GoArrowDown />
            </span>
            <span className="sr-only">Scroll to About section</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
