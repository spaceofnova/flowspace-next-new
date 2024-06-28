import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";


export default async function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
