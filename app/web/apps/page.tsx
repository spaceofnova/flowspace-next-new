"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Player, usePlayer } from "@/components/Player";
import Image from "next/image";

export default function Page() {
  const [games, setGames] = useState<any | undefined>([]);
  const { showPlayer, hidePlayer, playerConfig } = usePlayer();

  const searchGames = async (event: any) => {
    const supabase = createClient();
    const searchTerm = event.target.value;

    if (searchTerm.length > 0) {
      // Only search if something is typed
      let { data: games, error } = await supabase
        .from("games")
        .select()
        .ilike("name", `%${searchTerm}%`);

      if (error) {
        console.error("Search error:", error);
      } else {
        setGames(games);
      }
    } else {
      let { data: games } = await supabase.from("games").select();
      setGames(games);
    }
  }

  useEffect(() => {
    const supabase = createClient();
    const loadGames = async () => {
      let { data: games, error } = await supabase.from("games").select();
      if (error) console.error("Error loading games:", error);
      else {
        setGames(games); // Initially show all games
      }
    };
    loadGames();
  }, []);
  return (
    <div className="grid">
      <div className="flex w-full gap-4 p-4">
        <h1 className="text-4xl font-bold w-48 hidden lg:block">All Apps</h1>
        <input
          type="search"
          name="apps_search"
          placeholder="Search Apps.."
          className="input input-bordered w-full"
          autoComplete="off"
          onChange={searchGames}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 flex-wrap p-4 lg:mx-auto lg:w-11/12 w-full lg:mt-4" >
        {games?.map((game: any) => {
          return (
            <div
              onClick={() => {
                showPlayer(game.id);
              }}
              className={"h-24 lg:h-32 lg:w-32 lg:aspect-sqaure bg-base-300 flex lg:flex-col relative lg:cursor-pointer lg:overflow-hidden rounded-box p-2 lg:p-0 " + (!game.mobile ? "hidden lg:flex" : "")}
              key={game.id}
            >
              <Image
                src={game.img}
                alt="Game Image"
                className="lg:w-full min-h-full rounded-lg object-cover aspect-square"
                width={80}
                height={80}
              />
              <div className="lg:text-center lg:w-full lg:items-center lg:absolute lg:bottom-0 lg:z-10 lg:bg-base-300/90 ml-2 mt-1 lg:m-0 text-xl font-medium w-full">
                <p className="lg:text-sm">{game.name}</p>
                <button className="w-full btn lg:hidden">Play</button>
              </div>
            </div>
          );
        })}
      </div>
      <Player
        {...playerConfig}
        closeButton={
          <button
            className="btn join-item"
            onClick={() => {
              hidePlayer();
            }}
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        }
      />
    </div>
  );
}
