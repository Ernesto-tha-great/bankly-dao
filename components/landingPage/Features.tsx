import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";

const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });

const contents = [
  {
    title: "For Investors",
    text: "Invest in a diverse range of financial and real-world assets",
    button: "Learn More",
  },
  {
    title: "For Asset Originators",
    text: "Raise capital by tokenizing your assets",
    button: "Learn More",
  },
];

const Features = () => {
  return (
    <div className="bg-gradient-to-b px-4 from-black  via-blue-950   to to-black text-white/90 py-6 border-t border-blue-200">
      <div className="py-16 text-center">
        <h1 className={cn(" text-4xl lg:text-6xl", subFont.className)}>
          Piron for those who are shaping the future
        </h1>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mx-16 my-16 ">
          {contents.map((content) => (
            <div
              key={content.text}
              className="flex flex-col items-start justify-start gap-4 border border-gray-700  rounded-lg p-6 hover:bg-slate-700 transition duration-150  hover:-translate-y-1 "
            >
              <h1 className={cn("text-4xl", subFont.className)}>
                {content.title}
              </h1>
              <h3 className={cn("text-xl", subFont.className)}>
                {content.text}
              </h3>
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "mt-4 self-end text-lg hover:bg-blue-600 hover:text-white",
                  subFont.className
                )}
              >
                {content.button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
