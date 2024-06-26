import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const ExperienceCard = ({
  logo,
  slug,
  title,
  role,
  date,
  location,
  description,
  skills,
}: {
  logo: string;
  slug: string;
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
}) => (
  <Card id={slug} className="p-4 border-experience/50 border-2" shadow="sm">
    <CardHeader className="flex-col items-start p-0">
      <div className="flex items-center gap-4">
        <Avatar
          size="md"
          src={logo}
          isBordered
          radius="full"
          className="ring-experience"
        />
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-xs uppercase font-bold">{role}</p>
          <p className="text-xs text-default-500">
            {date} ({location})
          </p>
        </div>
      </div>
    </CardHeader>
    <CardBody className="overflow-visible p-0">
      <div className="flex gap-1 py-2">
        {skills.map((skill) => (
          <Chip key={skill} size="sm" className={`font-mono bg-experience/75`}>
            {skill}
          </Chip>
        ))}
      </div>
      {description}
    </CardBody>
  </Card>
);

export default ExperienceCard;
