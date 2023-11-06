import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import LandingNav from "@/components/landingPage/LandingNav";
import React from "react";
import Offerings from "@/components/landingPage/Offerings";
import PironFeatures from "@/components/landingPage/PironFeatures";
import Footer from "@/components/landingPage/Footer";
import Conversation from "@/components/landingPage/Conversation";

const LandingPage = () => {
  return (
    <div className="relative h-screen  ">
      <nav className="">
        <LandingNav />
      </nav>
      <section className="">
        <Hero />
      </section>
      <section>
        <Offerings />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <PironFeatures />
      </section>
      <section>
        <Conversation />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
