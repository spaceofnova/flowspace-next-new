"use client";
import { useState } from "react";

import DevPanelSettings from "@/components/settings/DevPanel";
import UserProfile from "@/components/UserProfile";
import AddonManger from "@/components/addons/AddonManger";
import KioskModeSettings from "@/components/settings/KioskModeSettings";

export default function Page() {
  const [page, setPage] = useState(0);
  let pages: any = [
    {
      id: 0,
      name: "Profile",
      content: <UserProfile />,
    },
    {
      id: 1,
      name: "Notifications",
      content: "No notifications at this time",
    },
    {
      id: 2,
      name: "Add-ons",
      content: <AddonManger />,
    },
    {
      id: 3,
      name: "Developer",
      content: <DevPanelSettings />,
    },
    {
      id: 4,
      name: "Kiosk Mode",
      content: <KioskModeSettings />,
    }
  ];

  return (
    <div className="flex flex-col h-full w-full gap-4 p-4">
      <h1 className="text-3xl font-medium">Settings</h1>
      <div className="flex flex-row p-1 border-2 border-primary/10 gap-2 rounded-xl w-fit backdrop-blur-md">
        {pages.map((item: any) => (
          <button
            key={item.id}
            className={
              "join-item p-2 rounded-lg transition-all " +
              (item.id == pages[page].id ? "text-primary bg-primary/20" : "")
            }
            onClick={() => {
              setPage(item.id);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="w-full h-full">
        {pages[page] ? pages[page].content : "Page Not Found"}
      </div>
    </div>
  );
}
