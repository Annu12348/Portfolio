import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import Footer from "../components/Footer";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

// Animation variants
const fadeUpStagger = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.23 + i * 0.12,
      duration: 0.7,
      ease: [0.21, 0.96, 0.62, 0.99],
    },
  }),
};

const fadePanelRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] } },
};

const fadePanelLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] } },
};

const Contact = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState({ name: "", email: "", message: "" });

  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  // Animation fire only when this route is hit/mounted:
  useEffect(() => {
    // Animation runs only when actually routed here (route mount)
    setAnimated(false); // reset for remount
    // small timeout to trigger animation state after mount
    const timeout = setTimeout(() => setAnimated(true), 10);
    // GSAP for panels entrance: only when on Contact route
    if (location.pathname === "/contact") {
      if (leftPanelRef.current) {
        gsap.fromTo(
          leftPanelRef.current,
          { opacity: 0, x: -120 },
          { opacity: 1, x: 0, duration: 1, ease: "expo.out", overwrite: "auto" }
        );
      }
      if (rightPanelRef.current) {
        gsap.fromTo(
          rightPanelRef.current,
          { opacity: 0, x: 120 },
          { opacity: 1, x: 0, duration: 1, ease: "expo.out", delay: 0.18, overwrite: "auto" }
        );
      }
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://portfolio-backend-1hfq.onrender.com/contact",
        val,
        { withCredentials: true }
      );
      setVal({ name: "", email: "", message: "" });
    } catch (err) {
      // Log error in prod: Can add toast/alert for user as well
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      label: "email",
      icon: <CgMail />,
      color: "text-red-400",
      bg: "bg-zinc-600",
      value: (
        <a
          className="text-white mt-1.5 font-semibold hover:underline hover:text-red-400 block"
          href="mailto:annu37752@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          annu37752@gmail.com
        </a>
      ),
    },
    {
      label: "phone",
      icon: <FaPhoneAlt />,
      color: "text-blue-100",
      bg: "bg-zinc-600",
      value: (
        <a
          className="text-white mt-1.5 font-semibold hover:underline hover:text-red-400 block"
          href="tel:+918959732124"
          target="_blank"
          rel="noopener noreferrer"
        >
          +918959732124
        </a>
      ),
    },
    {
      label: "gitHub",
      icon: <LuGithub />,
      color: "text-red-400",
      bg: "bg-zinc-600",
      value: (
        <a
          className="text-white mt-1.5 font-semibold hover:underline hover:text-red-400 block"
          href="https://github.com/Annu12348"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/annu12348
        </a>
      ),
    },
    {
      label: "linkedIn",
      icon: <TiSocialLinkedin />,
      color: "text-blue-100",
      bg: "bg-zinc-600",
      value: (
        <a
          className="text-white mt-1.5 font-semibold hover:underline hover:text-red-400 block"
          href="https://www.linkedin.com/in/annu-singh-458ab9292/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Annu Singh
        </a>
      ),
    },
    {
      label: "instagram",
      icon: <FaInstagram />,
      color: "text-red-400",
      bg: "bg-zinc-600",
      value: (
        <a
          className="text-white mt-1.5 font-semibold hover:underline hover:text-red-400 block"
          href="https://www.instagram.com/_heart_king_.annusingh._/"
          target="_blank"
          rel="noopener noreferrer"
        >
          _heart_king_.annusingh._
        </a>
      ),
    },
    {
      label: "facebook",
      icon: <FaFacebookF />,
      color: "text-blue-100",
      bg: "bg-zinc-600",
      value: (
        <a
          className="text-white mt-1.5 font-semibold hover:underline hover:text-red-400 block"
          href="https://www.facebook.com/profile.php?id=100060431210733"
          target="_blank"
          rel="noopener noreferrer"
        >
          annu singh
        </a>
      ),
    },
  ];

  const socials = [
    {
      icon: <LuGithub />,
      href: "https://github.com/Annu12348",
      color: "text-red-400",
      extra: "bg-zinc-600",
    },
    {
      icon: <TiSocialLinkedin />,
      href: "https://www.linkedin.com/in/annu-singh-458ab9292/",
      color: "text-blue-100",
      extra: "bg-blue-600",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_heart_king_.annusingh._/",
      color: "text-red-400",
      extra: "bg-gradient-to-l from-red-900 to-blue-500",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=100060431210733",
      color: "text-blue-100",
      extra: "bg-blue-900",
    },
  ];

  const isContactRoute = location.pathname === "/contact";

  return (
    <div className="w-full bg-zinc-900 min-h-screen font-semibold overflow-x-hidden">
      <div className="w-full min-h-[92.7vh] py-5 md:px-45 px-4">
        <motion.h1
          initial={isContactRoute && animated ? { opacity: 0, scale: 0.88, y: 34 } : false}
          animate={isContactRoute && animated ? { opacity: 1, scale: 1, y: 0 } : false}
          transition={
            isContactRoute && animated
              ? {
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.13,
                }
              : {}
          }
          className="bg-gradient-to-b from-red-900 to-blue-500 bg-clip-text text-transparent font-semibold text-center text-4xl capitalize"
        >
          contact <span className="text-white">with me</span>
        </motion.h1>
        <div className="w-full mt-10 md:flex gap-10">
          {/* Left Contact Info Panel */}
          <div
            ref={leftPanelRef}
            className="md:w-[50%] bg-[#111725] py-5 px-5 rounded-2xl"
          >
            <motion.h1
              initial={
                isContactRoute && animated ? { opacity: 0, y: -42 } : false
              }
              animate={
                isContactRoute && animated ? { opacity: 1, y: 0 } : false
              }
              transition={
                isContactRoute && animated
                  ? { duration: 0.75, ease: "circOut", delay: 0.26 }
                  : {}
              }
              className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent capitalize text-2xl tracking-tight leading-none"
            >
              contact information
            </motion.h1>
            <motion.div
              initial={isContactRoute && animated ? { scaleX: 0 } : false}
              animate={isContactRoute && animated ? { scaleX: 1 } : false}
              transition={
                isContactRoute && animated
                  ? { duration: 0.66, ease: "backOut", delay: 0.42 }
                  : {}
              }
              className="h-0.5 w-24 mt-1 bg-gradient-to-r from-red-900 to-blue-500 origin-left"
            ></motion.div>
            <div>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUpStagger}
                  initial={isContactRoute && animated ? "hidden" : false}
                  animate={isContactRoute && animated ? "visible" : false}
                  className="flex items-center gap-5 mt-5"
                >
                  <motion.span
                    whileHover={
                      isContactRoute && animated
                        ? {
                            rotate: 15,
                            scale: 1.15,
                            transition: {
                              type: "spring",
                              stiffness: 340,
                              damping: 12,
                            },
                          }
                        : false
                    }
                    className={`text-2xl md:text-3xl p-2 ${item.color} rounded ${item.bg} mt-0.5 cursor-pointer`}
                  >
                    {item.icon}
                  </motion.span>
                  <div className="leading-none">
                    <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                      {item.label}
                    </h1>
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.h1
              initial={isContactRoute && animated ? { opacity: 0, x: -25 } : false}
              animate={isContactRoute && animated ? { opacity: 1, x: 0 } : false}
              transition={
                isContactRoute && animated
                  ? { delay: 0.47, duration: 0.65, ease: "anticipate" }
                  : {}
              }
              className="mt-9 capitalize text-2xl text-[#c76363]"
            >
              follow me
            </motion.h1>
            <motion.div
              initial={isContactRoute && animated ? { scaleX: 0 } : false}
              animate={isContactRoute && animated ? { scaleX: 1 } : false}
              transition={
                isContactRoute && animated
                  ? { duration: 0.7, ease: "backOut", delay: 0.7 }
                  : {}
              }
              className="h-0.5 w-18 mt-0.5 bg-gradient-to-r from-red-900 to-blue-500 origin-left"
            ></motion.div>
            <div className="flex mt-3 items-center gap-4 flex-wrap">
              {socials.map((s, i) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={
                    isContactRoute && animated
                      ? { opacity: 0, scale: 0.7, y: 30 }
                      : false
                  }
                  animate={
                    isContactRoute && animated
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            delay: 0.89 + i * 0.13,
                            duration: 0.5,
                            ease: "backOut",
                          },
                        }
                      : false
                  }
                  whileHover={
                    isContactRoute && animated
                      ? {
                          scale: 1.14,
                          rotate: 11,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 14,
                          },
                        }
                      : false
                  }
                  className={`text-2xl p-3 rounded-full ${s.color} ${s.extra} mt-0.5 transition-all duration-200`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
          {/* Right Contact Form Panel */}
          <div
            ref={rightPanelRef}
            className="md:w-[50%] px-5 mt-5 py-5 rounded-2xl bg-[#111725]"
          >
            <motion.h1
              initial={isContactRoute && animated ? { opacity: 0, y: -44 } : false}
              animate={isContactRoute && animated ? { opacity: 1, y: 0 } : false}
              transition={
                isContactRoute && animated
                  ? { delay: 0.36, duration: 0.8, ease: "backOut" }
                  : {}
              }
              className="bg-gradient-to-t leading-none from-red-900 to-blue-500 bg-clip-text text-transparent text-2xl tracking-tight"
            >
              Send Me a Message
            </motion.h1>
            <motion.div
              initial={isContactRoute && animated ? { scaleX: 0 } : false}
              animate={isContactRoute && animated ? { scaleX: 1 } : false}
              transition={
                isContactRoute && animated
                  ? { duration: 0.66, ease: "backOut", delay: 0.52 }
                  : {}
              }
              className="h-0.5 w-24 bg-gradient-to-r mt-1.5 from-red-900 to-blue-500 origin-left"
            ></motion.div>
            <motion.div
              initial={isContactRoute && animated ? "hidden" : false}
              animate={isContactRoute && animated ? "visible" : false}
              variants={fadePanelRight}
              className="mt-5"
            >
              <form onSubmit={handleContactSubmit} autoComplete="off">
                <motion.div
                  initial={isContactRoute && animated ? "hidden" : false}
                  animate={isContactRoute && animated ? "visible" : false}
                  variants={fadePanelRight}
                  className="flex flex-col"
                >
                  <label className="text-white capitalize">your name</label>
                  <motion.input
                    whileFocus={
                      isContactRoute && animated
                        ? { scale: 1.05, borderColor: "#c081aa" }
                        : false
                    }
                    className="border mt-1 px-2 outline-none py-2 border-zinc-800 rounded text-zinc-500 capitalize focus:border-red-500 transition"
                    type="text"
                    placeholder="enter your name"
                    required
                    value={val.name}
                    onChange={(e) => setVal({ ...val, name: e.target.value })}
                  />
                </motion.div>
                <motion.div
                  initial={isContactRoute && animated ? "hidden" : false}
                  animate={isContactRoute && animated ? "visible" : false}
                  variants={fadePanelRight}
                  className="flex flex-col mt-6"
                >
                  <label className="text-white capitalize">email address</label>
                  <motion.input
                    whileFocus={
                      isContactRoute && animated
                        ? { scale: 1.05, borderColor: "#84a2fa" }
                        : false
                    }
                    className="border px-2 py-2 outline-none mt-1 border-zinc-800 rounded text-zinc-500"
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                    value={val.email}
                    onChange={(e) => setVal({ ...val, email: e.target.value })}
                  />
                </motion.div>
                <motion.div
                  initial={isContactRoute && animated ? "hidden" : false}
                  animate={isContactRoute && animated ? "visible" : false}
                  variants={fadePanelRight}
                  className="flex flex-col mt-6"
                >
                  <label className="capitalize text-white">message</label>
                  <motion.textarea
                    whileFocus={
                      isContactRoute && animated
                        ? { scale: 1.03, borderColor: "#e2a8aa" }
                        : false
                    }
                    className="border px-2 py-2 mt-1 resize-none outline-none border-zinc-800 rounded text-zinc-500 capitalize"
                    placeholder="enter your message"
                    rows="5"
                    required
                    value={val.message}
                    onChange={(e) =>
                      setVal({ ...val, message: e.target.value })
                    }
                  />
                </motion.div>
                <AnimatePresence>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={
                      isContactRoute && animated
                        ? {
                            scale: 1.045,
                            boxShadow: "0 3px 22px 2px #37415133",
                          }
                        : false
                    }
                    whileTap={isContactRoute && animated ? { scale: 0.98 } : false}
                    initial={isContactRoute && animated ? { opacity: 0, x: 40 } : false}
                    animate={isContactRoute && animated ? { opacity: 1, x: 0 } : false}
                    exit={isContactRoute && animated ? { opacity: 0, x: 40 } : false}
                    transition={
                      isContactRoute && animated
                        ? { delay: 0.25, duration: 0.45, ease: "backOut" }
                        : {}
                    }
                    className="flex flex-row-reverse capitalize text-white font-semibold rounded-lg px-3 py-3 justify-center bg-gradient-to-r from-red-900 to-blue-500 gap-2 items-center mt-7 w-full text-center"
                  >
                    {loading ? (
                      <div className="flex justify-center items-center">
                        <motion.svg
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "linear",
                          }}
                          className="h-6 w-6 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </motion.svg>
                      </div>
                    ) : (
                      <>
                        <BsSend className="mr-3" />
                        send message
                      </>
                    )}
                  </motion.button>
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
