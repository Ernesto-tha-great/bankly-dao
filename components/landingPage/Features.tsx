import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";

const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const Features = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="py-16 text-center">
        <h1 className={cn("text-6xl", subFont.className)}>
          Piron for those who are shaping the future
        </h1>
      </div>

      <div className="">
        <div className="grid grid-cols-2 gap-4  mx-16 my-16 ">
          <div className="flex flex-col items-start justify-start gap-4 border  rounded-lg p-6 hover:bg-slate-900 transition hover:translate-x-1 ">
            <h1 className={cn("text-4xl", subFont.className)}>For Investors</h1>
            <h3 className={cn("text-2xl", subFont.className)}>
              Invest in a diverse range of financial and real-world assets
            </h3>
            <Button className={cn("mt-4 self-end text-lg", subFont.className)}>
              Learn More{" "}
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 border rounded-lg p-6">
            <h1 className={cn("text-4xl", subFont.className)}>
              For Asset Originators
            </h1>
            <h3 className={cn("text-2xl", subFont.className)}>
              Raise capital by tokenizing your assets
            </h3>
            <Button className={cn("mt-4 self-end text-lg", subFont.className)}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
