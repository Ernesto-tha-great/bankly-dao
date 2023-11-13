import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className=" flex flex-col items-center py-12 space-y-12 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-950 to-blue-950   text-white/90">
      <div className="my-12">
        <h1 className={cn("text-6xl text-center ", garamond.className)}>
          Empower Your Financial Portfolio with Decentralized Investment Pools.
        </h1>
      </div>
      <div>
        <h3 className={cn("text-3xl font-thin text-center max-w-2xl ")}>
          Explore a New World of Asset-Backed Investment Opportunities,
          Seamlessly Powered by Piron.
        </h3>
      </div>
      <div className="flex space-x-10">
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent text-white/90 border-gray-200  rounded-xl"
        >
          View Demo
          <ArrowUpRight className="inline ml-2" size={24} />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent text-white/90 border-gray-200  rounded-xl"
        >
          Read Docs
          <ArrowUpRight className="inline ml-2" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
