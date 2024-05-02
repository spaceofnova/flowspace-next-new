"use client";
import { createClient } from "@/utils/supabase/client";

export const loadAndEval = async (addon: any) => {
  const data = await fetch(
    "/addons/index.js"
  ).then((res) => res.text());

  const script = new Function(data);
  script();
};

export const installAddon = async (addonID: string) => {
  const ids = localStorage.getItem("installedAddons")
    ? JSON.parse(localStorage.getItem("installedAddons")!)
    : [];
  if (!ids.includes(addonID)) {
    ids.push(addonID);
    localStorage.setItem("installedAddons", JSON.stringify(ids));
  } else {
    console.log("Addon already installed: " + addonID);
  }
  console.log(
    "Installed addon: " + addonID,
    "All installed addons: " +
      JSON.parse(localStorage.getItem("installedAddons")!)
  );
};

export const uninstallAddon = async (addonID: string) => {
  const ids = localStorage.getItem("installedAddons")
    ? JSON.parse(localStorage.getItem("installedAddons")!)
    : [];
  const index = ids.indexOf(addonID);
  if (index > -1) {
    ids.splice(index, 1);
    localStorage.setItem("installedAddons", JSON.stringify(ids));
  }
  console.log(
    "Uninstalled addon: " + addonID,
    "All installed addons: " +
      JSON.parse(localStorage.getItem("installedAddons")!)
  );
};

export const isAddonInstalled = (addonID: string) => {
  const ids = localStorage.getItem("installedAddons")
    ? JSON.parse(localStorage.getItem("installedAddons")!)
    : [];
  return ids.includes(addonID);
};

export const getInstalledAddons = () => {
  const ids = localStorage.getItem("installedAddons")
    ? JSON.parse(localStorage.getItem("installedAddons")!)
    : [];
  return ids;
};

export const initializeAddons = async () => {
    const ids = localStorage.getItem("installedAddons")
    ? JSON.parse(localStorage.getItem("installedAddons")!)
    : [];
  for (ids; ids.length > 0; ids.pop()) {
    const { data: addons, error } = await createClient()
      .from("addons")
      .select("*")
      .eq("id", ids)

    if (error) {
      console.error("Load addons error:", error);
    } else {
      addons.map((addon: any) => {
        loadAndEval(addon.raw);
      });
    }
  }
};
