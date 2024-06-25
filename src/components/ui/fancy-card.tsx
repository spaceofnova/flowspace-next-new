import React from "react";

export default function FancyCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="fancy-card"
      className="bg-white/5 p-4 shadow-md border w-full lg:w-1/2 border-white/25 overflow-hidden border-white/25 rounded-lg h-full gap-4 flex flex-col"
    >
      {children}
    </div>
  );
}
