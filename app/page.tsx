"use client";

import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";

const Colors = () => (
  <span>
    <span className="hidden aria-hidden text-about bg-about">.</span>
    <span className="hidden aria-hidden text-experience bg-experience">.</span>
    <span className="hidden aria-hidden text-projects bg-projects">.</span>
    <span className="hidden aria-hidden text-education bg-education">.</span>
  </span>
);

const Home = () => (
  <div className="flex flex-col md:flex-row justify-between">
    <div className="md:w-2/5 md:sticky top-0 pt-6 md:pt-16 h-full">
      <Sidebar />
    </div>
    <div className="md:w-3/5 flex flex-col">
      <About />
      <Experience />
      <Colors />
    </div>
  </div>
);

export default Home;
