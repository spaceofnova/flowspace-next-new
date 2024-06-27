import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../utils/supabase";

function create(url: string) {
  const win = window.open() || window;
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  const iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.src = url;
  const title = document.createElement("title");
  title.innerText = "Google";
  win.document.head.appendChild(title);
  win.document.body.appendChild(iframe);
}

interface GameInfo {
  id: string;
  name: string;
  img: string;
  url: string;
}

export default function AppPlayer() {
  const { id: appId } = useParams();
  const [gameInfo, setGameInfo] = useState<GameInfo | undefined>(undefined);
  useEffect(() => {
    const loadGame = async () => {
      const { data: gameinfo, error } = await supabase()
        .from("games")
        .select("*")
        .eq("id", appId) // Filter by the ID
        .single(); // Fetch a single row

      if (error) {
        console.log(error);
      } else {
        setGameInfo(gameinfo);
      }
    };
    loadGame();
  }, [appId]);
  if (!gameInfo) return (<>Loading</>);
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="w-fit h-fit bg-background right-2 -top-32 fixed h-8 hover:top-2 opacity-45 hover:opacity-100 p-4 transition-all z-10 flex flex-col gap-4 rounded-lg">
        <Link className="btn join-item" to="/web/apps">
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
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </Link>

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
            (document.getElementById("gameFrame") as HTMLIFrameElement).src =
              gameInfo.url;
            (document.getElementById("refreshSVG")! as HTMLElement).animate(
              [{ transform: "rotate(0deg)" }, { transform: "rotate(180deg)" }],
              {
                duration: 400,
                iterations: 1,
              }
            );
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
        <div className="rounded-b-md hover:top-2 bg-base-200 flex justify-center">
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
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <iframe
        src={gameInfo.url}
        className="z-[2] absolute opacity-0 min-h-[95%] max-w-[95%] aspect-video rounded-lg"
        title="Game"
        id="gameFrame"
        onLoad={() => {
          (
            document.getElementById("gameFrame") as HTMLIFrameElement
          ).style.opacity = "100";
          (document.getElementById("gameFrame") as HTMLIFrameElement).focus();
        }}
      ></iframe>
    </div>
  );
}
