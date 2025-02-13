import React from "react";
import { useTheme } from "../context/ThemeContext";


const About = () => {
  const { theme } = useTheme();
  return (
    <section
      className={
        theme === "light"
          ? "p-10 text-center bg-gray-200"
          : "p-10 text-center bg-gray-950"
      }
    >
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="mt-4 max-w-2xl mx-auto">
        I am a passionate full-stack developer with expertise in modern web
        technologies like React, Tailwind CSS, Node.js, and more.
      </p>
    </section>
  );
};

export default About;
