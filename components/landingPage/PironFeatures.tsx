import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { data2 } from "@/app/(landing)/constants/dummy";

const subFont = EB_Garamond({ weight: "500", subsets: ["latin"] });
const subFont2 = EB_Garamond({ weight: "400", subsets: ["latin"] });

interface OfferingCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

const PironFeatures = () => {
  return (
    <div className="flex flex-col bg-black text-white/90 py-20">
      <div className="text-center">
        <h1 className={cn("text-5xl", subFont.className)}>
          Explore DeFi for the real world
        </h1>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-6  mx-16 m-16 ">
          {data2.map((item) => (
            <PironFeaturesCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PironFeatures;

export const PironFeaturesCard = ({
  icon,
  title,
  description,
  buttonText,
}: OfferingCardProps) => {
  return (
    <div className="m-4 border border-blue-950 p-8 rounded-lg  hover:bg-blue-900 transition translate-y-1 duration-150  ">
      <div className="space-y-8 ">
        <h1 className={cn("text-2xl", subFont.className)}>{title}</h1>

        <h3 className={cn("font-thin")}>{description}</h3>
        <Button
          variant="outline"
          size="lg"
          className={cn("mt-4 text-lg", subFont.className)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
