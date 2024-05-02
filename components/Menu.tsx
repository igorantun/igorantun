"use client";

import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";

const colors: {
  [key: string]: string;
} = {
  about: "bg-green-500",
  experience: "bg-orange-500",
  projects: "bg-red-500",
  education: "bg-pink-500",
};

const Menu = () => {
  const [selected, setSelected] = useState("about");
  const color = selected in colors ? colors[selected] : "default";

  return (
    <div className="hidden md:block flex-grow ml-auto px-16">
      <Tabs
        size="lg"
        isVertical
        variant="underlined"
        selectedKey={selected}
        onSelectionChange={(key: any) => setSelected(key)}
        classNames={{
          tab: "justify-end",
          cursor: `w-full ${color}`,
        }}
      >
        <Tab key="about" title={<Link href="#about">About</Link>} />
        <Tab
          key="experience"
          title={<Link href="#experience">Experience</Link>}
        />
        <Tab key="projects" title={<Link href="#projects">Projects</Link>} />
        <Tab key="education" title={<Link href="#education">Education</Link>} />
      </Tabs>
    </div>
  );
};

export default Menu;
