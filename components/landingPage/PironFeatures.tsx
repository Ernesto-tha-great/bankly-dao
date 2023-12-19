"use client";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
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

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.1 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

const PironFeatures = () => {
  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  // }, [control, inView]);
  return (
    <div
      // ref={ref}
      // variants={boxVariant}
      // initial="hidden"
      // animate={control}
      className="flex flex-col bg-black text-white/90 py-20 px-4"
    >
      <div className="text-center">
        <h1 className={cn(" text-4xl lg:text-5xl", subFont.className)}>
          Explore DeFi for the real world
        </h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6  mx-16 m-16 ">
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
    <div
      className={cn(
        "w-auto m-4  p-8 rounded-lg border border-blue-950 md:border-none   hover:bg-blue-900 transition translate-y-1 duration-150 animate-in"
      )}
    >
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
