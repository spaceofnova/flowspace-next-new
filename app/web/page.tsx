"use client";

import { useEffect, useState } from "react";
import { useBattery } from "@uidotdev/usehooks";

export default function Page() {
  const [kioskMode, setKioskMode] = useState<any | boolean>(false);
  const battery = useBattery();
  const [networkState, setNetworkState] = useState({
    isOnline: navigator.onLine,
    effectiveType: "",
    downlink: 0,
    rtt: 0,
  });

  useEffect(() => {
    const kioskModeEnabled =
      sessionStorage.getItem("kioskModeEnabled") || false;
    setKioskMode(kioskModeEnabled);

    const updateNetState = () => {
      const connection = (navigator as any).connection;
      if (connection) {
        setNetworkState({
          isOnline: navigator.onLine,
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      }
    };
    window.addEventListener("load", updateNetState);
    window.addEventListener("online", updateNetState);
    window.addEventListener("offline", updateNetState);

    return () => {
      window.removeEventListener("load", updateNetState);
      window.removeEventListener("online", updateNetState);
      window.removeEventListener("offline", updateNetState);
    };
  }, []);

  let greeting;
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <>
      {kioskMode ? (
        <div className="fixed top-4 right-4 text-right">
          {networkState.isOnline ? "Connected to Internet " : "Offline "}
           - 
          <span className={battery.charging ? "text-success" : "text-current"}>
            {" "}Battery at {Math.floor(battery.level! * 100)}%{" "}
            {battery.charging
              ? " (Charging " +
                Math.floor((battery.chargingTime! % 3600) / 60) +
                " minutes until full)"
              : ""}
          </span>
        </div>
      ) : null}

      <div className="p-4">
        <h1 className="text-4xl font-bold">{greeting + "!"}</h1>
      </div>
    </>
  );
}
