import React from "react";
import { useTheme } from "../context/ThemeContext";
{
}
const Projects = () => {
  const { theme } = useTheme();
  return (
    <>
      <section
        className={
          theme === "light"
            ? "p-10 text-center bg-gray-300"
            : "p-10 text-center bg-gray-700"
        }
      >
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2  mt-6 gap-6 justify-center">
          <div className="p-5 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2">A short description of the project.</p>
          </div>
          <div className="p-5 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">A short description of the project.</p>
          </div>
        </div>
      </section>

      <section
        className={
          theme === "light"
            ? "p-10 text-center bg-gray-200"
            : "p-10 text-center bg-gray-800"
        }
      >
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            React
          </span>
          <span className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Node.js
          </span>
          <span className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            MongoDB
          </span>
        </div>
      </section>
    </>
  );
};

export default Projects;
