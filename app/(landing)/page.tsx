import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import LandingNav from "@/components/landingPage/LandingNav";
import React from "react";
import Offerings from "@/components/landingPage/Offerings";

const LandingPage = () => {
  return (
    <div className=" h-screen  ">
      <LandingNav />
      <Hero />
      <Offerings />
      <Features />
    </div>
  );
};

export default LandingPage;
