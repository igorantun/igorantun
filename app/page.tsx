"use client";

import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Colors = () => (
  <span>
    <span className="hidden aria-hidden text-about bg-about decoration-about">
      .
    </span>
    <span className="hidden aria-hidden text-experience bg-experience decoration-experience">
      .
    </span>
    <span className="hidden aria-hidden text-projects bg-projects decoration-projects">
      .
    </span>
    <span className="hidden aria-hidden text-education bg-education decoration-education">
      .
    </span>
  </span>
);

const Home = () => (
  <div className="flex flex-col md:flex-row justify-between">
    <div className="md:w-2/5 md:sticky top-0 pt-6 md:py-16 md:h-[100vh]">
      <Sidebar />
    </div>
    <div className="md:w-3/5 pb-6 md:pb-16 flex flex-col">
      <About />
      <Experience />
      <Projects />
      <Colors />
    </div>
  </div>
);

export default Home;
