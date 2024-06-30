import supabase from "../utils/supabase";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SyncLoader from "react-spinners/SyncLoader";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    const { error } = await supabase().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      navigate("/web");
    }
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
        <Card className="animate-in flex flex-col w-full justify-center text-foreground mx-auto sm:max-w-sm border border-white/10 p-2 rounded-xl h-fit bg-white/5">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>To continue to Flowspace</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document.getElementById("password")?.focus();
                  }
                }}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document.getElementById("login")?.click();
                  }
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={signIn}
              className="w-full flex justify-between"
              disabled={loading}
              id="login"
            >
              Login{" "}
              <SyncLoader
                loading={loading}
                size={8}
                color="currentColor"
                aria-label="Loading Spinner"
              />
            </Button>
          </CardFooter>
          {error && <p className="mx-auto text-red-500">{error}</p>}
        </Card>
      </div>
    </div>
  );
}
