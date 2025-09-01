import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Project from "../pages/Project";
import Social from "../pages/Social";
import Contact from "../pages/Contact";

const Router = () => {
  const location = useLocation();

  const HomeRef = useRef();
  const AboutRef = useRef();
  const SkillRef = useRef();
  const ProjectRef = useRef();
  const socialRef = useRef();
  const contactRef = useRef();

  if (location.pathname === "/about") {
    AboutRef.current?.scrollIntoView({ behavior: "smooth" });
  } else if (location.pathname === "/skill") {
    SkillRef.current?.scrollIntoView({ behavior: "smooth" });
  } else if (location.pathname === "/project") {
    ProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  } else if (location.pathname === "/social") {
    socialRef.current?.scrollIntoView({ behavior: "smooth" });
  } else if (location.pathname === "/contact") {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  } else {
    HomeRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div ref={HomeRef}>
        <Home />
      </div>
      <div ref={AboutRef}>
        <About />
      </div>
      <div ref={SkillRef}>
        <Skill />
      </div>
      <div ref={ProjectRef}>
        <Project />
      </div>
      <div ref={socialRef}>
        <Social />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Router;
