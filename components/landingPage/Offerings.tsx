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

interface OfferingCardProps {
  icon: string;
  title: string;
  description: string;
}

const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const subFont2 = EB_Garamond({ weight: "500", subsets: ["latin"] });
const Offerings = () => {
  return (
    <div className="bg-black text-white/90 py-8">
      <div className="items-center text-center ">
        <h1 className={cn(" text-4xl lg:text-6xl my-8 ", subFont.className)}>
          Community & Capital
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-4 gap-y-10  mx-6 my-24 ">
        {data1.map((item) => (
          <OfferingsCard
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

export default Offerings;

export const OfferingsCard = ({
  icon,
  title,
  description,
}: OfferingCardProps) => {
  return (
    <Card className="w-auto bg-[#0b0b27] text-white/90 border-none">
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
        <CardTitle className={cn("text-4xl", subFont2.className)}>
          {title}
        </CardTitle>
        <CardDescription className={cn("text-lg", subFont2.className)}>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
