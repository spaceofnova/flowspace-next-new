import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/auth/login?message=Incorrect email or password");
    }

    return redirect("/web");
  };

  return (
    <div className="flex-1 flex flex-col px-8 w-full justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 btn group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-foreground mx-auto sm:max-w-sm">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="-translate-y-3">To continue to Flowspace</p>

        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="input input-bordered"
          name="email"
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="username"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="input input-bordered"
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />
        <SubmitButton
          formAction={signIn}
          className="btn btn-primary"
          pendingText="Signing In..."
          pendingClass="btn btn-disabled"
        >
          Sign In
        </SubmitButton>
        {searchParams?.message && (
          <p className="badge badge-info w-full text-center">
            {searchParams.message}
          </p>
        )}
        <span className="w-full text-center">
          <Link className="link" href={"/auth/signup"}>
            Sign Up
          </Link>
          {" | "}
          <Link className="link" href={"/auth/reset"}>
            Reset Password
          </Link>
        </span>
      </form>
    </div>
  );
}
