import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { Divider } from "@nextui-org/divider";

import { CheckIcon } from "@/icons/Check";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const NameAndTitle = () => (
  <div>
    <p className="font-mono text-gray-500">@igorantun</p>
    <h1 className="font-serif font-bold text-4xl/6 underline decoration-green-400 decoration-2 decoration-wavy underline-offset-4">
      Igor Antun
    </h1>
    <Spacer y={4} />
    <p className="text-xl">Senior Software Engineer</p>
  </div>
);

const Information = () => (
  <div>
    <NameAndTitle />
    <div className="flex gap-2">
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
  </div>
);

const Profile = () => (
  <div className="flex justify-center md:justify-start items-center space-x-4">
    <Image
      width={128}
      height={128}
      radius="full"
      loading="lazy"
      isBlurred={true}
      alt="Igor Antun"
      src="/images/profile.jpg"
    />
    <Divider className="h-24" orientation="vertical" />
    <Information />
  </div>
);

export default Profile;
