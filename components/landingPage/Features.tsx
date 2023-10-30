import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { data1 } from "@/app/(landing)/constants/dummy";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const Features = () => {
  return (
    <div className="bg-black  text-white py-8">
      <div className="items-center text-center ">
        <h1 className={cn("text-6xl my-8 ", subFont.className)}>
          Community & Capital
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10  mx-6 my-24 ">
        {data1.map((item) => (
          <FeaturesCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;

export const FeaturesCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <Card className="w-[530px] bg-[#0e0e10] text-white border-none">
      <CardContent className="flex h-3/5">
        <Image
          className=" w-4/5 "
          alt="card"
          width={240}
          height={240}
          src={icon}
        />
      </CardContent>
      <CardHeader className="">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
