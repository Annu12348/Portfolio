import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillAndroid } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full mt-14 min-h-[13vh] md:min-h-[13vh]  bg-zinc-700 md:flex items-center justify-between md:px-45 md:py-0 py-6 ">
      <Link
        to="/"
        className="bg-gradient-to-t block text-center md:text-left from-red-900 to-blue-500 bg-clip-text text-transparent   font-semibold capitalize text-4xl  z-20"
      >
        annu
        <span className="text-white font-semibold">.</span>
      </Link>

      <div className="md:flex text-center md:my-0 my-2.5 gap-10">
        <NavLink to="/" className="text-md  capitalize text-white">
          home
        </NavLink>
        <NavLink to="/about" className="text-md ml-4 md:ml-0 capitalize text-white">
          about
        </NavLink>

        <NavLink to="/skill" className="text-md ml-4 md:ml-0 capitalize text-white">
          skills
        </NavLink>
        <NavLink to="/project" className="text-md ml-4 md:ml-0 capitalize text-white">
          projects
        </NavLink>
        <NavLink to="/contact" className="text-md ml-4 md:ml-0 capitalize text-white">
          contact
        </NavLink>
      </div>

      <p className="flex items-center md:ml-0 ml-20  text-white font-semibold gap-0.5 text-[13px] ">
        © 2025 Made with{" "}
        <span>
          <AiFillAndroid />
        </span>{" "}
        by Annu Singh
      </p>
    </div>
  );
};

export default Footer;
