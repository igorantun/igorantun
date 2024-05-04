"use client";

import { useEffect, useState } from "react";

import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const ProjectCard = ({
  slug,
  title,
  description,
  skills,
}: {
  slug: string;
  title: string;
  description: string;
  skills: string[];
}) => {
  const [data, setData] = useState({
    stargazers_count: 0,
    forks_count: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/repos/igorantun/${slug}`,
      );

      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <Card className="p-4" shadow="sm">
      <CardHeader className="flex-col items-start p-0">
        <div className="flex items-center gap-4">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-xs uppercase font-bold">
              {data.stargazers_count} Stars & {data.forks_count} Forks
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <div className="flex gap-1 py-2">
          {skills.map((skill) => (
            <Chip key={skill} size="sm" className={`font-mono bg-projects/75`}>
              {skill}
            </Chip>
          ))}
        </div>
        {description}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
