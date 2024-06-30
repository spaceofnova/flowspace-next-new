import supabase from "../../utils/supabase";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { buttonVariants } from "../ui/button";

export default function AuthButtons() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase()
      .auth.getSession()
      .then(({ data: { session } }) => {
        setUser(session?.user);
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabase().auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setUser(undefined);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex gap-2">
      {loading ? (
        <></>
      ) : user ? (
        <Link to="/web" className={buttonVariants({ variant: "outline" })}>
          Go to Web
        </Link>
      ) : (
        <>
          <Link
            to="/auth/login"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign In
          </Link>
          <Link
            to="/auth/signup"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
