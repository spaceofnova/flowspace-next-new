import { useContext } from "react";
import { ConsoleContext } from "../providers/ConsoleProvider";
import { UserSettingsContext } from "../contexts/UserSettingsContext";
import Div from "../ui/elements/Div";

export default function DevTools() {
  const { console } = useContext(ConsoleContext);
  const { userSettings, updateValue } = useContext(UserSettingsContext);
  if (!userSettings) return null;
  if (!userSettings.devTools) return null;
  return (
    <Div className="min-w-52 max-w-64 h-full flex flex-col gap-2 p-2 fixed top-0 right-0 z-10 right-0">
      <div className="bg-white/10 w-full p-1">Devtools</div>

      <div className="flex flex-col w-full h-full gap-2 p-2 overflow-y-auto">
        <button onClick={() => updateValue("theme", "dark")}>Dark</button>
        <button onClick={() => updateValue("theme", "light")}>Light</button>
        <pre>{JSON.stringify(userSettings, null, 2)}</pre>
        {console.map(({ type, message }) => (
          <div
            className={`${type === "warn" && "bg-[#ffff3d4d]"} ${
              type === "error" && "bg-[#ff3d3d7d]"
            } w-full rounded-md`}
            key={Math.random() * 100000}
          >
            <div className="text-text">{message}</div>
          </div>
        ))}
      </div>
    </Div>
  );
}
