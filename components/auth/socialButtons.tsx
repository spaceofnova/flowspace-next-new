"use server";
import { createClient } from "@/utils/supabase/server";

export async function SignInWithGoogleButton() {
  const handleLogin = async () => {
    "use server";
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover btn w-fit"
    >
      Sign in with Google
    </button>
  );
}
