import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

const Navigation = () => {
  const [val, setVal] = useState(false);
  const scrollpageRef = useRef();

  useEffect(() => {
    if (val && scrollpageRef.current) {
      gsap.fromTo(
        scrollpageRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.8, ease: "power3.out" }
      );
    } else if (!val && scrollpageRef.current) {
      gsap.to(scrollpageRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [val]);

  return (
    <div className=" fixed top-0  bg-zinc-800 w-full ">
      <div className="px-6  py-2 flex items-center justify-between w-full">
        <Link
          to="/"
          className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent   font-semibold capitalize text-4xl  z-20"
        >
          annu
          <span className="text-white font-semibold">.</span>
        </Link>
        <div className="md:flex items-center gap-10 hidden">
          <NavLink to="/" className="text-md capitalize text-white">
            home
          </NavLink>
          <NavLink to="/about" className="text-md capitalize text-white">
            about
          </NavLink>
         
          <NavLink to="/skill" className="text-md capitalize text-white">
            skills
          </NavLink>
          <NavLink to="/project" className="text-md capitalize text-white">
            projects
          </NavLink>
          <NavLink to="/social" className="text-md capitalize text-white">
            social
          </NavLink>
          <NavLink to="/contact" className="text-md capitalize text-white">
            contact
          </NavLink>
        </div>
        <span
          onClick={() => setVal(!val)}
          className="text-white z-20 cursor-pointer md:hidden  text-2xl"
        >
          {val ? <IoMdClose /> : <FiMenu />}
        </span>
      </div>

      <div
        ref={scrollpageRef}
        className="w-full h-screen flex items-center p-5  justify-center flex-col bg-zinc-800 fixed md:hidden -top-[0%] left-0 bottom-0 right-0 z-10 "
      >
        <NavLink
          to="/"
          onClick={() => setVal(false)}
          className="text-md border-b border-zinc-600 p-2 text-xl w-full capitalize text-white"
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setVal(false)}
          className="text-md capitalize text-white border-b border-zinc-600 p-2 text-xl w-full"
        >
          about
        </NavLink>
        
        <NavLink
          to="/skill"
          onClick={() => setVal(false)}
          className="text-md capitalize text-white border-b border-zinc-600 p-2 text-xl w-full"
        >
          skills
        </NavLink>
        <NavLink
          to="/project"
          onClick={() => setVal(false)}
          className="text-md capitalize text-white border-b border-zinc-600 p-2 text-xl w-full"
        >
          projects
        </NavLink>
        
        <NavLink
          to="/social"
          onClick={() => setVal(false)}
          className="text-md capitalize text-white border-b border-zinc-600 p-2 text-xl w-full"
        >
          social
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setVal(false)}
          className="text-md capitalize text-white border-b border-zinc-600 p-2 text-xl w-full"
        >
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;