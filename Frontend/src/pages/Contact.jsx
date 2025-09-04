import React, { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import Footer from "../components/Footer";
import axios from "axios";

const Contact = () => {
  const [val, setVal] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactapi = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-backend-1hfq.onrender.com/contact",
        val,
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleclicked = (e) => {
    e.preventDefault();
    contactapi();
    console.log(val);
    setVal({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full  bg-zinc-900 min-h-screen   font-semibold">
      <div className="w-full min-h-[92.7vh]  py-5 md:px-45 px-4">
        <h1 className="bg-gradient-to-b from-red-900 to-blue-500 bg-clip-text text-transparent font-semibold text-center text-4xl capitalize">
          contact <span className="text-white">with me</span>
        </h1>
        <div className=" w-full  mt-10 md:flex gap-10">
          <div className="md:w-[50%] bg-[#111725]  py-5 px-5 rounded-2xl">
            <h1 className="bg-gradient-to-t from-red-900 to-blue-500 bg-clip-text text-transparent capitalize text-2xl tracking-tight leading-none">
              contact information
            </h1>
            <div className="h-0.5 w-24 mt-1 bg-gradient-to-r from-red-900 to-blue-500  "></div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-3xl p-1.5 text-red-400 hover:rotate-12 hover:scale-120 rounded bg-zinc-600 mt-0.5">
                <CgMail />
              </span>
              <div className="leading-none">
                <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                  email
                </h1>
                <a
                  className="text-white mt-1.5 font-semibold  hover:underline hover:text-red-400 block"
                  href="mailto:annu37752@gmail.com"
                  target="_blank"
                >
                  annu37752@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-2xl p-2  text-blue-100 hover:rotate-12 hover:scale-120 rounded bg-zinc-600 mt-0.5">
                <FaPhoneAlt />
              </span>
              <div className="leading-none">
                <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                  phone
                </h1>
                <a
                  className="text-white mt-1.5 font-semibold  hover:underline hover:text-red-400 block"
                  href="tel:+918959732124"
                  target="_blank"
                >
                  +918959732124
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-2xl p-2 text-red-400 hover:rotate-12 hover:scale-120 rounded bg-zinc-600 mt-0.5">
                <LuGithub />
              </span>
              <div className="leading-none">
                <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                  gitHub
                </h1>
                <a
                  className="text-white mt-1.5 font-semibold  hover:underline hover:text-red-400 block"
                  href="https://github.com/Annu12348"
                  target="_blank"
                >
                  github.com/annu12348
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-2xl p-2  text-blue-100 hover:rotate-12 hover:scale-120 rounded bg-zinc-600 mt-0.5">
                <TiSocialLinkedin />
              </span>
              <div className="leading-none">
                <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                  linkedIn
                </h1>
                <a
                  className="text-white mt-1.5 font-semibold  hover:underline hover:text-red-400 block"
                  href="https://www.linkedin.com/in/annu-singh-458ab9292/"
                  target="_blank"
                >
                  Annu Singh
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-2xl p-2 text-red-400 hover:rotate-12 hover:scale-120 rounded bg-zinc-600 mt-0.5">
                <FaInstagram />
              </span>
              <div className="leading-none">
                <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                  instagram
                </h1>
                <a
                  className="text-white mt-1.5 font-semibold  hover:underline hover:text-red-400 block"
                  href="https://www.instagram.com/_heart_king_.annusingh._/"
                  target="_blank"
                >
                  _heart_king_.annusingh._
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-2xl p-2  text-blue-100 hover:rotate-12 hover:scale-120 rounded bg-zinc-600 mt-0.5">
                <FaFacebookF />
              </span>
              <div className="leading-none">
                <h1 className="text-zinc-500 capitalize text-md font-semibold ">
                  facebook
                </h1>
                <a
                  className="text-white  mt-1.5 font-semibold  hover:underline hover:text-red-400 block"
                  href="https://www.facebook.com/profile.php?id=100060431210733"
                  target="_blank"
                >
                  annu singh
                </a>
              </div>
            </div>
            <h1 className="mt-9 capitalize text-2xl text-[#c76363]  ">
              follow me
            </h1>
            <div className="h-0.5 w-18 mt-0.5  bg-gradient-to-r from-red-900 to-blue-500  "></div>
            <div className="flex mt-3 items-center gap-4 flex-wrap">
              <a
                className="text-2xl p-3 rounded-full text-red-400 hover:rotate-12 hover:scale-120  bg-zinc-600 mt-0.5"
                href="https://github.com/Annu12348"
                target="_blank"
              >
                <LuGithub />
              </a>
              <a
                className="text-2xl p-3  text-blue-100 hover:rotate-12 hover:scale-120 rounded-full bg-blue-600 mt-0.5"
                href="https://www.linkedin.com/in/annu-singh-458ab9292/"
                target="_blank"
              >
                <TiSocialLinkedin />
              </a>
              <a
                className="text-2xl p-3 text-red-400 hover:rotate-12 hover:scale-120 rounded-full bg-gradient-to-l from-red-900 to-blue-500 mt-0.5"
                href="https://www.instagram.com/_heart_king_.annusingh._/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <span
                className="text-2xl p-3  text-blue-100 hover:rotate-12 hover:scale-120 rounded-full bg-blue-900 mt-0.5"
                href="https://www.facebook.com/profile.php?id=100060431210733"
                target="_blank"
              >
                <FaFacebookF />
              </span>
            </div>
          </div>

          <div className="md:w-[50%] px-5 mt-5 py-5  rounded-2xl bg-[#111725] ">
            <h1 className="bg-gradient-to-t leading-none from-red-900 to-blue-500 bg-clip-text text-transparent text-2xl tracking-tight  ">
              Send Me a Message
            </h1>
            <div className="h-0.5 w-24  bg-gradient-to-r mt-1.5 from-red-900 to-blue-500  "></div>
            <div className="mt-5">
              <form onSubmit={handleclicked}>
                <div className="flex flex-col ">
                  <label className="text-white capitalize">your name</label>
                  <input
                    className="border mt-1 px-2 outline-none py-2 border-zinc-800 rounded text-zinc-500 capitalize"
                    type="text"
                    placeholder="enter your name"
                    required
                    value={val.name}
                    onChange={(e) => setVal({ ...val, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-white capitalize">email addresh</label>
                  <input
                    className="border px-2 py-2 outline-none mt-1 border-zinc-800 rounded text-zinc-500 capitalize"
                    type="email"
                    placeholder="enter your email address"
                    required
                    value={val.email}
                    onChange={(e) => setVal({ ...val, email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="capitalize text-white">message</label>
                  <textarea
                    className="border px-2 py-2 mt-1 resize-none outline-none border-zinc-800 rounded text-zinc-500 capitalize"
                    placeholder="enter your message"
                    rows="5"
                    required
                    value={val.message}
                    onChange={(e) =>
                      setVal({ ...val, message: e.target.value })
                    }
                  />
                </div>
                <input
                  className="flex flex-row-reverse capitalize text-white font-semibold rounded-lg px-3 py-3 justify-center bg-gradient-to-r from-red-900 to-blue-500  gap-2 items-center mt-7 w-full text-center"
                  type="submit"
                  value='send message'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
