import React, { useState, useRef } from "react";
import { CiBellOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const Fixed = () => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);

  const handleClose = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setVisible(false),
      });
    } else {
      setVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={containerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          className="bg-black fixed text-white text-[10px] w-fit right-3 px-3 py-1 z-40 top-[94%] rounded font-semibold capitalize shadow-lg"
          style={{ willChange: "transform, opacity" }}
        >
          <h1 className="flex items-center text-amber-200 gap-1">
            edit with{" "}
            <motion.span
              initial={{ rotate: -15, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.2 }}
            >
              <CiBellOn />
            </motion.span>{" "}
            lovable
          </h1>
          <span
            onClick={handleClose}
            className="right-0.5 absolute top-[1%] cursor-pointer"
            aria-label="Close"
            style={{ outline: "none" }}
            tabIndex={0}
            onKeyPress={e => (e.key === "Enter" || e.key === " ") && handleClose()}
          >
            <IoMdClose />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Fixed;
