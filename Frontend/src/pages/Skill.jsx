import React, { useState, useRef, useEffect } from "react";
import Navigation from "../components/Navigation";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoChatbubblesOutline } from "react-icons/io5";
import { SiExpress, SiReduxsaga } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { GiSteamLocomotive } from "react-icons/gi";
import { MdSettingsApplications } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

/**
 * Skill page - displays categorized and filterable skills with 100% production animation
 * via framer-motion and gsap as per industrial standard.
 */

const SKILL_CATEGORIES = [
  { name: "all skills", label: "All Skills" },
  { name: "frontend", label: "Frontend" },
  { name: "backend", label: "Backend" },
  { name: "language", label: "Language" },
  { name: "tool", label: "Tool" },
];

const SKILLS = [
  {
    skill: "HTML5",
    icon: <FaHtml5 aria-label="HTML5" />,
    description: "Semantic markup and structure for web pages.",
    category: "frontend",
  },
  {
    skill: "CSS3",
    icon: <FaCss3Alt aria-label="CSS3" />,
    description: "Responsive design and seamless multi-device experience.",
    category: "frontend",
  },
  {
    skill: "JavaScript",
    icon: <IoLogoJavascript aria-label="JavaScript" />,
    description: "Dynamic, interactive, responsive client-side scripting.",
    category: "language",
  },
  {
    skill: "React.js",
    icon: <FaReact aria-label="React.js" />,
    description: "Component-based UI, adaptive layouts, seamless experience.",
    category: "frontend",
  },
  {
    skill: "Redux.js",
    icon: <SiReduxsaga aria-label="Redux.js" />,
    description: "Redux: State management for predictable React applications.",
    category: "frontend",
  },
  {
    skill: "Locomotive.js",
    icon: <GiSteamLocomotive aria-label="Locomotive.js" />,
    description: "Smooth scroll library for complex UI effects.",
    category: "frontend",
  },
  {
    skill: "GSAP.js",
    icon: <MdSettingsApplications aria-label="GSAP.js" />,
    description: "GSAP: Powerful timeline-based JS animation library.",
    category: "frontend",
  },
  {
    skill: "Express.js",
    icon: <SiExpress aria-label="Express.js" />,
    description: "Minimal and flexible Node.js web application framework.",
    category: "backend",
  },
  {
    skill: "Node.js",
    icon: <FaNodeJs aria-label="Node.js" />,
    description: "Asynchronous event-driven JavaScript runtime for backend.",
    category: "backend",
  },
  {
    skill: "MongoDB",
    icon: <DiMongodb aria-label="MongoDB" />,
    description: "NoSQL document database for scalable backend services.",
    category: "backend",
  },
  {
    skill: "VS Code",
    icon: <VscVscode aria-label="VS Code" />,
    description: "Extensible code editor with powerful developer tooling.",
    category: "tool",
  },
  {
    skill: "GitHub",
    icon: <FiGithub aria-label="GitHub" />,
    description: "Version control and collaboration platform.",
    category: "tool",
  },
  {
    skill: "ChatGPT",
    icon: <IoChatbubblesOutline aria-label="ChatGPT" />,
    description:
      "AI assistant for code, learning, and productivity improvement.",
    category: "tool",
  },
];

// Framer Motion variants for entrance animations
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.045, duration: 0.65 } }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 32 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 17 } }
};

// Category button animation
const categoryBtnVariant = {
  initial: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.18 } },
  tap: { scale: 0.97 }
};

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("all skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const popupRefs = useRef([]);

  // Animate category change with gsap on heading
  useEffect(() => {
    gsap.fromTo(
      ".skills-heading",
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" }
    );
  }, [activeCategory]);

  // GSAP effect for popup tooltip (desktop only)
  useEffect(() => {
    if (hoveredSkill !== null && popupRefs.current[hoveredSkill]) {
      // Animate popup in
      gsap.fromTo(
        popupRefs.current[hoveredSkill],
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.27, ease: "power2.out" }
      );
    }
  }, [hoveredSkill]);

  const filteredSkills =
    activeCategory === "all skills"
      ? SKILLS
      : SKILLS.filter((sk) => sk.category === activeCategory);

  return (
    <div className="bg-zinc-900 min-h-screen w-full">
      <Navigation />
      <main className="w-full min-h-[91.9vh] p-3 bg-zinc-900 flex flex-col items-center justify-center mt-14">
        <h1 className="skills-heading text-white text-4xl font-bold tracking-tight leading-none">
          My{" "}
          <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-zinc-400 text-center text-lg font-medium mt-8 max-w-2xl">
          Technical proficiencies and tools I use to build modern web applications.
        </p>

        <nav className="mt-12 flex flex-wrap justify-center items-center gap-4" aria-label="Skill category navigation">
          {SKILL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategory(cat.name)}
              className={`text-md py-2 px-5 rounded-4xl capitalize font-semibold transition-colors
                ${activeCategory === cat.name ? "bg-zinc-500 text-white" : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"}
              `}
              aria-pressed={activeCategory === cat.name}
              variants={categoryBtnVariant}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              {cat.label}
            </motion.button>
          ))}
        </nav>

        <motion.section
          className="w-full mt-16 flex flex-wrap md:px-30 items-center justify-center gap-6"
          aria-label="Skill cards"
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredSkills.map((sk, index) => (
              <motion.div
                key={sk.skill}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative flex flex-col items-center justify-center gap-3 rounded-lg h-[16vh] p-3 shadow-lg border transition-colors focus-within:border-white 
                  ${hoveredSkill === index ? "border-white" : "border-[#23252c]"} bg-[#2d3443] md:w-[17%] w-[44%] cursor-pointer`}
                tabIndex={0}
                aria-describedby={`skill-desc-${sk.skill}`}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                transition={{ layout: { duration: 0.33, type: "spring", bounce: 0.25 } }}
              >
                <motion.span
                  className="text-[#409cb5] text-6xl"
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 8, scale: 1.11 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  aria-label={`${sk.skill} Icon`}
                >
                  {sk.icon}
                </motion.span>
                <h2 className="text-white font-semibold tracking-tight uppercase text-md">{sk.skill}</h2>
                {/* Desktop hover popup, animated with GSAP via ref */}
                <AnimatePresence>
                  {hoveredSkill === index && (
                    <motion.div
                      className="hidden md:flex gap-5 items-start h-[20vh] rounded-lg z-40 absolute left-0 right-0 mx-auto -bottom-[129%] p-3 bg-[#2d3443] w-[44vh] shadow-lg border border-zinc-800"
                      id={`skill-desc-${sk.skill}`}
                      role="tooltip"
                      ref={el => (popupRefs.current[index] = el)}
                      initial={{ opacity: 0, y: 35, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.96 }}
                      transition={{ duration: 0.24, ease: "easeInOut" }}
                    >
                      <span className="mt-1 text-[#409cb5] text-3xl">{sk.icon}</span>
                      <div>
                        <h3 className="text-white font-semibold text-xl uppercase tracking-tight">{sk.skill}</h3>
                        <p className="text-zinc-300 tracking-tight leading-snug mt-2">{sk.description}</p>
                        <span className="inline-block mt-4 px-4 capitalize text-zinc-300 py-1 bg-zinc-800 rounded-full text-xs">
                          {sk.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>
      </main>
    </div>
  );
};

export default Skill;
