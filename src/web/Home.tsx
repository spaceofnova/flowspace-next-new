import { User } from "@supabase/supabase-js";
import { useContext, useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { UserSettingsContext } from "../components/contexts/UserSettingsContext";
import { FiX } from "react-icons/fi";

interface Item {
  id: string;
  name: string;
  img: string;
}

export default function Home() {
  const [recentItems, setRecentItems] = useState<Item[]>([]);
  const { userSettings } = useContext(UserSettingsContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRecentItems(JSON.parse(localStorage.getItem("recentItems") || "[]"));
    }
  }, []);
  const user: User = useOutletContext();

  const currentHour = new Date().getHours();
  const greeting =
    currentHour >= 5 && currentHour < 12
      ? "Good Morning"
      : currentHour >= 12 && currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-4xl font-bold text-default [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] flex gap-2 items-center">
            {greeting + ", " + (user?.user_metadata.first_name || user?.user_metadata.display_name) + "!"}
          </h1>
        </div>
        <div className="-translate-y-8">
          <h2 className="text-3xl text-default font-bold [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] flex gap-2 items-center">
            Jump back in
            {recentItems.length > 0 && (
              <FiX
                className="ml-2 w-6 h-6 cursor-pointer text-red-500 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)]"
                onClick={() => {
                  setRecentItems([]);
                  localStorage.setItem("recentItems", JSON.stringify([]));
                }}
              />
            )}
          </h2>

          {recentItems.length > 0 ? (
            <div className="flex gap-4 mt-4">
              {recentItems.map((item: Item) => (
                <Link
                  key={item.id}
                  className={`w-52 bg-base-100 shadow-xl bg-background/75 rounded-xl flex flex-col justify-between ${
                    userSettings.blurEffects ? "backdrop-blur-xl" : ""
                  }`}
                  to={"/web/apps/" + item.id}
                >
                  <figure className="pt-2 px-2">
                    <img
                      src={item.img}
                      alt="Shoes"
                      className="rounded-lg aspect-video object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>Play some games and they'll appear here!</p>
          )}
        </div>
      </div>
    </>
  );
}
