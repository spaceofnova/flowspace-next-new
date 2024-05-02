"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState !== "complete") {
      const handler = () => {
        setTimeout(() => setIsLoading(false), 450);
      };
      window.addEventListener("load", handler);

      return () => {
        window.removeEventListener("load", handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        setTimeout(() => setIsLoading(false), 450);
      }, 0);
      return () => window.clearTimeout(timeout);
    }
  }, []);
  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-base-100 z-50 flex flex-col justify-center items-center text-2xl font-black gap-2 opacity-100 transition-all"
      style={{ display: isLoading ? "flex" : "none" }}
    >
      Flowspace
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
}
