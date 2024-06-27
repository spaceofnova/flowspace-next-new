import { redirect } from "react-router-dom";
import supabase from "./utils/supabase";

export const middleware = async () => {
    const {
      data: { session },
    } = await supabase().auth.getSession();
    if (!session) {
      return redirect("/auth/login");
    }
    return null;
  };