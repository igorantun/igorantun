"use client";

import { Chip } from "@nextui-org/chip";
import { Badge } from "@nextui-org/badge";
import { Image } from "@nextui-org/image";

import { CheckIcon } from "@/icons/Check";
import { BrazilIcon } from "@/icons/Brazil";

const Preview = () => {
  return (
    <div className="mt-16 border-2 w-fit h-fit">
      <div className="w-[1200px] h-[630px] flex items-center pl-16">
        <div className="flex items-center">
          <Badge
            shape="circle"
            variant="shadow"
            classNames={{ badge: "bg-[#009B3A] w-[96px]" }}
            placement="top-left"
            showOutline={false}
            content={<BrazilIcon size={64} />}
          >
            <Image
              width={512}
              height={512}
              radius="full"
              isBlurred={true}
              alt="Igor Antun"
              src="/images/profile.jpg"
            />
          </Badge>
        </div>
        <div className="ml-8">
          <p className=" font-bold font-mono text-4xl text-gray-500">
            @igorantun
          </p>
          <h1 className="-mt-12 font-serif font-bold text-[128px] underline decoration-green-400 decoration-8 decoration-wavy underline-offset-[18px]">
            Igor Antun
          </h1>
          <p className="md:mt-12 mb-2 text-6xl">
            Senior
            <br />
            Software Engineer
          </p>
          <Chip
            size="lg"
            variant="flat"
            color="success"
            startContent={<CheckIcon size={20} />}
            classNames={{ content: "font-bold uppercase text-xl" }}
          >
            Available for contracts
          </Chip>
        </div>
      </div>
    </div>
  );
};

export default Preview;
