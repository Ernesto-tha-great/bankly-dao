import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Controls = () => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Controls;

export const SearchBar = () => {
  return (
    <div className="flex items-center justify-start bg-white rounded-full pl-4 py-0  ">
      <Search className="h-5 w-5 text-gray-400" />
      <Input
        className=" bg-transparent border-none focus:ring-0 md:w-48 w-full"
        placeholder="Search"
        type="search"
      />
    </div>
  );
};
