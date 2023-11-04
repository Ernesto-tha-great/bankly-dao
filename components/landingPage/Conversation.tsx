"use client";
import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const Conversation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-black text-white/90 ">
      <div className="text-center py-20">
        <h1 className={cn("text-5xl", subFont.className)}>
          Join the Conversation
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Conversation;
