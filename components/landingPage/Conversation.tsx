"use client";
import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { BsDiscord } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
    <div className="bg-black text-white/90 border-t border-blue-200">
      <div className="text-center py-24">
        <h1 className={cn("text-5xl", subFont.className)}>
          Join the Conversation
        </h1>
      </div>
      <div className="grid grid-cols-2 mx-16 py-14">
        <div className="border-r border-blue-950">
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-6 max-w-lg">
                    <FormLabel className={cn("text-4xl", subFont.className)}>
                      Suscribe to our newsletter
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Stay in the loop with the latest from Piron Finance. Get
                      insights, updates, and community highlights delivered
                      straight to your inbox.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-12 ml-20">
          <h2 className={cn("text-4xl ", subFont.className)}>
            Say GM, we're listening
          </h2>
          <div className="flex gap-6">
            <BsDiscord
              className="hover:text-blue-600 hover:cursor-pointer  "
              size={44}
            />
            <FaSquareXTwitter
              className="hover:text-blue-950 hover:cursor-pointer "
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
