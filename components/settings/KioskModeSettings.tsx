"use client";

import { useEffect, useState } from "react";

export default function KioskModeSettings() {
    const [kioskMode, setKioskMode] = useState<any | boolean>(false);

    useEffect(() => {
        const kioskModeEnabled = sessionStorage.getItem("kioskModeEnabled") || false;
        setKioskMode(kioskModeEnabled);
    }, []);
    return (
        <div className="flex justify-center items-center gap-4 border-2 border-white/20 shadow-lg bg-base-200 card prose">
            <h1 className="card-title">Kiosk Mode</h1>
            <p>Turn on/off Kiosk Mode. Kiosk Mode adjusts the UI to make it easier to use for certain displays.</p>
            <button className="w-full btn btn-primary" onClick={() => {setKioskMode(!kioskMode); sessionStorage.setItem("kioskModeEnabled", kioskMode!.toString());}}>{kioskMode ? "Disable Kiosk Mode" : "Enable Kiosk Mode"}</button>
        </div>
    );
}