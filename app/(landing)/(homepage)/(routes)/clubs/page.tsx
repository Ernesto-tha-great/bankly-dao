import ClubFeatures from "@/components/landingPage/clubs/ClubFeatures";
import Faq from "@/components/landingPage/clubs/Faq";
import Header from "@/components/landingPage/clubs/Header";
import HowItWorks from "@/components/landingPage/clubs/HowItWorks";
import React from "react";

const Clubs = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <ClubFeatures />
      <Faq />
    </div>
  );
};

export default Clubs;
