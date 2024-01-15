import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-10 items-center justify-between ">
      <div>
        <h1 className="text-[32px] font-semibold text-[#292D32] ">Pools</h1>
      </div>
      <div>
        <Button className="rounded-full mx-10 bg-[#1AAFBF] " size="lg">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
