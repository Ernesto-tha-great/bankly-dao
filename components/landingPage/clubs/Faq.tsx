import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

const faqs = [
  {
    question: "What is an investment club?",
    answer: "",
  },
  {
    question: "What is the criteria for joining a club?",
    answer: "",
  },
  {
    question: "How do I start a club?",
    answer: "",
  },
  {
    question: "what are the legal entities involved?",
    answer: "",
  },
  {
    question: "Do I need to be a member to invest in a club?",
    answer: "",
  },
  {
    question: "what can I invest in?",
    answer: "",
  },
];

const Faq = () => {
  return (
    <div className="bg-black items-center grid grid-cols-2 justify-around py-20 text-white/90 px-20">
      <div>
        <h1 className={cn("text-4xl ", garamond.className)}>FAQ</h1>
      </div>
      <div>
        {faqs.map((item) => (
          <Accordion key={item.question} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className={cn("text-xl", garamond.className)}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className={cn("text-lg", garamond.className)}>
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
