import React, { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, type: "spring", stiffness: 70 }
  })
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "tween" }
  })
};

const About = () => {
  const aboutMainRef = useRef(null);

  useEffect(() => {
    if (aboutMainRef.current) {
      gsap.fromTo(
        aboutMainRef.current,
        { background: "#0c0f17" },
        {
          background: "#171929",
          duration: 1.3,
          ease: "power1.inOut"
        }
      );
    }
    // Animate heading color bg
    gsap.fromTo(
      ".about-heading",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay: 0.10,
        ease: "power2.out"
      }
    );
    // Animate in photo on scroll
    gsap.fromTo(
      ".about-img",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        delay: 0.35,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 90%"
        }
      }
    );
    // Animate info cards stagger
    gsap.fromTo(
      ".about-info-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.16,
        scrollTrigger: {
          trigger: ".about-info-card",
          start: "top 92%"
        }
      }
    );
  }, []);

  return (
    <div 
      ref={aboutMainRef}
      className="bg-zinc-900 p-[1px] w-full min-h-screen"
      style={{ transition: "background 1.2s ease" }}
    >
      <Navigation />
      <motion.div
        className="w-full min-h-[91.9vh] p-3 bg-zinc-900 flex flex-col items-center justify-center mt-14"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
        }}
      >
        <motion.h1
          className="about-heading bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent text-4xl capitalize font-semibold"
          variants={fadeInFromBottom}
          initial="hidden"
          animate="visible"
        >
          about <span className="text-white">me</span>
        </motion.h1>
        <div className="w-full md:flex mt-10 gap-10 items-start justify-center">
          <motion.div
            className="about-info-card p-5 bg-[#111d38] md:w-[22%] w-full rounded flex flex-col items-center justify-center shadow-[0_0_10px_1px_rgba(218,88,160,0.7)] hover:shadow-[0_0_8px_4px_rgba(218,88,160,0.7)]"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={aboutCardVariants}
          >
            <motion.div
              className="about-img w-[26vh] h-[26vh] rounded-full overflow-hidden"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, ease: [0.27, 0.74, 0.47, 1.04] }}
            >
              <img
                className="w-full h-full object-cover object-[center_19%]"
                src="/annusinghImage.jpg"
                alt="Annu Singh"
              />
            </motion.div>
            <motion.h1
              className="text-xl capitalize text-white font-semibold mt-6 leading-none tracking-tight"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              annu singh
            </motion.h1>
            <motion.p
              className="text-md capitalize text-zinc-400 font-semibold mt-3 leading-none tracking-tight"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              bTech CSE(AIML) student
            </motion.p>
            <motion.h1
              className="text-md capitalize flex items-center gap-2.5 text-zinc-400 font-semibold mt-5.5 leading-none tracking-tight"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <span className="text-zinc-600 text-md">
                <FaMapMarkerAlt />
              </span>
              Rewa, madhy pradesh, 214642
            </motion.h1>
            <motion.h1
              className="text-md capitalize flex items-center gap-2.5 text-zinc-400 font-semibold mt-2.5 leading-none tracking-tight"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              <span className="text-zinc-600 text-md">
                <MdCastForEducation />
              </span>
              RGPV university, bhopal (M.P.)
            </motion.h1>
          </motion.div>
          <motion.div
            className="about-info-card py-5 md:mt-0 mt-9 px-5 bg-[#111d38] md:w-[53%] w-full rounded"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={aboutCardVariants}
          >
            <motion.h1
              className="text-[#EE489A] text-2xl font-semibold tracking-tight leading-none"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Who I Am
            </motion.h1>
            <motion.p
              className="text-zinc-400 text-[17px] font-normal mt-5 tracking-tight"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              I'm passout BTech 2024 batch CSE(AIML) student specializing in
              Artificial Intelligence and Machine Learning. As an aspiring MERN
              stack developer, I'm focused on building modern, responsive
              websites with clean UI/UX.
            </motion.p>
            <motion.p
              className="text-zinc-400 text-[17px] font-normal mt-6 tracking-tight"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              Currently sharpening my skills in the MERN stack and Data
              Structures using JavaScript, I'm constantly learning and growing
              as a developer. With a love for learning and a dream to work at
              FAANG, I'm on a mission to turn ideas into impactful projects.
            </motion.p>
            <motion.h1
              className="text-[#EE489A] text-2xl font-semibold mt-7 tracking-tight leading-none"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              What I Do
            </motion.h1>
            <div className="w-full mt-5.5 md:flex items-center justify-between">
              <motion.div
                className="md:w-[47%] w-full flex items-start gap-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, type: "spring" }}
              >
                <motion.span
                  className="flex py-4 px-2.5 rounded w-fit bg-[#3F1F3C] text-[#EE489A]"
                  initial={{ scale: 0.8, rotate: -5 }}
                  whileHover={{ scale: 1.08, rotate: 7 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                >
                  <SlArrowLeft />
                  <SlArrowRight />
                </motion.span>
                <div>
                  <h1 className="text-xl text-white font-semibold tracking-tight leading-none">
                    Web Development
                  </h1>
                  <p className="text-[16px] tracking-tight text-zinc-400 mt-3">
                    Creating responsive websites with modern technologies and
                    clean UI/UX principles.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="md:w-[47%] w-full flex items-start gap-4 mt-6 md:mt-0"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.55, type: "spring" }}
              >
                <motion.span
                  className="flex py-3.5 px-3.5 text-xl text-zinc-400 rounded bg-[#1B3F4A]"
                  initial={{ scale: 0.8, rotate: 9 }}
                  whileHover={{ scale: 1.12, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                >
                  <CiUser />
                </motion.span>
                <div>
                  <h1 className="text-xl text-white font-semibold tracking-tight leading-none">
                    Problem Solving
                  </h1>
                  <p className="text-[16px] tracking-tight text-zinc-400 mt-3">
                    Developing efficient solutions using data structures and
                    algorithms in JavaScript.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

//shadow-[0_0_20px_5px_rgba(218,88,160,0.7)]
