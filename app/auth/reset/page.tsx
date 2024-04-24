import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default function Page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const email = formData.get("email") as string;
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      console.log("Please enter a valid email");
      return;
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(
      email.toString()
    );

    if (error) {
      console.log("Failed to send email: " + error.message);

      return;
    }
    if (data) {
      console.log(data);
      return;
    }
  };
  return (
    <div className="max-w-md mx-auto my-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reset your Password ✨</h1>
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              className="input input-bordered w-full"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="btn btn-primary w-full"
            formAction={handleSubmit}
          >
            Send Reset Link
          </button>
        </div>

        <div className="text-sm">
          Have an account?{" "}
          <Link
            className="font-medium text-indigo-500 hover:text-indigo-600"
            href="/auth/login"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
