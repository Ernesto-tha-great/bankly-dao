import Footer from "@/components/landingPage/Footer";
import LandingNav from "@/components/landingPage/LandingNav";
import React from "react";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full" suppressHydrationWarning>
      <main className=" flex flex-col min-h-screen">
        <LandingNav />
        <section>{children}</section>
        <Footer />
      </main>
    </div>
  );
};

export default HomePageLayout;
