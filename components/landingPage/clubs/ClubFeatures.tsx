import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

interface ClubFeaturesProps {
  heading: string;
  description: string;
  image: string;
}

const features = [
  {
    heading: "Investments in on-chain and off-chain assets",
    description:
      "Invest in tokens and NFTs- as well as startups(via a legal entity). Never manually track investments or trades on spreadsheet again. Our dashboard manages investments, members and more in real time.",
    image: "/feat2.svg",
  },
  {
    heading: "Legal doc generation and web3 signing",
    description:
      "Generate and sign legal documents for youyr club with a few clicks. This is built with incollaboration with Ada and partners. Easily generate, send, and collect signed legal docs via our app. ",
    image: "/feat2.svg",
  },
  {
    heading: "Mirrortables and mirrorshares ",
    description:
      "Forget manually tracking deposits and cap tables via surveys and spreadsheets. Each club has a mirror table and mirror sharespowered by ERC-20 infrastructure that is fully composable with web3.  ",
    image: "/feat2.svg",
  },
  {
    heading: "Off-chain investment memos and metadata ",
    description:
      "With piron finance, you can record investments into off-chain assets(eg startup equity, SAFEs) and attach off-chain memos, metadata and links making piron finance a powerful tool for off-chain venture investing.   ",
    image: "/feat2.svg",
  },
  {
    heading: "Deposits in Stable tokens ",
    description:
      "Create an investment club denominated in USDC, USDT or DAI. Whether its for investing, giving grants, funding public goods, or more. ",
    image: "/feat2.svg",
  },
  {
    heading: "Legal entities, bank accounts, tax filings",
    description:
      "We have partnered with doola to enable clubs on piron to create legal entities, get EINs, open fiat bank accounts, submit state compliance filings and issue k-1s tax form easily and affordably ",
    image: "/feat2.svg",
  },
];

const ClubFeatures = () => {
  return (
    <div className="bg-black text-white/90">
      <div className="items-center text-center ">
        <h1 className={cn(" text-4xl lg:text-5xl py-8 ", garamond.className)}>
          Powerful investing tools, right out of the box
        </h1>
      </div>
      <div className="mx-6 grid grid-cols-3 gap-8 py-20">
        {features.map((feature) => (
          <ClubFeaturesCard
            key={feature.heading}
            heading={feature.heading}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ClubFeatures;

export const ClubFeaturesCard = ({
  heading,
  description,
  image,
}: ClubFeaturesProps) => {
  return (
    <div className="flex flex-col space-y-8 max-w-md items-center">
      <div className="h-1/2 ">
        <Image
          className="w-96 h-full object-contain"
          width={40}
          height={10}
          src={image}
          alt=""
        />
      </div>
      <div className=" h-1/2 flex flex-col">
        <div className="border-t border-blue-950  py-2"></div>
        <h2 className={cn("text-2xl", garamond.className)}>{heading}</h2>
        <h3 className={cn("text-md text-gray-400", garamond.className)}>
          {description}
        </h3>
      </div>
    </div>
  );
};
