"use client";
import Notice from "@/components/Notice";
import AddonsList from "@/components/addons/AddonsList";
export default function Page() {
  return (
    <>
    <Notice>Please Note: The store is currently under development. Some features and items may be temporary.</Notice>
      <div className="w-full p-4 prose">
        <h1>Welcome to the Store!</h1>

        <h3>Verified Addons: </h3>
        <AddonsList />
      </div>
    </>
  );
}
