"use client";

import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";

const Menu = () => {
  const [selected, setSelected] = useState("about");

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
          cursor: `w-full bg-${selected}`,
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
