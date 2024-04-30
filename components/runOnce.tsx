"use client";
import { useEffect } from "react";
import { initializeAddons } from "./addons/functions";
export default function RunOnce() {
  useEffect(() => {
    initializeAddons();
  });
  return <></>;
}
