"use client";

import { useEffect, useState } from "react";
import NavButton from "../NavButton";

export default function AddonButtons() {
  const [buttons, setButtons] = useState<any>([]);
  useEffect(() => {
    window.addEventListener("registerNewNavButton", (event: any) => {
      console.log(event.detail);
      setButtons([...buttons, event.detail]);
    });
  }, []);
  return (
    <>
      {buttons &&
        buttons.map((button: any) => (
          <button
            key={Math.random() * 100000}
            className="w-full aspect-square m-auto p-[0.84rem] rounded-md"
            onClick={() => {
              button.onClick();
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: button.icon }}></div>
          </button>
        ))}
    </>
  );
}
