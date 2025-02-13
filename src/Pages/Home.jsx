import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "min-h-screen bg-gray-100 text-gray-900"
          : "min-h-screen bg-gray-950 text-white"
      }
    >
      <div
        className={`h-32 aspect-square bg-purple-700 absolute right-24 top-14 blur-3xl transition-opacity duration-300 ease-in  ${
          theme === "light" ? "invisible opacity-0" : "visible opacity-100"
        }`}
      ></div>
      <div
        className={`h-44 aspect-square bg-purple-600 absolute bottom-44 left-7 blur-3xl transition-opacity duration-300 ease-in  ${
          theme === "light" ? "invisible opacity-0" : "visible opacity-100"
        }`}
      ></div>

      <section className="flex flex-col items-center relative h-screen text-center p-4 pt-20 ">
        <img
          src="fullimg.jpg"
          alt="Abhay"
          className="w-40 h-40 rounded-full shadow-xl border-4 border-white  object-cover"
        />
        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
          Hi, I'm Abhay
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4 ">
          A Full-Stack Website Developer
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-lg duration-100"
        >
          Contact Me
        </a>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
