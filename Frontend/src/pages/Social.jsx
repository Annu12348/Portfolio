import React, { useEffect, useRef } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import CountUp from "react-countup";
import { MdGroup } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Social - 100% production, industrial standard, animated with Framer Motion and GSAP
 */
const STATISTICS = [
  {
    label: "connections",
    count: 700,
    icon: <MdGroup />,
  },
  {
    label: "followers",
    count: 600,
    icon: <MdGroup />,
  },
  {
    label: "Certifications",
    count: 4,
    icon: <MdGroup />,
  },
  {
    label: "Skills Endorsed",
    count: 20,
    icon: <MdGroup />,
  },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: <TiSocialLinkedin />,
    bg: "bg-blue-500",
    label: "connect on LinkedIn",
    href: "https://www.linkedin.com/in/yourprofile",
    gradient: null,
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    bg: "bg-gradient-to-r from-red-300 to-blue-500",
    label: "follow on Instagram",
    href: "https://instagram.com/yourprofile",
    gradient: true,
  },
  {
    name: "GitHub",
    icon: <LuGithub />,
    bg: "bg-blue-500",
    label: "follow on GitHub",
    href: "https://github.com/yourprofile",
    gradient: null,
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.09, duration: 0.7 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 45 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 13 } },
  hover: { scale: 1.045, boxShadow: "0 12px 28px 0 #931a3155" },
};

const headerVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Social = () => {
  const socialBoxRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (socialBoxRef.current) {
      gsap.fromTo(
        socialBoxRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: socialBoxRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-zinc-900 md:px-0 px-4 flex items-center justify-center min-h-screen p-1 flex-col">
      <motion.h1
        className="text-white md:text-3xl font-semibold"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        My{" "}
        <span className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent">
          Social Media
        </span>{" "}
        Presence
      </motion.h1>
      <motion.div
        ref={socialBoxRef}
        className="bg-[#111725] shadow hover:border-1 hover:border-red-100 p-4 rounded-lg w-full md:w-[80%] mt-10"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="bg-gradient-to-t gap-4 flex items-center from-red-900 to-blue-500 bg-clip-text text-transparent font-semibold text-2xl"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <span className="text-blue-500 mb-1 text-4xl">
            <TiSocialLinkedin />
          </span>
          LinkedIn Presence
        </motion.h1>

        <motion.div
          className="w-full mt-4 flex-wrap flex gap-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {STATISTICS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="md:w-[22%] w-[43%] hover:shadow-amber-800 bg-zinc-700 rounded-lg shadow p-3 flex items-center justify-center flex-col"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="hidden"
                transition={{ layout: { duration: 0.28, type: "spring" } }}
                layout
              >
                <motion.span
                  className="text-red-900 text-3xl"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 12, scale: 1.11 }}
                  transition={{ type: "spring", stiffness: 110 }}
                >
                  {stat.icon}
                </motion.span>
                <span className="text-md mt-1 font-semibold text-white">
                  <CountUp end={stat.count} /> +
                </span>
                <h1 className="text-md mt-0.5 capitalize text-center text-white font-semibold">
                  {stat.label}
                </h1>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="w-full py-5 px-3 md:flex mt-10 items-center justify-center gap-19"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {SOCIAL_LINKS.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center md:m-0 m-auto gap-2 mt-4 ${social.bg} w-fit px-5 py-2 shadow-red-700 hover:shadow-2xl text-white font-semibold capitalize rounded-full justify-center transition-colors`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="hidden"
                transition={{ duration: 0.24 }}
                layout
                aria-label={social.label}
              >
                <span className="text-white text-3xl">{social.icon}</span>
                {social.label}
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Social;
