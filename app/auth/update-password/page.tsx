import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const updatePassword = async (formData: FormData) => {
    "use server";

    const newPassword = formData.get("password") as string;
    const supabase = createClient();

    supabase.auth.exchangeCodeForSession(searchParams.code);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return redirect(
        "/auth/update-password?message=Failed to update password: " +
          error.message.toString()
      );
    }

    return redirect("/auth/login?message=Password updated successfully");
  };

  return (
    <div className="flex-1 flex flex-col px-8 w-full justify-center gap-2 max-w-md mx-auto">
      <form className="flex flex-col gap-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered"
          required
        />
        <button type="submit" className="btn" formAction={updatePassword}>
          Update Password
        </button>
      </form>
      {searchParams?.message && (
        <p className="badge badge-info w-full text-center">
          {searchParams.message}
        </p>
      )}
    </div>
  );
}
