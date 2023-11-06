"use client";
import { useViewport } from "@/app/utils/utils";
import DesktopNav from "./DesktopNav";
import MobileSidebar from "./Mobile-sidebar";

const LandingNav = () => {
  const { width } = useViewport();
  const breakpoint = 640;
  return (
    <div className="bg-black text-white/90">
      {width < breakpoint ? <MobileSidebar /> : <DesktopNav />}
    </div>
  );
};

export default LandingNav;
