import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillAndroid } from "react-icons/ai";
import { motion } from "framer-motion";
import gsap from "gsap";

const navLinks = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
  { path: "/skill", label: "skills" },
  { path: "/project", label: "projects" },
  { path: "/contact", label: "contact" }
];

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const copyrightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, delay: 0.2, duration: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        delay: 0.35,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out"
      }
    );
    
    gsap.fromTo(
      copyrightRef.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, delay: 0.7, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  
  const linkMotion = {
    whileHover: { scale: 1.08, color: "#22d3ee" }, 
    whileTap: { scale: 0.97 }
  };

  return (
    <div
      ref={footerRef}
      className="w-full mt-14 min-h-[13vh] md:min-h-[13vh] bg-zinc-700 md:flex items-center justify-between md:px-45 md:py-0 py-6"
      aria-label="footer"
    >
      <motion.div
        ref={logoRef}
        initial={false}
        whileHover={{ scale: 1.07, rotate: -2 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="bg-gradient-to-t block text-center md:text-left from-red-900 to-blue-500 bg-clip-text text-transparent font-semibold capitalize text-4xl z-20 cursor-pointer"
      >
        <Link to="/" tabIndex={0} aria-label="Home">
          annu
          <span className="text-white font-semibold">.</span>
        </Link>
      </motion.div>
      <div className="md:flex text-center md:my-0 my-2.5 gap-10">
        {navLinks.map((nav, idx) => (
          <motion.div
            key={nav.path}
            ref={el => (linksRef.current[idx] = el)}
            className="inline-block"
            {...linkMotion}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          >
            <NavLink
              to={nav.path}
              className={({ isActive }) =>
                `text-md capitalize text-white ${
                  idx !== 0 ? "ml-4 md:ml-0" : ""
                } ${isActive ? "underline underline-offset-4" : ""}`
              }
              aria-label={nav.label}
              tabIndex={0}
            >
              {nav.label}
            </NavLink>
          </motion.div>
        ))}
      </div>
      <motion.p
        ref={copyrightRef}
        className="flex items-center md:ml-0 ml-20 text-white font-semibold gap-0.5 text-[13px]"
        initial={false}
        whileHover={{ color: "#f59e42", scale: 1.06 }}
        transition={{ duration: 0.19 }}
      >
        © 2025 Made with{" "}
        <motion.span
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 22 }}
          transition={{ type: "spring", stiffness: 200, damping: 8 }}
        >
          <AiFillAndroid />
        </motion.span>{" "}
        by Annu Singh
      </motion.p>
    </div>
  );
};

export default Footer;
