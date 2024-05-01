import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import SectionTitle from "@/components/SectionTitle";
import { Chip } from "@nextui-org/chip";

const Experience = () => (
  <section>
    <SectionTitle className="text-orange-500">Experience</SectionTitle>
    <Card className="p-4">
      <CardHeader className="flex-col items-start p-0">
        <div className="flex items-center gap-4">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://assets-global.website-files.com/64803fcf2c63890e8809f716/64803ffb08a7fb99893e38ea_Seriesfi%20Apple%20Icon.png"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-bold text-large">Series</h4>
            <p className="text-tiny uppercase font-bold">
              Senior Software Engineer
            </p>
            <small className="text-default-500">
              AUGUST 2023 - MARCH 2024 (Remote @ US)
            </small>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <div className="flex gap-1 py-2">
          <Chip size="sm">Typescript</Chip>
          <Chip size="sm">Node.js</Chip>
          <Chip size="sm">Nest.js</Chip>
          <Chip size="sm">React.js</Chip>
          <Chip size="sm">PostgreSQL</Chip>
          <Chip size="sm">Terraform</Chip>
        </div>
        AWS Series is an enterprise operating system that unifies your finances
        and operations. At Series I worked as a Software Engineer on both the
        backend (Nest.js) and frontend (React.js) of their suite of products.
      </CardBody>
    </Card>
  </section>
);

export default Experience;
