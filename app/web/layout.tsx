"use server";
import Nav from "@/components/Nav";
import NextTopLoader from "nextjs-toploader";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data) {
    redirect("/auth/login");
  }
  return (
    <>
      <Nav />
      <NextTopLoader
        showSpinner={true}
        shadow={false}
        color="#00cdb8"
        zIndex={30}
      />
      <main className="w-[calc(100%-3.5rem)] h-full absolute right-0 bg-base-100 overflow-y-auto">
        {children}
      </main>
    </>
  );
}
