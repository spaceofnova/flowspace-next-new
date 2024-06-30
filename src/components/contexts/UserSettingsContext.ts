import React from "react";
export interface UserSettings {
  theme?: "light" | "dark";
  backgroundType?: "color" | "image";
  wallaper?: {
    url: string;
    type: "local" | "remote";
    author?: string;
  };
  devTools?: boolean;
  blurEffects?: boolean;
}
interface UserSettingsProviderProps {
  userSettings: UserSettings;
  setUserSettings: (userSettings: UserSettings) => void;
  updateValue: (key: string, value: UserSettings[keyof UserSettings]) => void;
}

export const useUserSettings = () => {
  const context = React.useContext(UserSettingsContext);
  if (context === undefined) {
    throw new Error(
      "useUserSettings must be used within a UserSettingsProvider"
    );
  }
  return context;
};

export const defaultUserSettings: UserSettings = {
  blurEffects: true,
  backgroundType: "image",
  wallaper: {
    url: "https://fastly.picsum.photos/id/260/1920/1080.jpg?hmac=IdFaEpfvllJQwDliRd5bxaQ8hHy6lC_cB48eAYrSEPA",
    type: "remote",
    author: "",
  },
};

export const UserSettingsContext =
  React.createContext<UserSettingsProviderProps>({
    userSettings: defaultUserSettings,
    setUserSettings: () => {},
    updateValue: () => {},
  });
