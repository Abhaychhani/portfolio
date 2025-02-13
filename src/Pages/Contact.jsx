import React from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <section
      id="contact"
      className={
        theme === "light"
          ? "p-10 text-center bg-gray-100"
          : "p-10 text-center bg-gray-950"
      }
    >
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-4">Email: abhaychhani@gmail.com</p>
      <p className="mt-2">LinkedIn | GitHub | Twitter</p>
    </section>
  );
};

export default Contact;
