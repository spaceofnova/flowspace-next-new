import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();
  const signUp = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const displayName = formData.get("display_name") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          username,
          display_name: displayName,
        },
      },
    });

    if (error) {
      return redirect("/auth/signup?message=Could not sign up user");
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

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mx-auto sm:max-w-sm">
        <h1 className="text-3xl font-bold">Create your Account</h1>
        <p className="-translate-y-3">To continue to Flowspace</p>
        <div className="flex w-full gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Display Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="display_name"
              required
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="username"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <input
            type="text"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            name="email"
            required
          />
        </label>
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="input input-bordered"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signUp}
          className="btn"
          pendingText="Signing Up..."
          pendingClass="btn btn-disabled"
        >
          Sign Up
        </SubmitButton>
        {searchParams?.message && (
          <p className="badge badge-info w-full text-center">
            {searchParams.message}
          </p>
        )}
        <span className="w-full text-center">
          Already have an account?{" "}
          <Link className="link" href={"/auth/login"}>
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
}
