"use client";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import {
  installAddon,
  getInstalledAddons,
  uninstallAddon,
} from "@/components/addons/functions";

export default function AddonsList() {
  const [addons, setAddons] = useState<any | Array<ArrayConstructor>>([]);
  const [isInstalled, setIsInstalled] = useState<any | Array<ArrayConstructor>>(
    []
  );
  const [needsRestart, setNeedsRestart] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const loadAddons = async () => {
      const { data: addons, error } = await supabase.from("addons").select("*");
      if (error) {
        console.error("Load addons error:", error);
      } else {
        setAddons(addons);
      }
    };
    loadAddons();

    const installedAddons = getInstalledAddons();
    setIsInstalled(installedAddons);
  }, []);

  return (
    <div className="">
      {addons.map((addon: any) => (
        <div
          key={addon.id}
          className="card card-compact w-96 bg-base-300 animate-in"
        >
          <div className="card-body">
            <h2 className="card-title mt-0">{addon.name}{" "}{addon.isVerified ? <span className="badge badge-success">Verified</span> : <span className="badge badge-error">Unverified</span>}</h2>
            <p>
              {addon.desc} <br /> {addon.author} - {addon.version}
            </p>
            <div className="card-actions justify-end">
              <input
                type="checkbox"
                className="toggle"
                checked={isInstalled.includes(addon.id)}
                onChange={(e) => {
                  isInstalled.includes(addon.id)
                    ? uninstallAddon(addon.id)
                    : installAddon(addon.id);
                  e.target.checked = !e.target.checked;
                  setIsInstalled(getInstalledAddons());
                  setNeedsRestart(true);
                }}
              />
            </div>
          </div>
          {needsRestart && (
            <div className="w-full text-center bg-base-200 p-2 rounded-box ">
              Restart required{" "}
              <button
                className="btn btn-error"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
