import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";
import { Chip } from "@nextui-org/chip";

import { CheckIcon } from "@/icons/Check";

const Title = () => (
  <div>
    <h1 className="font-serif font-bold text-4xl/8">Igor Antun</h1>
    <p className="font-mono text-gray-500">@igorantun</p>
    <Spacer y={2} />
    <p className="text-base">Senior Software Engineer</p>
    <Chip
      startContent={<CheckIcon size={18} />}
      size="sm"
      color="success"
      variant="flat"
      classNames={{ content: "font-bold uppercase" }}
    >
      Available for hire
    </Chip>
  </div>
);

const Profile = () => (
  <div className="flex h-24 items-center space-x-4">
    <Image
      width={128}
      height={128}
      radius="full"
      loading="lazy"
      isBlurred={true}
      alt="Igor Antun"
      src="/images/profile.jpg"
    />
    <Divider orientation="vertical" />
    <Title />
  </div>
);

export default Profile;
