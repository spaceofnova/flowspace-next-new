import { useContext } from "react";
import { UserSettingsContext } from "../contexts/UserSettingsContext";
import Div from "../ui/elements/Div";

export default function Apperance() {
  const { updateValue, userSettings } = useContext(UserSettingsContext);
  return (
    <Div className="flex flex-col p-2 rounded-md w-80">
      <h1 className="text-4xl font-bold">Apperance</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-font-bold">Theme</label>
          <div className="flex gap-2">
            <button className="btn btn-primary" onClick={() => updateValue("theme", "light")}>
              Light
            </button>
            <button className="btn btn-secondary" onClick={() => updateValue("theme", "dark")}>
              Dark
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Background</label>
          <div className="flex gap-2">
            <button className="btn btn-primary" onClick={() => updateValue("backgroundType", "color")}>
              Color
            </button>
            <button className="btn btn-secondary" onClick={() => updateValue("backgroundType", "image")}>
              Image
            </button>
          </div>
        </div>
      </div>
      <div>
        <label className="text-font-bold">Transparency Effects</label>
        <div className="flex gap-2">
          <input type="checkbox" name="blurEffects" checked={userSettings.blurEffects} onChange={() => updateValue("blurEffects", !userSettings.blurEffects)} />
        </div>
      </div>
    </Div>
  );
}
