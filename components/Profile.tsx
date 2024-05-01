import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Badge } from "@nextui-org/badge";
import { Spacer } from "@nextui-org/spacer";

import { CheckIcon } from "@/icons/Check";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { BrazilIcon } from "@/icons/Brazil";

const NameAndTitle = () => (
  <div>
    <h1 className="mt-2 text-center font-serif font-bold text-4xl/6 underline decoration-green-400 decoration-2 decoration-wavy underline-offset-4">
      Igor Antun
    </h1>
    <p className="mt-2 text-center font-mono text-gray-500">@igorantun</p>
    <p className="md:mt-2 text-center text-xl">Senior Software Engineer</p>
  </div>
);

const Badges = () => (
  <div className="flex justify-center gap-2">
    <Chip
      size="sm"
      variant="flat"
      color="success"
      startContent={<CheckIcon size={18} />}
      classNames={{ content: "font-bold uppercase" }}
    >
      Available for hire
    </Chip>
    <ThemeSwitcher />
  </div>
);

const Profile = () => (
  <div className="flex flex-col justify-center items-center">
    <Badge
      shape="circle"
      variant="shadow"
      classNames={{ badge: "bg-green-600" }}
      placement="top-left"
      showOutline={false}
      content={<BrazilIcon />}
    >
      <Image
        width={128}
        height={128}
        radius="full"
        isBlurred={true}
        alt="Igor Antun"
        src="/images/profile.jpg"
      />
    </Badge>
    <NameAndTitle />
    <Badges />
  </div>
);

export default Profile;
