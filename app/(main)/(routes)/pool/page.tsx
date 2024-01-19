import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./_components/Navbar";
import { url } from "inspector";
import Controls from "./_components/Controls";
import { ChevronsUpDown, FilterX } from "lucide-react";
import PoolCard from "./_components/PoolCard";
import { data1 } from "./_components/dummy";

const PoolPage = () => {
  return (
    <div className="flex flex-col h-screen  ">
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

          {/* <div
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
          </div> */}
        </div>

        <div className="my-4">
          <Controls />
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-16">
        <div className="flex items-center justify-between mx-20 font-medium text-[#5A6675]">
          <div>
            <h3>Pool Name</h3>
          </div>
          <div className="flex items-center justify-between mr-6 w-2/3">
            <h3 className="inline-flex gap-1">
              Asset Class
              <FilterX className="h-5 w-5 text-gray-400" />
            </h3>
            <h3 className="inline-flex gap-1">
              Value Locked
              <ChevronsUpDown className="h-5 w-5 text-gray-400" />
            </h3>
            <h3 className="inline-flex gap-1">
              APR
              <ChevronsUpDown className="h-5 w-5 text-gray-400" />
            </h3>
            <h3 className="inline-flex gap-1">
              Status
              <FilterX className="h-5 w-5 text-gray-400" />
            </h3>
          </div>
        </div>

        <div className="flex flex-col overflow-scroll px-2">
          {data1.map((item, index) => (
            <PoolCard
              key={index}
              name={item.name}
              assetClass={item.assetClass}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoolPage;
