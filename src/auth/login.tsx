import supabase from "../utils/supabase";
import { useNavigate, Link } from "react-router-dom";
import { SubmitButton } from "./submit-button";
import { Input } from "../components/ui/input";

export default function Login() {
  const navigate = useNavigate();

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const { error } = await supabase().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      navigate("/auth/login?message=Incorrect email or password");
    }

    navigate("/web");
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
        <form className="animate-in flex flex-col w-full justify-center gap-4 text-foreground mx-auto sm:max-w-sm border border-white/10 p-6 rounded-xl h-fit bg-white/5" onSubmit={signIn}>
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="-translate-y-3">To continue to Flowspace</p>

          <label className="text-md" htmlFor="email">
            Email
          </label>
          <Input
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
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
            autoComplete="current-password"
          />
          <SubmitButton
            className="p-2 border border-white/20 rounded-md bg-primary/10 hover:bg-primary/50 transition-colors transition-300 ease-in text-sm"
            pendingText="Signing In..."
            pendingClass="disabled"
          >
            Sign In
          </SubmitButton>
          <span className="w-full text-center">
            <Link className="link" to={"/auth/signup"}>
              Sign Up
            </Link>
            {" | "}
            <Link className="link" to={"/auth/reset"}>
              Reset Password
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
