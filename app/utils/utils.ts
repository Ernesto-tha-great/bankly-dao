"use client";
import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(620);

  useEffect(() => {
    // Set the width based on the current window width after mount
    setWidth(window.innerWidth);

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
