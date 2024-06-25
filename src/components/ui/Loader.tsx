import { useContext, useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { ConsoleContext } from "../providers/ConsoleProvider";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const { addToConsole } = useContext(ConsoleContext);

  useEffect(() => {
    const handler = async () => {
      // initializeAddons();
      const {
        data: { user },
      } = await supabase().auth.getUser();
      const { data: games } = await supabase().from("games").select("*");

      if (user && games && isLoading) {
        addToConsole("log", "user data loaded");
        setIsLoading(false);
      } else {
        addToConsole("error", "user data not loaded");
        setTimeout(() => setIsLoading(false), 450);
      }
    };
    handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-background flex flex-col justify-center items-center gap-6 opacity-100 transition-all duration-300 ease-out z-50"
      style={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "all" : "none",
      }}
    >
      <div>
        <object
          type="image/svg+xml"
          data="/images/icons/logo animation.svg"
          width="100%"
          height="100%"
          style={{ width: "100%", height: "100%" }}
        ></object>
      </div>
      <div className="absolute bottom-2 font-black">Flowspace is Loading..</div>
    </div>
  );
}
