import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";
import Image from "next/image";

const montserrat = EB_Garamond({ weight: "800", subsets: ["latin"] });
const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const Hero = () => {
  return (
    <div className=" flex justify-evenly items-center  px-6 bg-gradient-to-br from-black via-[#000622] to-blue-800 text-white">
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="flex flex-col gap-8">
        <h1 className={cn("text-6xl max-w-md font-bold", montserrat.className)}>
          Make the most of your USDC
        </h1>
        <h3 className={cn(" text-lg max-w-md", subFont.className)}>
          Bankly dao is revolutionizing investing by changing how communities
          and capital work together through accessible, effortless, and social
          web3 technologies.
        </h3>

        <div>
          <Button className="bg-blue-600" size="lg">
            Get Started
          </Button>
        </div>
      </div>
      <div className=" ">
        <Image alt="hero" src="/hero.svg" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
