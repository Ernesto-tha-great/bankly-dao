import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Wallet2, Lock, Link, TrendingUp, Check } from "lucide-react";
import Image from "next/image";

interface StepProps {
  title: string;
  heading: string;
  description: string;
  image: string;
  no: number;
}

const steps = [
  {
    title: "Select an Investment Pool",
    heading: "Choose Your Investment Path",
    description:
      "Browse and choose from a diverse range of asset-backed pools, including financial instruments, real estate, credit, and project financing.",
    image: "/club11.svg",
  },
  {
    title: "Make Your Investment",
    heading: "Invest with Ease ",
    description:
      "After selecting a pool, invest seamlessly using stablecoins or other accepted forms of payment, enjoying a straightforward and secure transaction process. You can also choose to invest in multiple pools to diversify your portfolio.",
    image: "/club1.svg",
  },
  {
    title: "Receive Piron Shares",
    heading: "Receive Your Digital Ownership Token",
    description:
      "Upon investment, you'll receive a blockchain-based digital token, symbolizing your stake and providing transparent details of your investment. ",
    image: "/club22.svg",
  },
  {
    title: "Track and Manage Your Investments",
    heading: "Monitor Your Growth",
    description:
      "Easily keep track of your investment's performance through our platform, accessing real-time updates and managing your portfolio efficiently.",
    image: "/club4.svg",
  },
];

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

const HowItWorks = () => {
  return (
    <section className="bg-black  text-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className={cn("text-5xl text-center mb-16", garamond.className)}>
          How Investment Pools Work
        </h2>
        <div className="space-y-10 space-x-24 lg:space-y-16 lg:gap-10 lg:grid lg:grid-cols-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center  gap-24  `}
            >
              <div className="w-1/2">
                <StepCard
                  title={step.title}
                  heading={step.heading}
                  description={step.description}
                  image={step.image}
                  no={index + 1}
                />
              </div>

              <div className="p-8 w-1/2">
                <Image
                  src={step.image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

export const StepCard = ({
  title,
  heading,
  description,
  no,
  image,
}: StepProps) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h3 className={cn("text-blue-600 text-sm ", garamond.className)}>
        {no} / {title.toUpperCase()}
      </h3>
      <h2 className={cn("text-3xl", garamond.className)}>{heading}</h2>
      <p className={cn(" text-gray-400", garamond.className)}>{description}</p>
    </div>
  );
};
