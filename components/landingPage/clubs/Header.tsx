import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div className=" flex flex-col items-center py-12 space-y-12 bg-gradient-to-br from-black to-gray-900  text-white/90">
      <div className="my-12">
        <h1 className={cn("text-6xl ", garamond.className)}>
          Join an Investment Club - Collaborate, Invest, Grow.
        </h1>
      </div>
      <div>
        <h3 className={cn("text-3xl font-thin text-center max-w-2xl ")}>
          Discover the power of collective investment. Team up with peers, share
          insights, and amplify your investment portfolio.
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

export default Header;
