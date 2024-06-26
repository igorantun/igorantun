"use client";

import { useEffect, useState } from "react";

import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { GitHubIcon } from "@/icons/GitHub";

const ProjectCard = ({
  slug,
  title,
  description,
  skills,
  fallbackStars,
  fallbackForks,
}: {
  slug: string;
  title: string;
  description: string;
  skills: string[];
  fallbackStars: number;
  fallbackForks: number;
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
    <Card id={slug} className="p-4 border-projects/50 border-2" shadow="sm">
      <CardHeader className="flex-col items-start p-0">
        <div className="flex items-center gap-4">
          <Avatar
            size="md"
            isBordered
            radius="full"
            className="ring-projects bg-white"
            showFallback
            fallback={<GitHubIcon size={36} />}
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-xs uppercase font-bold">
              {data.stargazers_count || fallbackStars} Stars &{" "}
              {data.forks_count || fallbackForks} Forks
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
