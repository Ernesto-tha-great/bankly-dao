import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  assetClass: string;
  value: string;
}

const PoolCard = ({ name, assetClass, value }: Props) => {
  return (
    <div className="flex items-center justify-betwen mx-12 my-2 shadow-sm p-4 box-border bg-white rounded-xl hover:shadow-lg hover:cursor-pointer">
      <div className="flex items-center gap-7 w-1/3">
        <Image
          src="/club22.svg"
          className="rounded-lg"
          width={48}
          alt="icon"
          height={48}
        />
        <h1 className="font-medium text-[#292D32]">{name}</h1>
      </div>

      <div className="flex w-2/3 items-center justify-between gap-8">
        <h2 className="text-[#6E7F93]">{assetClass}</h2>
        <h2 className="  text-[#2d3136]">
          NGN
          {value}
        </h2>
        <h2 className="font-medium">5.0%</h2>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full border-[#6E7F93] text-[#6E7F93]"
        >
          Coming soon
        </Button>
      </div>
    </div>
  );
};

export default PoolCard;
