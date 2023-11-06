"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

const routes = [
  {
    label: "Pools",
    icon: ArrowUpRight,
    href: "/pools",
    color: "text-sky-500",
  },
  {
    label: "Marketplace",
    icon: ArrowUpRight,
    href: "/marketplace",
    color: "text-violet-500",
  },
  {
    label: "Clubs",
    icon: ArrowUpRight,
    href: "/clubs",
    color: "text-pink-700",
  },
  {
    label: "Governance",
    icon: ArrowUpRight,
    href: "/",
    color: "text-orange-400",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-bl from-black  via-blue-950 via-10%  to to-black text-white ">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8  mr-4">
            <Image className="" fill src="/contract.svg" alt="logo" />
          </div>
          <h1 className={cn("text-3xl", garamond.className)}>Piron Finance</h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div
                className={cn(
                  "flex items-center flex-1 text-lg",
                  garamond.className
                )}
              >
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
