"use client";

import { useDebounce } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

import { Tabs, Tab } from "@nextui-org/tabs";

const sections = ["about", "experience", "projects"].reverse();

const Menu = () => {
  const [selected, setSelected] = useState("about");
  const [currentSection, setCurrentSection] = useState("about");
  const debouncedSection = useDebounce(currentSection, 300);

  useEffect(() => {
    const scrollElement = document.getElementById("scroll");

    const checkPosition = () => {
      console.log(Date.now());
      for (const section of sections) {
        const offset = document
          .querySelector(`#${section}`)
          ?.getBoundingClientRect().top;

        console.log(offset, section);
        if (offset !== undefined && offset <= window.innerHeight / 3) {
          console.log(section);
          setCurrentSection(section);
          break;
        }
      }
    };

    scrollElement?.addEventListener("scroll", checkPosition);
    checkPosition();
    return () => scrollElement?.removeEventListener("scroll", checkPosition);
  }, []);

  useEffect(() => {
    setSelected(debouncedSection);
  }, [debouncedSection]);

  return (
    <div className="hidden md:block px-16">
      <Tabs
        size="lg"
        isVertical
        variant="underlined"
        selectedKey={selected}
        onSelectionChange={(key: any) => setSelected(key)}
        classNames={{
          cursor: `w-full bg-${selected}`,
        }}
      >
        <Tab href="#about" key="about" title="About" />
        <Tab href="#experience" key="experience" title="Experience" />
        <Tab href="#projects" key="projects" title="Projects" />
        <Tab href="#education" key="education" title="Education" />
      </Tabs>
    </div>
  );
};

export default Menu;
