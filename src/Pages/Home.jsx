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
          : "min-h-screen bg-gray-900 text-white"
      }
    >
      <section className="flex flex-col items-center relative top-20 h-screen text-center p-4">
        <img
          src="fullimg.jpg"
          alt="Abhay"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300 object-cover"
        />
        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
          Hi, I'm Abhay
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4">
          A Full-Stack Website Developer
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
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
