import React from "react";
import Navigation from "./_components/Navigation";
// import Navbar from "./_components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  min-h-screen dark:bg-[#0e0e0e]">
      <div className="flex max-w-[2300px] w-full">
        <Navigation />
        <main className="flex-1 h-screen bg-gradient-to-tr from-[#FBF7FF] pl-12 via-[#f8f5fc] to-[#E4CCFF] overflow-y-auto">
          {/* <Navbar /> */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
