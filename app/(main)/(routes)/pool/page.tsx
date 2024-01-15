import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./_components/Navbar";
import { url } from "inspector";
import Controls from "./_components/Controls";

const PoolPage = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-[#FBF7FF] pl-12  to-[#E4CCFF] ">
      <Navbar />

      <div>
        <p className="font-light text-[#292D32] max-w-sm">
          Build your wealth effortlessly with leading rates on our available
          commercial papers and other assets.
        </p>

        <div className="my-20 flex items-center justify-between">
          <div
            style={{
              backgroundImage: `url("/card11.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "right",
              width: "100%",
              height: "220px",
            }}
            className="p-8  bg-white rounded-2xl shadow-xl max-w-xl"
          >
            <h4 className="text-[#292D32] text-sm font-md">
              Total value locked (TVL)
            </h4>
            <h1 className="text-2xl text-[#292D32] font-medium">
              80,321,500 USD
            </h1>
          </div>

          <div
            style={{
              backgroundImage: `url("/card12.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "right",
              width: "100%",
              height: "220px",
            }}
            className="mx-10 p-8  bg-white rounded-2xl shadow-xl max-w-xl "
          >
            <p className="max-w-xs text-sm font-light text-[#292D32] ">
              Pools on Piron Finance allows you to earn yields from real world
              assets
            </p>
            <Button size="lg" className="mt-6 rounded-full bg-[#1AAFBF] px-12">
              Get Started
            </Button>
          </div>
        </div>

        <div className="my-4">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default PoolPage;
