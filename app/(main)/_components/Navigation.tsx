import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const NavItems = [
  {
    name: "Pools",
    icon: "",
    link: "/pool",
  },
  {
    name: "Clubs",
    icon: "",
    link: "/club",
  },
  {
    name: "Marketplace",
    icon: "",
    link: "/marketplace",
  },
  {
    name: "Governance",
    icon: "",
    link: "/governance",
  },
];

const Navigation = () => {
  return (
    <>
      <aside
        className={cn(
          "flex flex-col pl-5 group/sidebar h-screen bg-[#ffffff] overflow-y-auto w-[232px] z-[99999] "
        )}
      >
        <div className="mt-4">
          <Image src="/Frame 36.svg" alt="logo" width={86} height={37} />
        </div>

        <div></div>
      </aside>
    </>
  );
};

export default Navigation;
