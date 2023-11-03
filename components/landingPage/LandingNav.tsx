import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";

const montserrat = EB_Garamond({ weight: "600", subsets: ["latin"] });
const LandingNav = () => {
  return (
    <header className=" bg-black text-white sticky">
      <div className="flex justify-between mx-6 py-6  items-center">
        <div className="flex items-center justify-between gap-14">
          <h1 className={cn("text-3xl ", montserrat.className)}>
            Piron Finance
          </h1>
          <div className="flex justify-between gap-8  ">
            <h3 className="text-muted-foreground font-light">Docs</h3>
            <h3 className="text-muted-foreground font-light">Community</h3>
            <h3 className="text-muted-foreground font-light">Governance</h3>
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
