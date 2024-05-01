"use client";

import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";

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
    <div className="self-start">
      <Tabs
        size="lg"
        isVertical
        variant="underlined"
        selectedKey={selected}
        onSelectionChange={(key: any) => setSelected(key)}
        classNames={{
          tab: "justify-start",
          cursor: `w-full ${color}`,
        }}
      >
        <Tab key="about" title="About" />
        <Tab key="experience" title="Experience" />
        <Tab key="projects" title="Projects" />
        <Tab key="education" title="Education" />
      </Tabs>
    </div>
  );
};

export default Menu;
