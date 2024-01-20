import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Controls = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Image src="/smallCheck.svg" width={20} alt="icon" height={20} />
        <Image src="/grid.svg" width={20} alt="icon2" height={20} />

        <div className="flex items-center gap-2">
          <Switch />
          <h2 className="text-[#494d53]">My portfolio only</h2>
        </div>
      </div>

      <div className="flex items-center gap-5 mx-10">
        <SearchBar />
        <Select>
          <SelectTrigger className="w-[128px] rounded-full bg-transparent border-[#8797A7]">
            <SelectValue className="text-[#292D32]" placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Controls;

export const SearchBar = () => {
  return (
    <div className="flex items-center justify-start border border-[#8797A7] rounded-full pl-4   ">
      <Search className="h-5 w-5 text-gray-400" />
      <Input
        className=" bg-transparent border-none focus:ring-0 md:w-48 w-full"
        placeholder="Search Pools"
        type="search"
      />
    </div>
  );
};
