import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

function create(url: string) {
  var win = window.open() || window;
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement<any | undefined>("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.src = url;
  let title = document.createElement("title");
  title.innerText = "Google";
  win.document.head.appendChild(title);
  win.document.body.appendChild(iframe);
}

export function Player({
  show,
  game,
  closeButton,
}: {
  show: boolean;
  game: string;
  closeButton: any;
}) {
  if (!show) return null; // Don't render if not visible
  const supabase = createClient();
  const [gameInfo, setGameInfo] = useState<any | undefined>([]);
  useEffect(() => {
    const loadGame = async () => {
      const { data: gameinfo, error } = await supabase
        .from("games")
        .select("*")
        .eq("id", game) // Filter by the ID
        .single(); // Fetch a single row

      if (error) {
        console.log(error);
      } else {
        setGameInfo(gameinfo);
      }
    };
    loadGame();
  }, []);
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-row">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-fit">
            <h3 className="font-bold text-lg">Game info</h3>
            <span className="py-4">Name: </span>
            <span>{gameInfo.name}</span> <br />
            <span className="py-4">Icon: </span>
            <img src={gameInfo.img} className="w-1/2" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="w-fit">
            <h1 className="text-lg font-bold">Game not working?</h1>
            <p>Click anywhere inside the game's frame to focus it.</p>
            <br />
            <p>
              If you have other issues with this game, please send feedback with
              the link in the footer.
            </p>
          </div>
        </div>
      </dialog>
      <div className="w-full h-full fixed z-20 bg-black/50 opacity-0 animate-fadein">
        <div className="join join-horizontal lg:join-vertical absolute right-2 lg:right-16 bottom-[4rem] lg:top-4 bg-base-300 ">
          {closeButton}

          <button
            className="btn join-item"
            onClick={() => {
              create(gameInfo.url);
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
          <button
            className="btn join-item"
            onClick={() => {
              (document.getElementById("gameFrame") as HTMLElement).setAttribute('src', gameInfo.url);
              (document.getElementById("refreshSVG")! as HTMLElement).animate(
                [
                  { transform: "rotate(0deg)" },
                  { transform: "rotate(180deg)" },
                ],
                {
                  duration: 400,
                  iterations: 1,
                }
              )
            }}
          >
            <svg
            id="refreshSVG"
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
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
          <button
            className="btn join-item"
            onClick={() => {
              (
                document.getElementById("my_modal_3")! as HTMLDialogElement
              ).showModal();
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </button>
        </div>
        <div className="w-[calc(100%-1rem)] h-[calc(100%-8rem)] lg:w-9/12 lg:aspect-video -top-28 lg:top-0 absolute inset-0 mx-auto my-auto bg-base-300 z-20 rounded-md overflow-y-auto overflow-x-hidden block animate-slideup">
          <iframe src={gameInfo.url} className="w-full h-full bg-transparent" id="gameFrame"></iframe>
        </div>
      </div>
    </>
  );
}

export function usePlayer() {
  const [playerConfig, setPlayerConfig] = useState({
    show: false,
    game: "",
  });

  const showPlayer = (game: string) => {
    setPlayerConfig({ show: true, game });
  };
  const hidePlayer = () => {
    setPlayerConfig({ show: false, game: "" });
  };

  return { showPlayer, hidePlayer, playerConfig };
}
