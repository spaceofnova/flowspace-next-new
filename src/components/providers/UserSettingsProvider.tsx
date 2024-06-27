import React from "react";
import {
  defaultUserSettings,
  UserSettings,
  UserSettingsContext,
} from "../contexts/UserSettingsContext";


export default function UserSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userSettings, setUserSettings] = React.useState<UserSettings>(JSON.parse(localStorage.getItem("userSettings")!) || defaultUserSettings);

  const updateValue = (path: string, newValue: unknown) => {
    const newUserSettings = JSON.parse(JSON.stringify(userSettings));
    const pathArray = path.split(".");
    let currentValue = newUserSettings;
    for (let i = 0; i < pathArray.length - 1; i++) {
      currentValue = currentValue[pathArray[i]];
    }
    currentValue[pathArray[pathArray.length - 1]] = newValue;
    setUserSettings(newUserSettings);
    localStorage.setItem("userSettings", JSON.stringify(newUserSettings));
  };
  return (
    <UserSettingsContext.Provider
      value={{ userSettings, setUserSettings, updateValue }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
}
