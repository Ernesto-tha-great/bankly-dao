import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import { Wallet2, Lock, Link, TrendingUp, Check } from "lucide-react";

interface StepProps {
  title: string;
  heading: string;
  description: string;
  image: string;
  no: number;
}

interface IllustrationProps {
  num: number;
}
const steps = [
  {
    title: "Create",
    heading: "Easily transform any wallet into an investment club",
    description:
      "Connect your wallet and launch an Investment club in a few clicks just for the cost of gas. Create a club for your friends, family, or community.",
    image: "/feat1.svg",
  },
  {
    title: "Invite | Deposit",
    heading: "Send a link to  to accept deposits from members ",
    description:
      "Ready to bring everyone onboard? Send members a link to easily deposit(and receive piron shares) into your club. ",
    image: "/feat2.svg",
  },
  {
    title: "Manage",
    heading: "Manage everything - Investments, members and more - together ",
    description:
      "Never manually track investments or trades on spreadsheet again. Our dashboard manages investments, members and more in real time. ",
    image: "/feat3.svg",
  },
];

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-black to-gray-950  text-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className={cn("text-5xl text-center mb-16", garamond.className)}>
          How Investment Clubs Work
        </h2>
        <div className="space-y-10 space-x-24 lg:space-y-16 lg:gap-10 lg:grid lg:grid-cols-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center  gap-24 mb-10 `}
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
                {index === 0 ? (
                  <IllustrationCard1 />
                ) : index === 1 ? (
                  <IllustrationCard2 />
                ) : (
                  <IllustrationCard3 />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

export const IllustrationCard1 = () => {
  return (
    <div className="flex flex-col bg-gray-300/5  px-6 py-8 rounded-2xl ">
      <div className=" self-end border border-blue-950 p-2 rounded-full">
        <h3
          className={cn("flex text-gray-300 items-center", garamond.className)}
        >
          {" "}
          <Wallet2 className=" text-sm inline mr-2 text-blue-950" />{" "}
          0x555my....wallet
        </h3>
      </div>
      <div className="flex flex-col space-y-8">
        <div>
          <h3 className={cn("text-gray-400", garamond.className)}>Club name</h3>
          <h3 className={cn("text-gray-300", garamond.className)}>
            Web3 Afrika
          </h3>
        </div>
        <div>
          <h3 className={cn("text-gray-400", garamond.className)}>Raising</h3>
          <h3 className={cn("text-gray-300", garamond.className)}>
            100,000 USDC
          </h3>
        </div>
        <div>
          <h3 className={cn("text-gray-400", garamond.className)}>Members</h3>
          <h3 className={cn("text-gray-300", garamond.className)}>3000</h3>
        </div>
      </div>
    </div>
  );
};

export const IllustrationCard2 = () => {
  return (
    <div className="flex flex-col bg-gray-300/5 px-6 py-20 rounded-2xl">
      <div className="flex justify-between p-4 items-center border border-blue-950 rounded-full">
        <div className="flex items-center">
          <Lock size="18" className="inline mr-2 text-blue-950" />
          <h3 className={cn("text-sm text-gray-500")}>
            https://pironfinance.co/club/..
          </h3>
        </div>
        <div className="flex items-center p-2 bg-blue-800 rounded-full text-gray-950">
          <Link size="18" className="inline mr-1" />
          <h3 className="text-sm ">Invite</h3>
        </div>
      </div>
    </div>
  );
};
export const IllustrationCard3 = ({}) => {
  return (
    <div className="flex flex-col bg-gray-300/5 text-gray-300 px-6 py-8 rounded-2xl">
      <div className=" flex self-center  border border-blue-950 p-2 max-w-xs rounded-full">
        <div className="flex bg-blue-900 items-center ml-0 mr-3  p-1 rounded-2xl">
          <TrendingUp size="24" className=" text-sm inline   " />{" "}
        </div>
        <div className="flex items-center justify-center space-x-3 w-4/5  mr-16">
          <h3 className={cn("text-sm ", garamond.className)}> 6.83 ETH</h3>
          <h3 className={cn("text-gray-500 text-sm", garamond.className)}>
            {" "}
            sent to
          </h3>
          <h3 className={cn("text-sm", garamond.className)}> 0x99...rt78</h3>
        </div>
      </div>

      <div className="flex flex-col mt-8 space-y-12">
        <div className="flex  items-center justify-between">
          <h3 className={cn("text-gray-400", garamond.className)}>Category</h3>
          <div className="flex items-center border border-blue-950 rounded-full p-2 space-x-1">
            <TrendingUp
              size="24"
              className=" text-sm inline mr-2 bg-blue-900 p-1 rounded-2xl"
            />
            <h3 className={cn("", garamond.className)}>Investment</h3>
            <Check size="18" className=" text-sm inline mr-2 text-blue-600" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h3 className={cn("text-gray-400", garamond.className)}>Note</h3>
          <h3 className={cn("", garamond.className)}>
            Seed investment for Korede Homes ltd{" "}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <h3 className={cn("text-gray-400", garamond.className)}>Round</h3>
          <h3 className={cn("", garamond.className)}>Seed</h3>
        </div>

        <div className="flex items-center justify-between">
          <h3 className={cn("text-gray-400", garamond.className)}>
            Equity stake
          </h3>
          <h3 className={cn("", garamond.className)}>67%</h3>
        </div>
      </div>
    </div>
  );
};

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
