"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Icon from "./Icon";

const NavItems = [
  {
    name: "Pools",
    icon: "/pool2Icon.svg",
    link: "/pool",
  },
  {
    name: "Clubs",
    icon: "/clubIcon.png",
    link: "/club",
  },
  {
    name: "Marketplace",
    icon: "/marketIcon.svg",
    link: "/marketplace",
  },
  {
    name: "Governance",
    icon: "/govIcon.svg",
    link: "/governance",
  },
];

const Navigation = () => {
  const route = window.location.pathname;

  const isActive = (href: string) => route === href;

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

        <div className="flex flex-col  gap-5 mt-24 items-start ">
          {NavItems.map((item) => (
            <div
              key={item.name}
              className={cn(
                "w-[200px] group/sidebar p-3 rounded-full ",
                isActive(item.link) ? "bg-[#D7F2F0]" : "hover:bg-[#D7F2F0]"
              )}
            >
              <div className="flex items-center gap-4 pl-4">
                <Image
                  src={item.icon}
                  alt="logo"
                  color=""
                  width={18}
                  height={18}
                />
                <span
                  className={cn(
                    "text-[#292D32] text-lg font-light",
                    isActive(item.link) && "text-green-600 font-normal"
                  )}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navigation;
