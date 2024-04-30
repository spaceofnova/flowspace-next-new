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
  };

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
        <input
          type="search"
          name="apps_search"
          placeholder="Search Apps.."
          className="input input-bordered w-full"
          autoComplete="off"
          onChange={searchGames}
        />
      </div>
      <div className="flex gap-4 flex-wrap p-4 h-full w-[calc(100%-3rem)] mx-auto">
        {games?.map((game: any) => {
          return (
            <div
              onClick={() => {
                showPlayer(game.id);
              }}
              className="h-28 w-36 bg-base-300 flex flex-col relative cursor-pointer overflow-hidden rounded-md p-0 animate-in"
              key={game.id}
            >
              <Image
                src={game.img}
                alt="Game Image"
                className="lg:w-full rounded-lg object-cover aspect-square"
                width={180}
                height={128}
                priority={true}
              />
              <div className="text-center w-full items-center absolute bottom-0 z-10 bg-base-300/90 text-xl font-medium">
                <p className="text-sm">{game.name}</p>
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
