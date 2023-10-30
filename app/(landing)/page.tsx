import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import LandingNav from "@/components/landingPage/LandingNav";
import React from "react";

const LandingPage = () => {
  return (
    <div className=" h-screen  ">
      <LandingNav />
      <Hero />
      <Features />
    </div>
  );
};

export default LandingPage;
