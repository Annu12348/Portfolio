import React from "react";
import Navigation from "../components/Navigation";

const About = () => {
  document.title = "Annu Singh | Full Stack Developer | about";
  return (
    <div className="bg-zinc-900 p-[1px] w-full h-screen ">
      <Navigation />
      <div className="w-full h-[91.9%] flex flex-col items-center justify-center bg-zinc-900  mt-14 "></div>
    </div>
  );
};

export default About;
