"use client";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import {
  getInstalledAddons,
  uninstallAddon,
} from "@/components/addons/functions";

export default function AddonManager() {
  const [addons, setAddons] = useState<any | Array<any>>([]);
  const supabase = createClient();

  const loadAddons = async () => {
    const { data: addons, error } = await supabase
      .from("addons")
      .select("*")
      .in("id", getInstalledAddons());
    if (error) {
      console.error("Load addons error:", error);
    } else {
      setAddons(addons);
    }
  };
  useEffect(() => {
    loadAddons();
  }, []);

  return (
    <div className="">
      {addons[0] === undefined && <p>No addons installed.</p>}
      {addons.map((addon: any) => (
        <div key={addon.id} className="card card-compact w-96 bg-base-300">
          <div className="card-body">
            <h2 className="card-title mt-0">{addon.name}</h2>
            <p>
              {addon.desc} | {addon.author} | {addon.version}
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  uninstallAddon(addon.id);
                  loadAddons();
                }}
              >
                Uninstall
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
