import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";

const montserrat = EB_Garamond({ weight: "600", subsets: ["latin"] });

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
    name: "Investment clubs",
    link: "/clubs",
  },
  {
    name: "Governance",
    link: "/",
  },
];
const LandingNav = () => {
  return (
    <header className=" bg-black text-white">
      <div className="flex justify-between mx-6 py-6  items-center">
        <div className="flex items-center justify-between gap-14">
          <h1 className={cn("text-3xl ", montserrat.className)}>
            Piron Finance
          </h1>
          <div className="flex justify-between gap-8   ">
            {navOptions.map((item) => (
              <Link key={item.link} href={item.link}>
                <h3 className="text-muted-foreground font-light duration-700 hover:text-gray-200 hover:cursor-pointer ">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
        <Button className="bg-blue-600" size="lg">
          Launch App
        </Button>
      </div>
    </header>
  );
};

export default LandingNav;
