import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { motion } from "framer-motion";
const Home = () => {
  const { theme } = useTheme();
  return (
    <div>
     
      
      {/* home page section */}
      <section className="overflow-hidden flex flex-col items-center relative h-screen text-center p-4 pt-16 ">
      <motion.div
      animate={{
        rotate:[0,360],
        left:[0,"70%","70%",0,0],
        bottom:[0,0,"70%","70%",0]
      }}
      transition={{
        duration:5,
        repeat:Infinity,
        ease:"linear"
      }}
        className={`h-[30%] aspect-square bg-purple-600 absolute bottom-12 left-7 blur-2xl transition-opacity duration-300 ease-in  ${
          theme === "light" ? "invisible opacity-0" : "visible opacity-100"
        }`}
      ></motion.div>


      
        <motion.img
          src="fullimg.jpg"
          alt="Abhay"
          animate={{
            scale: [0, 1],
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative z-10 w-40 h-40 rounded-full shadow-xl border-4 border-white  object-cover"
        />
        <motion.h1
          animate={{
            left: [700, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
          }}
          className="relative z-10 left-full text-4xl sm:text-5xl md:text-6xl font-bold mt-5"
        >
          Hi, I'm Abhay
        </motion.h1>
        <motion.p
          animate={{
            right: [700, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
          }}
          className="relative z-10 text-xl sm:text-2xl md:text-3xl mt-4 "
        >
          A Full-Stack Website Developer
        </motion.p>
        <motion.a
        animate={{
          top:[400,0]
        }}
        transition={{
          duration:0.6,
          delay:0.6,
          type:"spring"
        }}
          href="#contact"
          className=" relative z-10 mt-6 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-lg duration-100"
        >
          Contact Me
        </motion.a>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
