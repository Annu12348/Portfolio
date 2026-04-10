import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";


const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skill", label: "Skills" },
  { path: "/project", label: "Projects" },
  { path: "/social", label: "Social" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (window.location.pathname !== "/") {
      
      const navType = window.performance.getEntriesByType("navigation")[0]?.type;
      if (navType === "reload" || navType === "navigate" || navType === "back_forward" || navType === "navigate") {
        navigate("/", { replace: true });
      }
     
    }
    
  }, []); 

  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  
  useEffect(() => {
    if (mobileNavRef.current) {
      if (menuOpen) {
        mobileNavRef.current.style.display = "flex";
        gsap.fromTo(
          mobileNavRef.current,
          { y: "-100%" },
          { y: "0%", duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(mobileNavRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power3.inOut",
          onComplete: () => {
            if (mobileNavRef.current) {
              mobileNavRef.current.style.display = "none";
            }
          }
        });
      }
    }
  }, [menuOpen]);

  
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && mobileNavRef.current) {
        mobileNavRef.current.style.display = "none";
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMenuToggle = useCallback(() => {
    if (!menuOpen && mobileNavRef.current) {
      mobileNavRef.current.style.display = "flex";
    }
    setMenuOpen((prev) => !prev);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-800 z-50" role="navigation" aria-label="Main Navigation">
      <div className="flex items-center justify-between px-6 py-2 w-full">
        <Link
          to="/"
          className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent font-semibold capitalize text-4xl z-20 select-none"
          aria-label="Homepage"
        >
          annu
          <span className="text-white font-semibold">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  "text-md capitalize text-white transition-colors duration-200" +
                  (isActive ? " font-bold border-b-2 border-blue-500" : "")
                }
                aria-current={location.pathname === path ? "page" : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={handleMenuToggle}
          className="md:hidden z-30 text-white text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
          style={{
            position: "relative"
          }}
        >
          <span
            style={{
              display: menuOpen ? "none" : "block",
            }}
            aria-hidden={menuOpen}
          >
            <FiMenu />
          </span>
          <span
            style={{
              display: menuOpen ? "block" : "none",
            }}
            aria-hidden={!menuOpen}
          >
            <IoMdClose />
          </span>
        </button>
      </div>

      <div
        ref={mobileNavRef}
        style={{ display: "none" }}
        className="fixed md:hidden top-0 left-0 w-full h-screen bg-zinc-800 flex-col justify-center items-center p-5 z-20 transition-all duration-500"
      >
        <nav className="w-full flex flex-col items-center gap-2" aria-label="Mobile Navigation">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                "text-md border-b border-zinc-600 p-2 text-xl w-full capitalize text-white text-center transition-colors duration-200" +
                (isActive ? " font-bold bg-zinc-700" : "")
              }
              aria-current={location.pathname === path ? "page" : undefined}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;