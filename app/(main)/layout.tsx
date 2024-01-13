import React from "react";
import Navigation from "./_components/Navigation";
// import Navbar from "./_components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex   h-full dark:bg-[#0e0e0e]" suppressHydrationWarning>
      <Navigation />
      <main className="flex-1 flex-col h-full overflow-y-auto">
        {/* <Navbar /> */}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
