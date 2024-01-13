import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";

const garamond = EB_Garamond({ weight: "600", subsets: ["latin"] });

const navOptions = [
  {
    name: "Pools",
    link: "/pools",
  },
  {
    name: "Marketplace",
    link: "/marketplace",
  },
  {
    name: "Clubs",
    link: "/clubs",
  },
  {
    name: "Governance",
    link: "/",
  },
];

const DesktopNav = () => {
  return (
    <header className="">
      <div className="flex justify-between mx-6 py-4 md:py-6  items-center">
        <div className="flex items-center justify-between gap-20 lg:gap-14">
          <h1 className={cn("flex text-2xl md:text-3xl ", garamond.className)}>
            Piron Finance
          </h1>
          <div className="flex justify-between gap-8   ">
            {navOptions.map((item) => (
              <Link key={item.link} href={item.link}>
                <h3
                  className={cn(
                    " text-md duration-700 hover:text-gray-400 hover:cursor-pointer ",
                    garamond.className
                  )}
                >
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/pool">
          <Button className="hidden lg:flex bg-blue-600" size="lg">
            Launch App
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default DesktopNav;
