import React, { useMemo } from "react";
import Navigation from "../components/Navigation";
import { CiShare1 } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GSAP/framer aided ProjectCard (desktop)
 */
const ProjectCard = ({ project }) => (
  <motion.div
    className="md:w-[49%] shadow h-[43vh] w-full hover:border-white relative hover:border-1 rounded-lg overflow-hidden group flex flex-col"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
    whileHover={{ scale: 1.025, boxShadow: "0 10px 40px 0 #6763ec13" }}
  >
    <motion.img
      className="w-full h-[60%] object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-105"
      src={project.image}
      alt={project.name}
      loading="lazy"
      whileHover={{ scale: 1.07 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
    <div className="w-full flex-1 px-5 py-1  bg-zinc-800">
      <motion.h2
        className="text-xl tracking-tight capitalize font-black text-zinc-300 top-0"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {project.name}
      </motion.h2>
      <p className="mt-1 text-zinc-300 font-semibold tracking-tight">
        {project.description}
      </p>
      <div className="flex gap-6 mt-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 capitalize font-semibold text-red-700 tracking-tight"
          aria-label={`${project.name} live demo (opens in new tab)`}
        >
          <span className="text-red-700 mt-0.5 text-xl font-semibold">
            <CiShare1 />
          </span>
          <span>Live Demo</span>
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
          aria-label={`${project.name} source code on GitHub (opens in new tab)`}
        >
          <span className="text-blue-400 mt-0.5 text-xl font-semibold">
            <FiGithub />
          </span>
          <span className="text-blue-400 capitalize font-semibold">
            Code
          </span>
        </a>
      </div>
      <div className="flex gap-2 flex-wrap mt-1">
        <span className="px-3 text-xs rounded bg-blue-950 text-white font-semibold capitalize">
          {project.category}
        </span>
        <span className="px-3 text-xs rounded bg-zinc-900 text-gray-300 font-medium select-none">
          {project.techStack}
        </span>
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string,
    link: PropTypes.string,
    category: PropTypes.string,
    techStack: PropTypes.string
  }).isRequired,
};

/**
 * Mobile Project Card with some micro framer-motion interactions for subtlety
 */
const ProjectCardMobile = ({ project }) => (
  <motion.div
    className="w-full mt-7 pb-4 bg-zinc-600 rounded-lg shadow"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, type: "spring", stiffness: 40 }}
    whileTap={{ scale: 0.97 }}
  >
    <div className="w-full h-[24vh] rounded-t-lg overflow-hidden">
      <motion.img
        className="w-full h-full object-cover object-[center-70%]"
        src={project.image}
        alt={project.name}
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <h2 className="px-2 mt-3 font-bold text-white capitalize tracking-tight leading-none">
      {project.name}
    </h2>
    <p className="px-2 tracking-tight leading-5 font-semibold mt-3 text-zinc-400">
      {project.description}
    </p>
    <div className="px-2 flex flex-wrap items-center mt-4 gap-2 justify-between">
      <span className="text-white font-semibold capitalize px-4 py-1 bg-blue-950 rounded text-xs">{project.category}</span>
      <span className="hidden md:inline text-xs text-gray-300 px-3 py-1 bg-zinc-900 rounded">{project.techStack}</span>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-md text-red-400 font-semibold capitalize items-center gap-1 justify-center"
        aria-label={`${project.name} live demo (opens in new tab)`}
      >
        <span>
          <CiShare1 />
        </span>
        Live Demo
      </a>
      <a
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-md text-blue-200 font-semibold capitalize items-center gap-1 justify-center"
        aria-label={`${project.name} source code on GitHub (opens in new tab)`}
      >
        <span>
          <FiGithub />
        </span>
        Code
      </a>
    </div>
    <div className="block md:hidden px-2 mt-2">
      <span className="text-xs text-gray-300 px-3 py-1 bg-zinc-900 rounded">{project.techStack}</span>
    </div>
  </motion.div>
);

ProjectCardMobile.propTypes = ProjectCard.propTypes;

const PROJECTS = [
  {
    image: "/quick.png",
    name: "QuickBite Food Delivery website",
    description:
      "Full-stack Food Delivery Application with React, Redux, Node.js, Express, MongoDB, secure authentication, course management, role-based access, and interactive learning.",
    code: "https://github.com/Annu12348/Vingo",
    link: "https://vingo-frontend-cm2c.onrender.com/",
    category: "Full Stack",
    techStack: "React.JS, Node.JS, Express.JS, MongoDB"
  },
  {
    image: "/employee.png",
    name: "AI Powered Employee Task Management System",
    description:
      "AI-powered employee task management system with JWT authentication, role-based access, analytics dashboard, notifications, file uploads, and productivity insights.",
    code: "https://github.com/Annu12348/machines_task",
    link: "https://machines-task.vercel.app/",
    category: "Full Stack",
    techStack: "React.JS, Node.JS, Express.JS, MongoDB"
  },
  {
    image: "/LMS.png",
    name: "Learning Management System",
    description:
      "Full-stack LMS with React, Redux, Node.js, Express, MongoDB; secure authentication, course management, role-based access, and interactive learning.",
    code: "https://github.com/Annu12348/LMS",
    link: "https://lms-ncrk.onrender.com/",
    category: "Full Stack",
    techStack: "React.JS, Node.JS, Express.JS, MongoDB"
  },
  {
    image: "/visionary-architect.png",
    name: "Visionary Architecture",
    description:
      "A responsive frontend architecture studio site using HTML, CSS, JS with Lenis smooth scroll, GSAP animations, and locomotive interactivity.",
    link: "https://visionary-architect.vercel.app/",
    code: "https://github.com/Annu12348/Visionary--Architect",
    category: "Frontend",
    techStack: "JavaScript"
  },
  {
    image: "/omegle.png",
    name: "Omegle Clone",
    description:
      "Real-time anonymous chat using Node, Express, MongoDB, EJS templating, and Socket.io for seamless user pairing and messaging.",
    link: "https://omegle-clones.onrender.com/",
    code: "https://github.com/Annu12348/Omegle-Clones",
    category: "Full Stack",
    techStack: "React.JS, Node.JS, Express.JS, MongoDB"
  },
  {
    image: "/obys.png",
    name: "Obys Website",
    description:
      "On the OBYS website, I used JS, HTML, CSS, Locomotive, GSAP, Shery and made it fully responsive with smooth animations and effects.",
    link: "https://obys-again.vercel.app/",
    code: "https://github.com/Annu12348/Obys-Agence",
    category: "Frontend",
    techStack: "JavaScript"
  },
  {
    image: "/movie.png",
    name: "Movie Clone",
    description:
      "A responsive frontend Movie Clone site using React, tailwindcss, Redux Toolkit with Lenis smooth scroll, GSAP animations, and locomotive interactivity.",
    link: "https://movie-clone-fwjc.onrender.com/",
    code: "https://github.com/Annu12348/movie-clone",
    category: "Frontend",
    techStack: "React.JS"
  },
  {
    image: "/QHS.png",
    name: "Quiet Hours Scheduler",
    description:
      "A responsive frontend Movie Clone site using React, tailwindcss, Redux Toolkit with Lenis smooth scroll, GSAP animations, and locomotive interactivity.",
    link: "https://quiet-hours-scheduler-1.onrender.com/",
    code: "https://github.com/Annu12348/quiet-hours-scheduler",
    category: "Frontend",
    techStack: "JavaScript"
  },
  {
    image: "/loading.png",
    name: "Screenings Interview",
    description:
      "A responsive frontend Movie Clone site using React, tailwindcss, Redux Toolkit with Lenis smooth scroll, GSAP animations, and locomotive interactivity.",
    link: "https://screenings-interview.onrender.com/",
    code: "https://github.com/Annu12348/screening-interview",
    category: "Frontend",
    techStack: "JavaScript"
  }
];

const Project = () => {
  // Production best-practice: useMemo for potentially large data, or consider fetching from API
  const projects = useMemo(() => PROJECTS, []);

  return (
    <div className="bg-zinc-900 p-[1px] w-full min-h-screen">
      <Navigation />
      <main className="w-full min-h-[91.9vh] md:p-3 p-2 bg-zinc-900 flex flex-col items-center justify-center mt-14">
        <header>
          <h1 className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent capitalize text-4xl tracking-tight font-semibold">
            <span className="text-white">My</span> Projects
          </h1>
        </header>
        {/* Desktop Projects Grid */}
        <section
          className="w-full flex-wrap md:px-20 md:flex gap-5 items-center justify-center p-1 mt-8 hidden"
          aria-label="Projects List Desktop"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard project={project} key={project.name + index} />
            ))}
          </AnimatePresence>
        </section>
        {/* Mobile Project List */}
        <section
          className="w-full md:hidden"
          aria-label="Projects List Mobile"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCardMobile project={project} key={project.name + index} />
            ))}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default Project;
