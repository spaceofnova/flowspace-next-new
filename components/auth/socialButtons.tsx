import { createClient } from "@/utils/supabase/server";

export function SignInWithGoogleButton() {
  const handleLogin = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <button onClick={handleLogin} className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover btn">
        Sign in with Google
      </button>
  );
}
