import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";
import { SubmitButton } from "./submit-button";
import { Input } from "../components/ui/input";

export default function SignUp() {
  const navigate = useNavigate();
  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const displayName = (
      document.getElementById("display_name") as HTMLInputElement
    ).value;

    const { error } = await supabase().auth.signUp({
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
      return navigate("/auth/signup?message=Could not sign up user");
    }

    return navigate("/web");
  };

  return (
    <div className="flex-1 flex flex-col px-8 w-full h-screen justify-center gap-2 bg-background text-text">
      <Link
        to="/"
        className="absolute left-8 top-8 py-2 px-4 group text-sm z-20 inline-flex items-center gap-2 border border-white/10 rounded-md bg-white/5"
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
      <div className="">
        <form
          className="animate-in flex flex-col w-full justify-center gap-4 text-foreground mx-auto sm:max-w-sm border border-white/10 p-6 rounded-xl h-fit bg-white/5"
          onSubmit={signUp}
        >
          <h1 className="text-3xl font-bold">Create your Account</h1>
          <p className="-translate-y-3">To continue to Flowspace</p>
          <div className="flex w-full gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Display Name</span>
              </div>
              <Input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="display_name"
                id="display_name"
                required
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <Input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="username"
              id="username"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <Input
              type="text"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              name="email"
              id="email"
              required
            />
          </label>
          <label className="form-control w-full">
            <label className="text-md" htmlFor="password">
              Password:
            </label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              id="password"
              required
            />
          </label>
          <SubmitButton
            className="p-2 border border-white/20 rounded-md bg-primary/10 hover:bg-primary/50 transition-colors transition-300 ease-in text-sm"
            pendingText="Signing Up..."
            pendingClass="disabled"
          >
            Sign Up
          </SubmitButton>
          <span className="w-full text-center">
            Already have an account?{" "}
            <Link className="link" to={"/auth/login"}>
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
