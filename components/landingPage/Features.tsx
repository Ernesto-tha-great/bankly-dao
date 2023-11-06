import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";

const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const Features = () => {
  return (
    <div className="bg-gradient-to-bl px-4 from-black  via-blue-950/100 via-5%  to to-black text-white/90 py-6 border-t border-blue-950/80">
      <div className="py-16 text-center">
        <h1 className={cn(" text-4xl lg:text-6xl", subFont.className)}>
          Piron for those who are shaping the future
        </h1>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mx-16 my-16 ">
          <div className="flex flex-col items-start justify-start gap-4 border border-gray-400  rounded-lg p-6 hover:bg-slate-700 transition duration-150 hover:translate-x-1 ">
            <h1 className={cn("text-4xl", subFont.className)}>For Investors</h1>
            <h3 className={cn("text-2xl", subFont.className)}>
              Invest in a diverse range of financial and real-world assets
            </h3>
            <Button
              size="lg"
              variant="secondary"
              className={cn(
                "mt-4 self-end text-lg hover:bg-blue-600 hover:text-white",
                subFont.className
              )}
            >
              Learn More{" "}
            </Button>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 border border-gray-400 rounded-lg p-6 hover:bg-slate-700 transition duration-150 hover:translate-x-1 ">
            <h1 className={cn("text-4xl", subFont.className)}>
              For Asset Originators
            </h1>
            <h3 className={cn("text-2xl", subFont.className)}>
              Raise capital by tokenizing your assets
            </h3>
            <Button
              size="lg"
              variant="secondary"
              className={cn(
                "mt-4 self-end text-lg hover:bg-blue-600 hover:text-white",
                subFont.className
              )}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
