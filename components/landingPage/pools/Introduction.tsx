import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Button } from "../../ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

interface IntroductionProps {
  title: string;
  description: string;
  icon?: any;
}

const data = [
  {
    title: "Financial Instruments Pools",
    description:
      "Explore diverse financial instruments within our pools, including a range of short-term and long-term assets, offering balanced risk and return profiles.",
    icon: "/club55.svg",
  },
  {
    title: "Real Estate Investment Pools",
    description:
      "Delve into the world of real estate with our investment pools, designed to provide substantial opportunities in residential and commercial properties.",
    icon: "/club9.svg",
  },
  {
    title: "Credit Pools",
    description:
      "Engage with our credit pools, offering unique opportunities to invest in credit-related assets, from personal loans to business financing solutions.",
    icon: "/club7.svg",
  },
  {
    title: "Project Financing Pools",
    description:
      "Participate in transformative ventures with our project financing pools, focusing on funding groundbreaking projects across various sectors.",
    icon: "/club6.svg",
  },
];

const Introduction = () => {
  return (
    <div className="flex flex-col bg-black text-white/90 px-6">
      <div className="py-16 text-center ">
        <h1 className={cn("text-5xl", garamond.className)}>
          Explore Diverse Investment Opportunities with Piron Finance&apos;s
          Liquidity Pools
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-4 gap-y-10  mx-6 my-24">
        {data.map((item) => (
          <IntroCards
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Introduction;

export const IntroCards = ({ title, description, icon }: IntroductionProps) => {
  return (
    <Card className="w-auto bg-black text-white/90 border-none">
      <CardContent className="flex   h-3/5">
        <Image
          className=" w-full "
          alt="card"
          width={240}
          height={240}
          src={icon}
        />
      </CardContent>
      <hr className="border-gray-600" />
      <CardHeader className="">
        <CardTitle className={cn("text-4xl", garamond.className)}>
          {title}
        </CardTitle>
        <CardDescription className={cn("text-lg", garamond.className)}>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
