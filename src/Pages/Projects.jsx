import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaJs } from "react-icons/fa";
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
            ? "p-10 text-center bg-gray-100"
            : "p-10 text-center bg-gray-950"
        }
      >
        <h2 className="text-3xl font-semibold ">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2  mt-6 gap-6 justify-center">
          <div
            className={`p-5  rounded-lg transition-colors duration-300 ${
              theme == "light"
                ? "bg-white text-purple-800 hover:text-white hover:bg-purple-600"
                : "bg-purple-900  hover:bg-purple-800"
            }`}
          >
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2">A short description of the project.</p>
          </div>
          <div
            className={`p-5  rounded-lg transition-colors duration-300 ${
              theme == "light"
                ? "bg-white text-purple-800 hover:text-white hover:bg-purple-600"
                : "bg-purple-900  hover:bg-purple-800"
            }`}
          >
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">A short description of the project.</p>
          </div>
          {/* <div className="p-5 bg-white rounded-lg hover:bg-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">A short description of the project.</p>
          </div> */}
        </div>
      </section>

      <section
        className={
          theme === "light"
            ? "p-10 text-center bg-gray-200"
            : "p-10 text-center bg-gray-950"
        }
      >
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2  bg-[#61DAFB] rounded-lg text-white capitalize font-bold">
            <RiReactjsLine
              color="#fff"
              size={48}
              style={{ margin: "0 auto" }}
            />
            react
          </span>

          <span className="px-4 py-2  bg-[#3C873A] rounded-lg text-white capitalize font-bold">
            <FaNodeJs color="#fff" size={48} style={{ margin: "0 auto" }} />
            Node.js
          </span>
          <span className="px-4 py-2  bg-[#f7cd03] rounded-lg text-white capitalize font-bold">
            <FaJs color="#fff" size={48} style={{ margin: "0 auto" }} />
            Javascript
          </span>
          <span className="px-4 py-2  bg-[#00c158] rounded-lg text-white capitalize font-bold">
            <SiMongodb color="#fff" size={48} style={{ margin: "0 auto" }} />
            Mongo DB
          </span>
          <span className="px-4 py-2  bg-[#38BDF8] rounded-lg text-white capitalize font-bold">
            <RiTailwindCssFill
              color="#fff"
              size={48}
              style={{ margin: "0 auto" }}
            />
            Tailwind CSS
          </span>
        </div>
      </section>
    </>
  );
};

export default Projects;
