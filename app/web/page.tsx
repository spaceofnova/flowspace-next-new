import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

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
      <div className="p-4">
        <h1 className="text-4xl font-bold">
          {greeting + ", " + user?.user_metadata?.first_name + "!"}
        </h1>
      </div>
    </>
  );
}
