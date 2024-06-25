import { useContext } from "react";
import { UserSettingsContext } from "../contexts/UserSettingsContext";

export default function DevToggle() {
    const { userSettings, updateValue } = useContext(UserSettingsContext);
  return (
    <button onClick={() => updateValue("devTools", !userSettings.devTools)}>
        {userSettings.devTools ? "Disable DevTools" : "Enable DevTools"}
    </button>
  );
}